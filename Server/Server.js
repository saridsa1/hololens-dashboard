/**
 * Created by satyasumansaridae on 10/2/17.
 */
var restify = require('restify');
var axios = require('axios');
var errors = require('restify-errors');
var serveStatic = require('serve-static-restify');
var finalhandler = require('finalhandler');

var firebase = require("firebase-admin");

var serviceAccount = require("./hololensdashboard-firebase-adminsdk-le3zd-4c61080791.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hololensdashboard.firebaseio.com"
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const restifyBodyParser = require('restify-plugins').bodyParser;
let my_session = require('restify-memory-session')({
    debug: true
});

const server = restify.createServer({});
server.use(restifyBodyParser());
server.use(my_session.sessionManager);

server.opts(/.*/, function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(200);
    return next();
});

let services = {
    "OS_INFO": "/api/os/info",
    "BATTERY_INFO": "/api/power/battery",
    "POWER_STATE": "/api/power/state",
    "WIFI_MAN": "/api/wifi/interfaces",
    "PERF_DATA": "/api/resourcemanager/systemperf",
    "IPCONFIG":"/api/networking/ipconfig"
};

let captureServices = {
    "CAPTURE_HIGH": "/api/holographic/stream/live_high.mp4",
    "CAPTURE_LOW": "/api/holographic/stream/live_low.mp4",
    "CAPTURE_MED": "/api/holographic/stream/live_med.mp4",
};

function setResponseHeaders(request, response){
    response.header("Access-Control-Allow-Origin", "*"); //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", request.header("Access-Control-Request-Method"));
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

server.post('/login', function (request, res, next) {
    let username = request.body.username;
    let password = request.body.password;
    let ipaddress = request.body.ipaddress;

    let requestConfig = {
        rejectUnauthorized: false,
        requestCert: true,
        agent: false,
        auth: {
            username: username,
            password: password
        }
    };

    let URL = "https://" + ipaddress + services.OS_INFO;

    axios.get(URL, requestConfig).then(function (response) {
        let session = request.session;

        my_session.save(session.sid, {
            "username": username,
            "password": password,
            "ipaddress": ipaddress
        }, function(){
            setupAfterLogin();
            //setupCaptureServices();
            let responseData = response.data;
            responseData.videostreamURL = {};
            Object.keys(captureServices).map(function(value){
                responseData.videostreamURL[value] = "https://"+username+":"+password+"@"+ipaddress+captureServices[value];
            });
            setResponseHeaders(request, res);
            res.send(responseData);
        });

    }).catch(function (error) {
        res.send(new errors.InternalServerError(error.message));
        return next();
    })
});

function validate(req, res, next){
    let session = req.session;
    if(session){
        let username = session.username;
        let password = session.password;
        let ipaddress = session.ipaddress;

        console.log(username, password, ipaddress);
        if(!username || !password || !ipaddress)
            return next(new errors.BadRequestError());
        return next()
    } else {
        return next(new errors.BadRequestError("Invalid session"));
    }
}

function setupAfterLogin() {

    Object.keys(services).map(function (currentValue) {
        let currentService = services[currentValue];
        server.get(currentService, function(req, res, next){
            validate(req, res, next)
        },  function (req, res, next) {

            let session = req.session;
            let username = session.username;
            let password = session.password;
            let ipaddress = session.ipaddress;

            const requestConfig = {
                rejectUnauthorized: false,
                requestCert: true,
                agent: false,
                auth: {
                    username: username,
                    password: password
                }
            };

            let serviceURL = "https://" + ipaddress + req.url;

            axios.get(serviceURL, requestConfig).then(function (response) {
                res.send({holo_response: response.data});
            }).catch(function (error) {
                res.send(new errors.InternalServerError(error.message));
                return next();
            });

        })
    });
}

server.get('/initialState',
    function(request, res, next){
        let dbRef = firebase.database().ref('/HololensIPs');
        dbRef.on("value", function(snapshot) {
            setResponseHeaders(request, res);
            res.send({"initialState": snapshot.val()});
        }, function (errorObject) {
            res.send(new errors.InternalServerError(errorObject.code));
            return next();
        });
    }
);

server.pre(serveStatic('build', {'index': ['index.html']}));

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import holoIcon from './images.png';

import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton,ActionButton,
    IButtonProps} from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { Dropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

import {
    Persona,
    PersonaSize,
    PersonaPresence
} from 'office-ui-fabric-react/lib/Persona';

import axios from 'axios';

const DEV_URL = "http://localhost:8080";
const PROD_URL = "";
const ENV = PROD_URL;
const LOGIN_URL = ENV+"/login";
const INITIAL_STATE_URL = ENV+"/initialState";

class App extends Component {

    constructor(props) {
        super(props);
        let services = {
            "OS_INFO": "/api/os/info",
            "BATTERY_INFO": "/api/power/battery",
            "POWER_STATE": "/api/power/state",
            "WIFI_MAN": "/api/wifi/interfaces",
            "PERF_DATA":"/api/resourcemanager/systemperf"
        };

        this.state = {
            'isLoggedIn': false,
            'hololensIP': '',
            'services': services,
            'showPersonaCallout': false
        }
    }

    componentDidMount(){
        axios.get(INITIAL_STATE_URL).then(function(response){
            let connectedLensDevices = Object.keys(response.data.initialState).map(function(firebaseKey){
                let currentMachine = response.data.initialState[firebaseKey];
                let displayText = currentMachine['machineName']+" on "+currentMachine['ipaddress'];
                return {
                    'key': currentMachine['ipaddress'],
                    'text': displayText
                }
            });
            this.setState({
                'connectedLensDevices': connectedLensDevices,
                'foundConnectedDevices': true
            });
        }.bind(this)).catch(function(error){
            this.setState({
                'connectedLensDevices': {},
                'foundConnectedDevices': false
            });
            console.error(error);
        }.bind(this))
    }

    changeState(item) {
        console.log('here is the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
        this.setState({ selectedIP: item.key });
    }

    _performLogin(){
        let ipAddress = this.state.selectedIP;
        let userName = this.refs.username.value;
        let password = this.refs.password.value;

        if(!ipAddress || !userName || !password){
            alert("Required fields are missing ");
        } else {

            axios.post(LOGIN_URL, {
                'username': userName,
                'password': password,
                'ipaddress': ipAddress
            }).then(function(response){
                this.setState({
                    'isLoggedIn': true,
                    'hololensStats': response.data
                })
            }.bind(this));
        }
    }

    renderLoginDialog(){
        return (
            <Dialog
                hidden={ false }
                onDismiss={ this._closeDialog }
                dialogContentProps={ {
                    type: DialogType.normal,
                    title: 'Login to HoloLens',
                    subText: 'You need to log in, before you can access HoloLens dashboard'
                } }>
                <Dropdown
                    placeHolder='Select a HoloLens'
                    label='Select a HoloLens'
                    id='hololensIP'
                    ariaLabel='Select a HoloLens'
                    onChanged={ this.changeState.bind(this) }
                    options={this.state.connectedLensDevices} />
                <TextField label='User name' ref="username" placeholder="Optional user name if configured" required={true}/>
                <TextField label="Password" type="password" placeholder="Optional password if configured" ref="password" required={true}/>
                <DialogFooter>
                    <PrimaryButton onClick={ this._performLogin.bind(this) } text='Login' />
                </DialogFooter>
            </Dialog>

        )
    }

    personaClicked(){
        this.setState({
            'showPersonaCallout': true
        })
    }

    _onCalloutDismiss(){
        this.setState({
            'showPersonaCallout': false
        })
    }
    renderApp(){
        let videoURL = this.state.hololensStats.videostreamURL['CAPTURE_HIGH'];
        let primaryText = this.state.hololensStats.username;
        let imageInitials = "DI";//primaryText.charAt(0).toUpperCase()+primaryText.charAt(secondaryText.length-1).toUpperCase();
        let secondaryText = this.state.hololensStats.ComputerName;
        let tertiaryText = this.state.hololensStats.Language;
        const examplePersona = {
            'imageUrl': holoIcon,
            'imageInitials': imageInitials,
            'primaryText': primaryText,
            'secondaryText': secondaryText,
            'tertiaryText': tertiaryText
        };
        return(
            <div className="App">
                <header className="App-header">
                    <div className="logo-title">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Mixed reality dashboard</h1>
                    </div>
                    <div className="loggedin-user" ref="_menuButtonElement">
                        <Persona
                            { ...examplePersona }
                            size={ PersonaSize.small }
                            presence={ PersonaPresence.online }
                            hidePersonaDetails={ false }
                            ref = "persona"
                            onClick = {this.personaClicked.bind(this)}
                        />
                        { this.state.showPersonaCallout && (
                            <Callout
                                className='ms-CalloutExample-callout'
                                ariaLabelledBy={ 'callout-label-1' }
                                ariaDescribedBy={ 'callout-description-1' }
                                role={ 'alertdialog' }
                                gapSpace={ 0 }
                                targetElement={ this.refs._menuButtonElement }
                                onDismiss={ this._onCalloutDismiss.bind(this) }
                                setInitialFocus={ true }>
                                <div className='ms-CalloutExample-inner'>
                                    <div className='ms-CalloutExample-actions'>
                                        <ActionButton data-automation-id='Restart' iconProps={ { iconName: 'Calendar' } }>
                                           Restart
                                        </ActionButton>
                                        <br/>
                                        <ActionButton data-automation-id='Shutdown' iconProps={ { iconName: 'AddFriend' } }>
                                            Shutdown
                                        </ActionButton>
                                    </div>
                                </div>
                            </Callout>
                        ) }
                    </div>
                </header>
                <div>
                    <Pivot>
                        <PivotItem linkText='Live preview'>
                            <div>
                                <video className="video-container video-container-overlay" autoPlay="true" muted={ false }>
                                    <source src={ videoURL } type="video/mp4" />
                                </video>
                            </div>
                        </PivotItem>
                        <PivotItem linkText='System Info'>
                            <p> Under construction</p>
                        </PivotItem>
                    </Pivot>
                </div>

            </div>
        )
    }

    render() {
        return (
            (!this.state.isLoggedIn? this.renderLoginDialog(): this.renderApp())
        );
    }
}

export default App;

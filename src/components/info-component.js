/**
 * Created by satyasumansaridae on 10/3/17.
 */
import React, {Component} from 'react';
import '../App.css';
import {
    DetailsList,
    DetailsListLayoutMode,
    Selection,
    IColumn
} from 'office-ui-fabric-react/lib/DetailsList';

import axios from 'axios';

class InfoComponent extends Component {

    constructor(props) {
        super(props);

        const installedComponents = {
            "InstalledPackages": [{
                "CanUninstall": true,
                "Name": "ListenUI",
                "PackageFamilyName": "CortanaListenUI",
                "PackageFullName": "CortanaListenUI_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "CortanaListenUI_cw5n1h2txyewy!CortanaListenUI",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Cortana",
                "PackageFamilyName": "Microsoft.Windows.Cortana",
                "PackageFullName": "Microsoft.Windows.Cortana_1.7.0.14393_neutral_neutral_cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "Microsoft.Windows.Cortana_cw5n1h2txyewy!CortanaUI",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 7, "Revision": 14393},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Learn Gestures",
                "PackageFamilyName": "GGVLearning",
                "PackageFullName": "GGVLearning_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "GGVLearning_cw5n1h2txyewy!GGVLearning",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Holograms",
                "PackageFamilyName": "Holograms",
                "PackageFullName": "Holograms_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "Holograms_cw5n1h2txyewy!Holograms",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "HoloPairingApp",
                "PackageFamilyName": "HoloPairingApp",
                "PackageFullName": "HoloPairingApp_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "HoloPairingApp_cw5n1h2txyewy!HoloPairingApp",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Photos",
                "PackageFamilyName": "HoloPhotos",
                "PackageFullName": "HoloPhotos_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "HoloPhotos_cw5n1h2txyewy!HoloPhotos",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "HoloShell",
                "PackageFamilyName": "HoloShell",
                "PackageFullName": "HoloShell_1.1.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "HoloShell_cw5n1h2txyewy!HoloShell",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 1, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "MigrationUI",
                "PackageFamilyName": "MigrationUIApp",
                "PackageFullName": "MigrationUIApp_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "MigrationUIApp_cw5n1h2txyewy!MigrationUIApp",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "OOBE App",
                "PackageFamilyName": "OOBEApp",
                "PackageFullName": "OOBEApp_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "OOBEApp_cw5n1h2txyewy!OOBEApp",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Sensor Tuning",
                "PackageFamilyName": "SensorTuning",
                "PackageFullName": "SensorTuning_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "SensorTuning_cw5n1h2txyewy!SensorTuning",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "SignIn App",
                "PackageFamilyName": "SignIn",
                "PackageFullName": "SignIn_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "SignIn_cw5n1h2txyewy!SignIn",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Calibration",
                "PackageFamilyName": "ViewCalibrationApp",
                "PackageFullName": "ViewCalibrationApp_1.0.0.1_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "ViewCalibrationApp_cw5n1h2txyewy!ViewCalibrationApp",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 1},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Sign In",
                "PackageFamilyName": "WebAuthBridgeInternetSso",
                "PackageFullName": "WebAuthBridgeInternetSso_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "WebAuthBridgeInternetSso_cw5n1h2txyewy!WebAuthBridgeInternetSso",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Sign In",
                "PackageFamilyName": "WebAuthBridgeInternet",
                "PackageFullName": "WebAuthBridgeInternet_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "WebAuthBridgeInternet_cw5n1h2txyewy!WebAuthBridgeInternet",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Sign In",
                "PackageFamilyName": "WebAuthBridgeIntranetSso",
                "PackageFullName": "WebAuthBridgeIntranetSso_1.0.0.0_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "WebAuthBridgeIntranetSso_cw5n1h2txyewy!WebAuthBridgeIntranetSso",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Sign In",
                "PackageFamilyName": "WebAuthBrokerInternetSso",
                "PackageFullName": "WebAuthBrokerInternetSso_1.0.0.2_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "WebAuthBrokerInternetSso_cw5n1h2txyewy!WebAuthBrokerInternetSso",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 2},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Sign In",
                "PackageFamilyName": "WebAuthBrokerInternet",
                "PackageFullName": "WebAuthBrokerInternet_1.0.0.2_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "WebAuthBrokerInternet_cw5n1h2txyewy!WebAuthBrokerInternet",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 2},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Sign In",
                "PackageFamilyName": "WebAuthBrokerIntranetSso",
                "PackageFullName": "WebAuthBrokerIntranetSso_1.0.0.2_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "WebAuthBrokerIntranetSso_cw5n1h2txyewy!WebAuthBrokerIntranetSso",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 0, "Major": 1, "Minor": 0, "Revision": 2},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }]
            }, {
                "CanUninstall": true,
                "Name": "INSIGHT HEART",
                "PackageFamilyName": "ANIMARESGmbH.INSIGHTHEART",
                "PackageFullName": "ANIMARESGmbH.INSIGHTHEART_2.0.0.0_x86__vk4fs56wcxnfm",
                "PackageOrigin": 3,
                "PackageRelativeId": "ANIMARESGmbH.INSIGHTHEART_vk4fs56wcxnfm!App",
                "Publisher": "CN=0B6184CD-DB03-4A5A-896B-452437379400",
                "Version": {"Build": 0, "Major": 2, "Minor": 0, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Share Assistant",
                "PackageFamilyName": "Microsoft.ShareAssistant",
                "PackageFullName": "Microsoft.ShareAssistant_1.1.12661.0_x86__8wekyb3d8bbwe",
                "PackageOrigin": 3,
                "PackageRelativeId": "Microsoft.ShareAssistant_8wekyb3d8bbwe!App",
                "Publisher": "CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 12661, "Major": 1, "Minor": 1, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Feedback Hub",
                "PackageFamilyName": "Microsoft.WindowsFeedbackHub",
                "PackageFullName": "Microsoft.WindowsFeedbackHub_1.1705.2121.0_x86__8wekyb3d8bbwe",
                "PackageOrigin": 3,
                "PackageRelativeId": "Microsoft.WindowsFeedbackHub_8wekyb3d8bbwe!App",
                "Publisher": "CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 2121, "Major": 1, "Minor": 1705, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Store Experience Host",
                "PackageFamilyName": "Microsoft.StorePurchaseApp",
                "PackageFullName": "Microsoft.StorePurchaseApp_11707.1707.25006.0_x86__8wekyb3d8bbwe",
                "PackageOrigin": 3,
                "PackageRelativeId": "Microsoft.StorePurchaseApp_8wekyb3d8bbwe!App",
                "Publisher": "CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 25006, "Major": 11707, "Minor": 1707, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Xbox Identity Provider",
                "PackageFamilyName": "Microsoft.XboxIdentityProvider",
                "PackageFullName": "Microsoft.XboxIdentityProvider_11.29.23003.0_x86__8wekyb3d8bbwe",
                "PackageOrigin": 3,
                "PackageRelativeId": "Microsoft.XboxIdentityProvider_8wekyb3d8bbwe!Microsoft.XboxIdentityProvider",
                "Publisher": "CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 23003, "Major": 11, "Minor": 29, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "MyLab",
                "PackageFamilyName": "6282LucasRizzotto.HoloChem",
                "PackageFullName": "6282LucasRizzotto.HoloChem_1.1.0.0_x86__gvgbwp4zpynyw",
                "PackageOrigin": 3,
                "PackageRelativeId": "6282LucasRizzotto.HoloChem_gvgbwp4zpynyw!App",
                "Publisher": "CN=29062ED8-987D-4057-9E90-3CB0493C032D",
                "Version": {"Build": 0, "Major": 1, "Minor": 1, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Apps@Work",
                "PackageFamilyName": "MobileIron.AppsAtWork",
                "PackageFullName": "MobileIron.AppsAtWork_9.5.0.3_x86__ekps40mpcpkay",
                "PackageOrigin": 5,
                "PackageRelativeId": "MobileIron.AppsAtWork_ekps40mpcpkay!App",
                "Publisher": "CN=Mobile Iron Inc, O=Mobile Iron Inc, L=Mountain View, S=California, C=US",
                "Version": {"Build": 0, "Major": 9, "Minor": 5, "Revision": 3},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Store",
                "PackageFamilyName": "Microsoft.WindowsStore",
                "PackageFullName": "Microsoft.WindowsStore_11708.1001.26.0_x86__8wekyb3d8bbwe",
                "PackageOrigin": 3,
                "PackageRelativeId": "Microsoft.WindowsStore_8wekyb3d8bbwe!App",
                "Publisher": "CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 26, "Major": 11708, "Minor": 1001, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Work or school account",
                "PackageFamilyName": "Microsoft.AAD.BrokerPlugin",
                "PackageFullName": "Microsoft.AAD.BrokerPlugin_1000.14393.1715.0_neutral_neutral_cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "Microsoft.AAD.BrokerPlugin_cw5n1h2txyewy!App",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 1715, "Major": 1000, "Minor": 14393, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Email and accounts",
                "PackageFamilyName": "Microsoft.AccountsControl",
                "PackageFullName": "Microsoft.AccountsControl_10.0.14393.1715_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "Microsoft.AccountsControl_cw5n1h2txyewy!App",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 14393, "Major": 10, "Minor": 0, "Revision": 1715},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Credential Dialog",
                "PackageFamilyName": "Microsoft.CredDialogHost",
                "PackageFullName": "Microsoft.CredDialogHost_10.0.14393.1715_neutral__cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "Microsoft.CredDialogHost_cw5n1h2txyewy!App",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 14393, "Major": 10, "Minor": 0, "Revision": 1715},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Microsoft Edge",
                "PackageFamilyName": "Microsoft.MicrosoftEdge",
                "PackageFullName": "Microsoft.MicrosoftEdge_38.14393.1715.0_neutral__8wekyb3d8bbwe",
                "PackageOrigin": 2,
                "PackageRelativeId": "Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge",
                "Publisher": "CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 1715, "Major": 38, "Minor": 14393, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Microsoft account",
                "PackageFamilyName": "Microsoft.Windows.CloudExperienceHost",
                "PackageFullName": "Microsoft.Windows.CloudExperienceHost_10.0.14393.1715_neutral_neutral_cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy!App",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 14393, "Major": 10, "Minor": 0, "Revision": 1715},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }, {
                "CanUninstall": true,
                "Name": "Settings",
                "PackageFamilyName": "SystemSettings",
                "PackageFullName": "SystemSettings_1000.14393.1715.0_neutral_neutral_cw5n1h2txyewy",
                "PackageOrigin": 2,
                "PackageRelativeId": "SystemSettings_cw5n1h2txyewy!SystemSettings",
                "Publisher": "CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US",
                "Version": {"Build": 1715, "Major": 1000, "Minor": 14393, "Revision": 0},
                "RegisteredUsers": [{
                    "UserDisplayName": "HoloLens-BL9A0\\DefaultAccount",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-503"
                }, {
                    "UserDisplayName": "HoloLens-BL9A0\\feero",
                    "UserSID": "S-1-5-21-2702878673-795188819-444038987-1000"
                }]
            }]
        };

        let installedComponentsObj = installedComponents.InstalledPackages.map(function(value){
            let publisherName = value.Publisher.split(",")[0].split("=")[1];

            let version = value.Version["Major"]+"."+value.Version["Minor"]+" ["+value.Version["Build"]+"]";

            let installedForUsers = value.RegisteredUsers.map(function(regUserVal){
                return regUserVal.UserDisplayName
            }).join(",");

            return {
                "PackageName": value.Name,
                "Publisher": publisherName,
                "Version": version,
                "InstalledForUsers": installedForUsers
            }
        });

        const _columns: IColumn[] = [
            {
                key: 'PackageName',
                name: 'Package Name',
                fieldName: 'PackageName',
                minWidth: 210,
                maxWidth: 315,
                isRowHeader: true,
                isResizable: true
            },
            {
                key: 'Publisher',
                name: 'Publisher',
                fieldName: 'Publisher',
                minWidth: 210,
                maxWidth: 350,
                isRowHeader: true,
                isResizable: true,
                isSorted: true,
            },
            {
                key: 'Version',
                name: 'Version',
                fieldName: 'Version',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isPadded: true
            },
            {
                key: 'InstalledForUsers',
                name: 'Installed For Users',
                fieldName: 'InstalledForUsers',
                minWidth: 100,
                maxWidth: 110,
                isResizable: true
            },
        ];

        this.state = {
            "InstalledComponents": installedComponentsObj,
            "columns": _columns
        }
    }

    render() {
        return (
            <div className="installed-components-container">
                <DetailsList
                    items={ this.state.InstalledComponents }
                    compact={ false }
                    columns={ this.state.columns }
                    setKey='set'
                    layoutMode={ DetailsListLayoutMode.justified }
                    isHeaderVisible={ true }
                />
            </div>
        );
    }
}

export default InfoComponent;

import { AppRegistry,
		StyleSheet,
  Text,
  View } from 'react-native';

import React, { Component } from 'react';

import Logoutscreen from './app/screens/login/logout.js';
import StudentLogin from './app/screens/login/student_login.js'
import IcLogin from './app/screens/login/ic_login.js'
import CompanyLogin from './app/screens/login/company_login.js'
import CompanyRegister from './app/screens/login/company_register.js'
import HomeLogin from './app/screens/login/home_login.js'
import StudentScreen from './app/screens/login/student_profile.js'

import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation'


const DrawApp = DrawerNavigator({
	Profile: { 
        screen: ({ navigation }) => <Profile    screenProps={{ rootNavigation: navigation }} /> 
        // screen: Profile,
      },
    Logout: {
        screen: ({ navigation }) => <Logoutscreen    screenProps={{ rootNavigation: navigation }} /> 
     }
});


const Profile = StackNavigator({
	StudentProfile: {
			screen : StudentScreen
		},
	},
	{
		headerMode: 'none'
	}
);

// const Logout = StackNavigator({
// 	Logout:{
// 		screen:Logoutscreen
// 	}

// 	},
// 	{
// 		headerMode: 'none'
// 	}
// );
// const LoginScreen = StackNavigator({
// 	MainLogin: {
// 		screen : HomeLogin
// 	},
// 	Student: {
//       screen: StudentLogin
//     },
//     Ic: {
//       screen: IcLogin
//     },
//     Company: {
//       screen: CompanyLogin
//     },
//     RegisterCompany:{
//     	screen: CompanyRegister
//     },
//     Hey : {
//     	screen: Profile
//     },
//   },
//   {
//     headerMode: 'none'
//   }
// );






const App = StackNavigator({
    // Login: {
    //   screen : LoginScreen
    // },
    MainLogin: {
		screen : HomeLogin
	},
	Student: {
      screen: StudentLogin
    },
    Ic: {
      screen: IcLogin
    },
    Company: {
      screen: CompanyLogin
    },
    RegisterCompany:{
    	screen: CompanyRegister
    },
    HomeApp: {
      screen : DrawApp
    },
  },
  { 
    headerMode: 'none' 
  }
);

AppRegistry.registerComponent('placement', () => App);

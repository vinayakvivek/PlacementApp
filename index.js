import { AppRegistry,
		StyleSheet,
  Text,
  View } from 'react-native';
import Logoutscreen from './App';
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
      },
    Logout: {
        screen: Logoutscreen

     }
});
const Profile = StackNavigator({
		StudentProfile: {
		screen : StudentScreen
		},
	},
	{
	}
);
const LoginScreen = StackNavigator({
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
    Hey : {
    	screen: Profile
    },
  },
  {
    headerMode: 'none'
  }
);



const App = StackNavigator({
    Login: {
      screen : LoginScreen
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

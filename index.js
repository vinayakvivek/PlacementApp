import { AppRegistry,
		StyleSheet,
  Text,
  View } from 'react-native';
// import App from './App';
import StudentLogin from './app/screens/login/student_login.js'
import IcLogin from './app/screens/login/ic_login.js'
import CompanyLogin from './app/screens/login/company_login.js'
import CompanyRegister from './app/screens/login/company_register.js'
import HomeLogin from './app/screens/login/home_login.js'


import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation'
const MainApp = DrawerNavigator({
	login: {
		screen: IcLogin
	}
});

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
    }
  },
  {
    headerMode: 'none'
  }
);
const App = StackNavigator({
    Login: {
      screen : LoginScreen
    },
    App: {
      screen : MainApp
    },
  },
  { 
    headerMode: 'none' 
  }
);

AppRegistry.registerComponent('placement', () => App);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  Image,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import URL from '../../constants.js';

import Toast from 'react-native-simple-toast';

import { NavigationActions } from 'react-navigation';
import NavigationBar from 'react-native-navbar';

const { width, height } = Dimensions.get("window");

const background = require("./back.jpg");
const mark = require("./icon.png");
const lockIcon = require("./lock.png");
const personIcon = require("./person.png");

export default class Logoutscreen extends Component<{}> {
  constructor(props) {

    super(props);
    
    this.openDrawer = this.openDrawer.bind(this);

  }
  openApp() {
    const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'MainLogin',})
          ]
        });
        this.props.screenProps.rootNavigation.dispatch(resetAction);
  }
   openDrawer() {
    const rootNavigation = this.props.screenProps.rootNavigation;
    rootNavigation.navigate('DrawerOpen'); 
  }

  getLogout(){
    const rootNavigation = this.props.screenProps.rootNavigation;
    var url = URL + "/logout";
    fetch(url, {
      method: "GET",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
    })
    .then( (response) => response.json())
    .then( (responseData) => {
      var status = responseData.status;
      Toast.show(status,Toast.SHORT);
      // Toast.show(name,Toast.LONG);
      // Toast.show(some,Toast.LONG);
      // const resetAction = NavigationActions.reset({
      //       index: 0,
      //       actions: [
      //         NavigationActions.navigate({ routeName: 'MainLogin', params: {}})
      //       ]
      //     });
      //     rootNavigation.dispatch(resetAction);
      //     Toast.show("somrtreg bvdfb",Toast.SHORT);
      if(status=="true"){
        this.openApp();
      }else {
        Toast.show("Not Valid 'this toast is by app' (^_^)",Toast.SHORT);
      }
    })
    .catch( (error) => {
      console.log(error);
      Toast.show("Error", Toast.SHORT);
    });

  }

  onLogoutPressed() {
		this.getLogout();
	}

  render() {
    return (
      <View style={styles.container}>
       <NavigationBar
                  tintColor='#3C3C3C'
                  title={{ title: 'Confirm ', tintColor: 'white' }}  
                  leftButton={
                    <Button
                      onPress = {this.openDrawer}
                      title="Menu"
                      color='#3C3C3C'
                      // color="#841584"
                    />
                  }                
              />
        <ScrollView>

      <Image source={background} style={styles.background} resizeMode="cover">
        
          <View style={styles.wrapper}>

        <Text style={styles.welcome}>
          Are you sure to log out?
        </Text>
        <TouchableOpacity onPress={this.onLogoutPressed.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
              </View>
        </TouchableOpacity>
        </View>
        </Image>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    width:width/2,
    height:width/2,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width, 
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#043077",
    paddingVertical: 20,
    borderRadius:20,
    width:width/2,
    marginLeft:width/4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});
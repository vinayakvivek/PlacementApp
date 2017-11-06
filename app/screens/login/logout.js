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
} from 'react-native';

import URL from '../../constants.js';

import Toast from 'react-native-simple-toast';

import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get("window");

const background = require("./back.jpg");
const mark = require("./icon.png");
const lockIcon = require("./lock.png");
const personIcon = require("./person.png");

export default class Logoutscreen extends Component<{}> {
  openApp() {
    const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'MainLogin'})
          ]
        });
        this.props.navigation.dispatch(resetAction);
  }

  getLogout(){

    var url = URL + "/logout";
    fetch(url, {
      method: "POST",
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
        <Text style={styles.welcome}>
          Are you sure to log out?
        </Text>
        <TouchableOpacity onPress={this.onLogoutPressed.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
              </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    borderRadius:20,
    width:width/2,
    marginLeft:width/4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  }
});

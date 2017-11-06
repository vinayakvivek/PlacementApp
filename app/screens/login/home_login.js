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


export default class IcLogin extends Component {
  
  onPressC(){
    this.props.navigation.navigate('Company');
  }
  onPressIc(){
    this.props.navigation.navigate('Ic');
  }
  onLoginS(){
    this.props.navigation.navigate('Student');
  }
  

  render() {

    return(

    <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            
            <TouchableOpacity onPress={this.onLoginS.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Student</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressIc.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Intern Coordinator</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressC.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Company</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              
            </View>
          </View>
        </Image>
      </View>

    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
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


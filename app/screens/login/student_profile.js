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

export default class StudentScreen extends Component<{}> {
  constructor(props) {

    super(props);
    this.state = {
      name: "",
      rollno:"",
      cpi:0,
      deptname:"",
      
    };

  }
  componentDidMount(){
    this.pageload();
  }
  pageload(){
    var url = URL + "/student";
    fetch(url, {
      method: "GET",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
        
      // })
    })
    .then( (response) => response.json())
    .then( (responseData) => {
      var status = responseData.status;
      Toast.show(status,Toast.SHORT);
      // var name = responseData.data.name;
      // Toast.show(name,Toast.LONG);
      // var rollno = this.state.data.rollno;
      // Toast.show(rollno,Toast.LONG);
      if(status=="true"){
        this.setstate({
          name: responseData.data.name,
          rollno: responseData.data.rollno,
          cpi:responseData.data.cpi,
          deptname:responseData.data.dept_name,
        })
      }else {
        Toast.show("Not Valid 'this toast is by app' (^_^)",Toast.SHORT);
      }
    })
    .catch( (error) => {
      console.log(error);
      Toast.show("Error", Toast.SHORT);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to profile sdfbsdfkh nsd
          ssflsadkfn defaultsfc kfs;defaultsfc


          sdmc sdnv stylesCsdC
          zdvnkds Viewsdfksd View
          sdvf dfvn,
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

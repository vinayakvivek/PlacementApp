import React, { Component } from 'react';
import { 
	AppRegistry,
  StyleSheet,
  WebView,
  View,
  Dimensions,
Button,
  ScrollView,
  } from 'react-native';
import Toast from 'react-native-simple-toast';

import { NavigationActions } from 'react-navigation';

import NavigationBar from 'react-native-navbar';
const { width, height } = Dimensions.get("window");

const background = require("./back.jpg");
const mark = require("./icon.png");
const lockIcon = require("./lock.png");
const personIcon = require("./person.png");

export default class WebScreen extends Component {

	openDrawer() {
    const rootNavigation = this.props.screenProps.rootNavigation;
    rootNavigation.navigate('DrawerOpen'); 
  }
  render() {
  	// var news = this.props.navigation.state.params.news;
    return (
     


                
      <WebView
        source={{uri: "http://placements.iitb.ac.in/internship/"}}
        // style={{marginTop: 20}}
      />
      
      
    );
  }
}


 // <NavigationBar
 //                  tintColor='#3C3C3C'
 //                  title={{ title: 'Welcome ', tintColor: 'white' }}  
 //                  leftButton={
 //                    <Button
 //                      onPress = {this.openDrawer}
 //                      title="Menu"
 //                      color='#3C3C3C'
 //                      // color="#841584"
 //                    />
 //                  }                
 //              />

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
  ToastAndroid,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  
} from 'react-native';

import { Button } from 'react-native-elements'

import URL from '../../constants.js';

import Toast from 'react-native-simple-toast';

import { NavigationActions } from 'react-navigation';

import NavigationBar from 'react-native-navbar';
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
      status:true,
    };
    this.openDrawer = this.openDrawer.bind(this);

  }
  componentDidMount(){
    this.pageload();
    // Toast.show("com completed");
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
      // Toast.show(status,Toast.SHORT);
      
      // var rollno = this.state.data.rollno;
      // Toast.show(rollno,Toast.LONG);
      // if(status=="true"){
        this.setState({
          name: responseData.data.name,
          rollno: responseData.data.rollno,
          cpi:responseData.data.cpi,
          deptname:responseData.data.dept_name,
          status:false,
        });
        var name = this.state.name;
      // Toast.show(name,Toast.SHORT);
      //   Toast.show("updated");
      // }else {
      //   Toast.show("Not Valid 'this toast is by app' (^_^)",Toast.SHORT);
      // }
    })
    .catch( (error) => {
      console.log(error);
      Toast.show("Error", Toast.SHORT);
    }).done();
  }
  renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading Store...
          </Text>
        </View>
      );
    }
  onJaf(){
    // Toast.show("Show Jaf");
    this.props.navigation.navigate('JafPage');
  }
 
  openDrawer() {
    const rootNavigation = this.props.screenProps.rootNavigation;
    rootNavigation.navigate('DrawerOpen'); 
  }
  renderMainView(){
    return (
      
       <View style={styles.container}>


         <NavigationBar
              tintColor='#3C3C3C'
              title={{ title: 'Profile', tintColor: 'white' }}  
              leftButton={
                <Button
                  onPress = {this.openDrawer}
                  title='MENU'
                  color='#3C3C3C'
                  // color="#841584"
                />
              }                
          />
        <ScrollView>
      
        <Text style={styles.welcome}>
          Welcome {this.state.name}  
        </Text>        
        
        <View style={styles.container2}>

        <Text style={styles.name}>
          Name   : {this.state.name}
        </Text>
        <Text style={styles.name}>
          Roll No : {this.state.rollno}
        </Text>
        <Text style={styles.name}>
          Cpi        : {this.state.cpi}
        </Text>
        <Text style={styles.name}>
          Dept     : {this.state.deptname}
        </Text>

      </View>

      <View style={styles.button_out}>
          <Button
            raised
            loadingright
            buttonStyle={styles.button}
            onPress={this.onJaf.bind(this)}
            title='SHOW JAFS' />
      </View>
      </ScrollView>
        
      </View> 
    );

  }
  render() {

    if(this.state.status){
      return this.renderLoadingView();
    }
    return this.renderMainView();
  }


}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
 
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
const styles = StyleSheet.create({
  container2: {
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 20,
    paddingLeft: 15,
    backgroundColor: '#fff',
    margin:10
  },

  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  name: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 15
  },
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3"
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
  button_out: {
    marginTop: 20
  },
  button: {
    backgroundColor: "#00ced1",
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
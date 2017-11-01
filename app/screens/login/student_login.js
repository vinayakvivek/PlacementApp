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


export default class StudentLogin extends Component {
  constructor(props) {

    super(props);
    this.state = {
      username: "",
      password: "",
      token: null,
    };

  }

  componentDidMount(){
    this.retrieveToken();
  }

  openApp(token) {
    // const resetAction = NavigationActions.reset({
    //       index: 0,
    //       actions: [
    //         NavigationActions.navigate({ routeName: 'App', params: {token:token}})
    //       ]
    //     });
        this.props.navigation.dispatch(resetAction);
  }
  checkToken(token){
    var url = URL + "/user/check-token/";
    fetch(url, {
      method: "GET",
      headers: {
        'Authorization' : 'Token ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
    })
    .then( (response) => response.json())
    .then( (responseData) => {
      var valid = responseData.valid;
      if (valid) {
        this.saveToken(token);
        this.openApp(token);
      }
      else{
        Toast.show("Not Valid",Toast.SHORT);
      }
    })
    .catch( (error) => {
      console.log(error);
      Toast.show("Error", Toast.SHORT);
    });
  }

  getToken(){

    var url = URL + "/api-token-auth/";
    fetch(url, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then( (response) => response.json())
    .then( (responseData) => {
      var token = responseData.token;
      Toast.show(token,Toast.SHORT);
      this.checkToken(token);
    })
    .catch( (error) => {
      console.log(error);
      Toast.show("Error", Toast.SHORT);
    });

  }


  retrieveToken(){
    try {
      store.get('token')
      .then( (token) => {
        this.checkToken(token);
      });
    }
    catch (error) {
      Toast.show("Failed Token Retrieve",Toast.SHORT);
    }
  }

  saveToken(token){
    try {
      store.save('token',token);
      Toast.show("Token Success Save",Toast.SHORT);
    }
    catch (error) {
      console.log(error);
      Toast.show("Failed Token Save",Toast.SHORT);
    }
  }
  onPressSignUp(){
    this.props.navigation.navigate('RegisterStudent');
  }
  onLoginPressed() {
    this.getToken();
  }

  render() {

    return(

    <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                onChangeText={ (text)=> this.setState({username: text}) }
                placeholder="Roll Number" 
                placeholderTextColor="#FFF"
                style={styles.input} 
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                onChangeText={ (text)=> this.setState({password: text}) }
                placeholderTextColor="#FFF"
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry 
              />
            </View>
           
            <TouchableOpacity onPress={this.onLoginPressed.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            
          </View>
        </Image>
      </View>

    );

  }

}

// const styles = StyleSheet.create({
//   background: {
//     width, 
//     height,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
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
    backgroundColor: "#FF3366",
    paddingVertical: 20,
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


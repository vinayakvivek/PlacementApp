import React,{ Component } from 'react';


import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	ToastAndroid,
	ScrollView,
	Image,
	TouchableHighlight,
	Dimensions,
	TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("./back.jpg");
const mark = require("./icon.png");
const lockIcon = require("./lock.png");
const personIcon = require("./person.png"); 
const emailIcon = require("./email.png");

import URL from '../../constants.js';

import Toast from 'react-native-simple-toast';

import { NavigationActions } from 'react-navigation';

// import store from 'react-native-simple-store';

export default class CompanyRegister extends Component {

	constructor(props) {

		super(props);
		this.state = {
			
			password: "",
			email:"",
			companyname: "",
		};
		this.openLogin =this.openLogin.bind(this);

	}
	openLogin(){
		this.props.navigation.dispatch(NavigationActions.back());
	}
	onSignUp() {
    var url = URL + '/company/register';
    Toast.show(this.state.username);
    fetch(url, {
      method: "POST",
      headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			},
      body: JSON.stringify({
        
        password: this.state.password,
        email:  this.state.email,
        name: this.state.companyname,
        
      })
    })
    .then( (response) => response.json())
    .then( (responseData) => {
        var status = responseData.status;
        Toast.show(status,Toast.SHORT);
        var name = responseData.data;
        // Toast.show(name,Toast.LONG);
        var username = this.state.username;
        // Toast.show(some,Toast.LONG);
        if(status){
          // this.openApp(username);
          Toast.show("Company Registered");
          this.openLogin();
        }else {
          Toast.show("Not Valid 'this toast is by app' (^_^)",Toast.SHORT);
        }
    })
    .catch( (error) => {
      console.log(error);
      Toast.show("Error", Toast.SHORT);
    });
 
  }

  // <View style={styles.inputContainer}>
  //             <View style={styles.iconContainer}>
  //               <Image 
  //                 source={personIcon}
  //                 style={styles.inputIcon}
  //                 resizeMode="contain"
  //               />
  //             </View>
  //             <TextInput
  //               style={[styles.input, styles.whiteFont]}
  //               onChangeText={ (text)=> this.setState({username: text}) }
  //               placeholder="UserName"
  //               placeholderTextColor="#FFF"
  //               underlineColorAndroid='transparent' 
  //             />
  //           </View>
	render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
         

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                onChangeText={ (text)=> this.setState({companyname: text}) }
                placeholder="CompanyName"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent' 
              />
            </View>
            
            

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={emailIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                onChangeText={ (text)=> this.setState({email: text}) }
                placeholder="Email"
                placeholderTextColor="#FFF" 
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={lockIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.whiteFont]}
                onChangeText={ (text)=> this.setState({password: text}) }
                placeholder="Password"
                placeholderTextColor="#FFF" 
              />
            </View>
            
             <TouchableOpacity onPress={this.onSignUp.bind(this)}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Register</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.footerContainer}>

            
          </View>
        </Image>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  background: {
  	width, 
  	height,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 6,
    // marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    // marginTop: 25,
    // marginLeft: 25,
  },
  titleViewText: {
    fontSize: 30,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  signup: {
    backgroundColor: '#043077',
    paddingVertical: 25,
    borderRadius:20,
    width:width/2,
    marginLeft:width/4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop:60,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})

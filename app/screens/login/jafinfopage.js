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
  ScrollView,
  ListView,
  TouchableOpacity,
  
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

export default class JafInfoScreen extends Component<{}> {
  constructor(props) {

    super(props);
    
    this.openDrawer = this.openDrawer.bind(this);

  }
  componentDidMount(){
    // this.pageload();
    // Toast.show("com completed");
  }
  // pageload(){
  //   var url = URL + "/student/jafs";
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //     },
  //     // body: JSON.stringify({
        
  //     // })
  //   })
  //   .then( (response) => response.json())
  //   .then( (responseData) => {
  //     // var status = responseData.status;
  //     // Toast.show(status,Toast.SHORT);
      
  //     // var rollno = this.state.data.rollno;
  //     // Toast.show(rollno,Toast.LONG);
  //     // if(status=="true"){
        
  //       // var name = this.state.name;
  //     // Toast.show(name,Toast.SHORT);
  //       // Toast.show("updated");
  //     // }else {
  //     //   Toast.show("Not Valid 'this toast is by app' (^_^)",Toast.SHORT);
  //     // }
  //   })
  //   .catch( (error) => {
  //     console.log(error);
  //     Toast.show("Error", Toast.SHORT);
  //   }).done();
  // }
  renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading Store...
          </Text>
        </View>
      );
    }
  onJafSignIn(jaf){
    Toast.show("Sign in ");
    // Toast.show(jaf.company_id);
    // Toast.show(jaf.jaf_no);
    // Toast.show(jaf.jaf_name);

    // var url = URL + "/student/sign_jaf";
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     company_id: jaf.company_id,
    //     jaf_no:jaf.jaf_no ,
    //   })
    // })
    // .then( (response) => response.json())
    // .then( (responseData) => {
    //     var status = responseData.status;
    //     // Toast.show(status);
    //       if(status=="true"){
    //         Toast.show("Signed In Successfully");
    //          this.props.navigation.navigate('StudentProfile');

    //       }
    //       else{
    //         Toast.show(responseData.data);
    //       }
    // })
    // .catch( (error) => {
    //   console.log(error);
    //   Toast.show("Error", Toast.SHORT);
    // }).done();

  }
  onJafSignOut(jaf){
    Toast.show("Sign out ");

  }
 
  openDrawer() {
    const rootNavigation = this.props.screenProps.rootNavigation;
    rootNavigation.navigate('DrawerOpen'); 
  }
  rowPressed(jaf){
    // Toast.show(jaf.description,Toast.SHORT);
  }
  renderUnsign(jaf){
    // Toast.show(jaf.company_name);
    return (
      <TouchableOpacity onPress={this.onJafSignOut(jaf)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> UnSign </Text>
              </View>
            </TouchableOpacity>
      );
  }
  renderSignUp(jaf){
    return (
      
       <TouchableOpacity onPress={this.onJafSignIn(jaf)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> Sign Up </Text>
              </View>
            </TouchableOpacity>
    );

  }
  renderView(jaf){
     if(jaf.signedup){
      // return this.renderUnsign(jaf);
      return (
      <TouchableOpacity >
              <View onPress={this.onJafSignOut(jaf)} style={styles.button}>
                <Text style={styles.buttonText}> UnSign </Text>
              </View>
            </TouchableOpacity>
      );

    }
    // return this.renderSignUp(jaf);
    return (
      
       <TouchableOpacity >
              <View onPress={this.onJafSignIn(jaf)} style={styles.button}>
                <Text style={styles.buttonText}> Sign Up </Text>
              </View>
            </TouchableOpacity>
    );
  }
  render() {
    var jaf = this.props.navigation.state.params.jaf
    return(
       <View style={styles.container}>


         <NavigationBar
                  tintColor='#3C3C3C'
                  title={{ title: 'Jafs : '+jaf.jaf_name , tintColor: 'white' }}  
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
        <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
          
        <Text style={styles.welcome}>
          Company : {jaf.company_name}  
        </Text>
        <Text style={styles.welcome}>
          Company ID : {jaf.company_id}  
        </Text>
        <Text style={styles.welcome}>
          Jaf Name : {jaf.jaf_name}  
        </Text>
        <Text style={styles.welcome}>
          Jaf No : {jaf.jaf_no}
        </Text>
        <Text style={styles.welcome}>
          Description : {jaf.description}
        </Text>
        <Text style={styles.welcome}>
          Cpi Cutoff : {jaf.cpi_cutoff}
        </Text>
        <Text style={styles.welcome}>
          Stipend : {jaf.stipend}
        </Text>
        {this.renderView(jaf)}
        
      </View>
        </Image>
        </ScrollView>
        </View>
      );
  }


}

// {!jaf.signedup && this.renderSignUp(jaf)}
//         {jaf.signedup && this.renderUnsign(jaf)}

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
  },
  content:{
      flex:1,
  },
  orderImage:{
      height: 200,
      alignSelf:'stretch',
    },
    submit: {
      margin: 10 ,
        alignSelf:'center',
        padding: 10,
        width: 250 
    },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  statusContainer: {
    height: 120,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 70, 
    height: 70, 
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  totalStyle: {
    color: 'white',
    
    fontSize: 18,
    marginRight: 10,
  },
});
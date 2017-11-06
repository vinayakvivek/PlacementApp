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

export default class JafScreen extends Component<{}> {
  constructor(props) {

    super(props);
    this.state = {
      company_name: "",
      cpi_cutoff:0,
      description:"",
      jaf_name:"",
      jaf_no:0,
      signedup:"",
      stipend:0,
    };
    this.openDrawer = this.openDrawer.bind(this);

  }
  componentDidMount(){
    this.pageload();
    Toast.show("com completed");
  }
  pageload(){
    var url = URL + "/student/jafs";
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
      
      // var rollno = this.state.data.rollno;
      // Toast.show(rollno,Toast.LONG);
      // if(status=="true"){
        this.setState({
          company_name: responseData.data.company_name,
          cpi_cutoff: responseData.data.cpi_cutoff,
          description:responseData.data.description,
          jaf_name:responseData.data.jaf_name,
          jaf_no:responseData.data.jaf_no,
          signedup:responseData.data.signedup,
          stipend:responseData.data.stipend,
        });
        var name = this.state.name;
      Toast.show(name,Toast.SHORT);
        Toast.show("updated");
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
    Toast.show("Signed Jaf");
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
                  title={{ title: 'Welcome ' +this.state.name, tintColor: 'white' }}  
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
          Company name : {this.state.company_name}  
        </Text>
        <Text style={styles.welcome}>
          CPI cutoff: {this.state.cpi_cutoff}
        </Text>
        <Text style={styles.welcome}>
          Job Description : {this.state.description}
        </Text>
        <Text style={styles.welcome}>
          JAF name : {this.state.jaf_name}
        </Text>
        <Text style={styles.welcome}>
          JAF no : {this.state.jaf_no}
        </Text>
        <Text style={styles.welcome}>
          Signed : {this.state.signedup}
        </Text>
        <Text style={styles.welcome}>
          Stipend : {this.state.stipend}
        </Text>

        <TouchableOpacity onPress={this.onJaf.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Jaf</Text>
              </View>
            </TouchableOpacity>
      </View>
        </Image>
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
  }
});
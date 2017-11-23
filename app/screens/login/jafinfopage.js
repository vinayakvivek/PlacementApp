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
    this.state = {
            company_name: "",
            cpi_cutoff: 0,
            description: "",
            jaf_name: "",
            jaf_no: 1,
            signedup: false,
            stipend: 0,
            company_id:"",
            update_status:false,
    };
    this.openDrawer = this.openDrawer.bind(this);
    // this.onJafSignOut = this.onJafSignOut.bind(this);
    // this.onJafSignIn = this.onJafSignIn.bind(this);


  }
  componentDidMount(){
    this.pageload();
    // Toast.show("com completed");
  }
  pageload(){
    var my= this.props.navigation.state.params.jaf ;
    Toast.show(my.jaf_name);
    var url = URL + "/student/jaf";
    fetch(url, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jaf_no:my.jaf_no,
        company_id:my.company_id,
      })
    })
    .then( (response) => response.json())
    .then( (responseData) => {
      var status = responseData.status;
      Toast.show(status,Toast.SHORT);

      this.setState({
            company_name: responseData.data.company_name,
            company_id:responseData.data.company_id,
            cpi_cutoff: responseData.data.cpi_cutoff,
            description: responseData.data.description,
            jaf_name: responseData.data.jaf_name,
            jaf_no: responseData.data.jaf_no,
            signedup: responseData.data.signedup,
            stipend: responseData.data.stipend,
            update_status:true,
      });
      // var rollno = this.state.data.rollno;
      // Toast.show(rollno,Toast.LONG);
      // if(status=="true"){
        
        // var name = this.state.name;
      // Toast.show(name,Toast.SHORT);
        // Toast.show("updated");
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

  onJafSignIn(){
    Toast.show("Sign in ");
    // Toast.show(jaf.company_id);
    // Toast.show(jaf.jaf_no);
    // Toast.show(jaf.jaf_name);

    var url = URL + "/student/sign_jaf";
    fetch(url, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_id: this.state.company_id,
        jaf_no:this.state.jaf_no ,
      })
    })
    .then( (response) => response.json())
    .then( (responseData) => {
        var status = responseData.status;
        // Toast.show(status);
          if(status=="true"){
            Toast.show("Signed In Successfully");
             // this.props.navigation.navigate('JafPage');
             this.props.navigation.dispatch(NavigationActions.back());

          }
          else{
            Toast.show(responseData.data);
          }
    })
    .catch( (error) => {
      console.log(error);
      Toast.show("Error", Toast.SHORT);
    }).done();

  }
  onJafSignOut(){
    // Toast.show("Sign out ");
    var url = URL + "/student/signout_jaf";
    fetch(url, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company_id: this.state.company_id,
        jaf_no:this.state.jaf_no ,
      })
    })
    .then( (response) => response.json())
    .then( (responseData) => {
        var status = responseData.status;
        // Toast.show(status);
          if(status=="true"){
            Toast.show("Signed Out Successfully");
             // this.props.navigation.navigate('JafPage');
             this.props.navigation.dispatch(NavigationActions.back());

          }
          else{
            Toast.show(responseData.data);
          }
    })
    .catch( (error) => {
      console.log(error);
      Toast.show("Error", Toast.SHORT);
    }).done();

  }
 
  openDrawer() {
    const rootNavigation = this.props.screenProps.rootNavigation;
    rootNavigation.navigate('DrawerOpen'); 
  }
  rowPressed(){
    // Toast.show(jaf.description,Toast.SHORT);
  }
  // renderUnsign(jaf){
  //   // Toast.show(jaf.company_name);
  //   return (
  //     <TouchableOpacity onPress={this.onJafSignOut(jaf)}>
  //             <View style={styles.button}>
  //               <Text style={styles.buttonText}> UnSign </Text>
  //             </View>
  //           </TouchableOpacity>
  //     );
  // }
  // renderSignUp(jaf){
  //   return (
      
  //      <TouchableOpacity onPress={this.onJafSignIn(jaf)}>
  //             <View style={styles.button}>
  //               <Text style={styles.buttonText}> Sign Up </Text>
  //             </View>
  //           </TouchableOpacity>
  //   );

  // }
  renderView(){
     if(this.state.signedup){
      // return this.renderUnsign(jaf);
      return (
      <TouchableOpacity onPress={() => this.onJafSignOut(this)}>
              <View  style={styles.button}>
                <Text style={styles.buttonText}> UnSign </Text>
              </View>
            </TouchableOpacity>
      );

    }
    // return this.renderSignUp(jaf);
    return (
      
       <TouchableOpacity onPress={() => this.onJafSignIn(this)}>
              <View  style={styles.button}>
                <Text style={styles.buttonText}> Sign Up </Text>
              </View>
            </TouchableOpacity>
    );
  }

  render() {

    if(this.state.update_status){
      return this.renderMainView();
    }
    return this.renderLoadingView();

  }
  renderMainView() {
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
          Company : {this.state.company_name}  
        </Text>
        <Text style={styles.welcome}>
          Company ID : {this.state.company_id}  
        </Text>
        <Text style={styles.welcome}>
          Jaf Name : {this.state.jaf_name}  
        </Text>
        
       
        {this.renderView()}
        
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
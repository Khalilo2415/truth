import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState, Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";


export default class Register extends Component {
  render() {

    const {navigate} = this.props.navigation
    return (
      <View style={style.container}>
        <Image
          source={require("../assets/Truth.png")}
          style={style.containerImage}
        ></Image>
        <Text style={style.containerTitleLink}>Register</Text>
        <View style={style.containerForm2} >
          <Text style={style.containerTitle}>Join the community!</Text>
          <View style={style.input}>
            <Ionicons
              name={"mail"}
              size={24}
              color={"#302B63"}
              backgroundColor={"#e9e9e9"}
            />
            <TextInput style={style.TextInput}></TextInput>
          </View>
          <View style={style.input}>
            <Ionicons
              name={"key"}
              size={24}
              color={"#302B63"}
              backgroundColor={"#e9e9e9"}
            />
            <TextInput style={style.TextInput}></TextInput>
          </View>
          <View style={style.input}>
            <Ionicons
              name={"checkmark-done-circle"}
              size={24}
              color={"#302B63"}
              backgroundColor={"#e9e9e9"}
            />
            <TextInput style={style.TextInput}></TextInput>
          </View>
          <View style={style.input2}>
            <TextInput style={style.buttonTitle2} >
                Submit
            </TextInput>
          </View>
          </View>
            <View style={style.banniere}>
              <Text style={style.containerTitleLink2} onPress={()=> navigate('Login')}>Login</Text>
            </View>
          </View>
        

    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    fontSize: 18,
    fontFamily: "PoppinsBold",
    paddingTop: 20,
    color:"#302B63",
    alignSelf:'center',
    
  },
  containerTitle1: {
    fontSize: 26,
    fontWeight: "bolder",
    fontFamily: "PoppinsBold",
    paddingTop: 60,
    color: "#302B63",
  },
  containerTitleLink: {
    fontSize: 26,
    fontWeight: "bolder",
    fontFamily: "PoppinsBold",
    color: "#DF9448",
    
    
  },
  containerTitleLink2: {
    fontSize: 26,
    fontWeight: "bolder",
    fontFamily: "PoppinsBold",
    color: "#302B63",
    position:"absolute",
    bottom:30,
    
  },
  containerImage: {
    position:"absolute",
    top:50,
    width: "45%",
    height: "15%",
    
  },
  containerForm: {
    width: "100%",
    alignItems: "center",
    height: "15%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerForm2: {

    width: "100%",
    alignItems: "center",
    height: "65%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  input: {
    flexDirection: "row",
    alignItems: "center",
    width: 220,
    borderWidth: 2,
    backgroundColor: "white",
    marginHorizontal: 55,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,
  },
  input2: {

    flexDirection: "row",
    alignItems: "center",
    width: 220,
    borderWidth: 2,
    justifyContent: 'center',
    marginHorizontal: 55,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,
    backgroundColor: "#302B63",
    fontSize: 14,
    fontWeight: "bolder",
    fontFamily: "PoppinsBold",
    color: "white",
  },
  

  TextInput: {
    
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
    alignItems: "center",
  },
  TextInput2: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
  },

  NavContainer: {
    bottom: 28,
  },

  buttonTitle2:{

    fontSize: 14,
    fontFamily: "PoppinsBold",
    color:"#ffffff",
    alignItems:'center',
    justifyContent:'center',

  }
});

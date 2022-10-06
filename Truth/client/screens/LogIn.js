import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState, Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <Image
          source={require("../assets/Truth.png")}
          style={style.containerImage}
        ></Image>
        <Text
          style={style.containerTitleLink}
          onPress={() => navigate("Register")}
        >
          Register
        </Text>

        <View style={style.containerForm}>
          <Text style={style.containerTitle1}>Login</Text>
          <Text style={style.containerTitle}>Welcome Back !</Text>
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
            <TextInput style={style.TextInput2}></TextInput>
          </View>

          <View style={style.input2}>
            <TextInput style={style.containerTitle2}>Submit</TextInput>
          </View>
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
    color: "white",
  },
  containerTitle1: {
    fontSize: 26,
    fontWeight: "bolder",
    fontFamily: "PoppinsBold",
    paddingTop: 30,
    color: "#302B63",
  },
  containerTitle2: {
    fontSize: 14,
    fontWeight: "bolder",
    fontFamily: "PoppinsSemiBold",
    color: "white",
  },
  containerTitleLink: {
    fontSize: 26,
    fontWeight: "bolder",
    fontFamily: "PoppinsBold",
    color: "#DF9448",
  },
  containerImage: {
    width: "45%",
    height: "18%",
    marginTop: 30,
  },
  containerForm: {
    width: "90%",
    backgroundColor: "#DF9448",
    alignItems: "center",
    height: "75%",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    transition: 'easeInOut',
    transition: '1s',
    boxShadow: '5px 20px 50px #000'
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
    justifyContent: "center",
    marginHorizontal: 55,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,
    backgroundColor: "#302B63",
    fontSize: 14,
    fontWeight: "bolder",
    fontFamily: "PoppinsBold",
    color: "#fff",
  },

  TextInput: {
    paddingHorizontal: 10,
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
});

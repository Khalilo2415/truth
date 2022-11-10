import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/Tab";
const App = () => {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      
      
      
    )

  }
export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

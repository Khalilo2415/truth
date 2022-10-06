import { Button, Text, View, StyleSheet } from "react-native";
import React from "react";
import Header from "../shared/Header";
import ConnectionNav from "../shared/ConnectionNav";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Profil({ navigation }) {
  let [fontLoaded] = useFonts({
    PoppinsBold: require("./../assets/fonts/PoppinsBold.ttf"),
    PoppinsSemiBold: require("./../assets/fonts/PoppinsSemiBold.ttf"),
    PoppinsRegular: require("./../assets/fonts/PoppinsRegular.ttf"),
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <ConnectionNav />;
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    background: "#302b63",
    alignItems: "center",
    justifyContent: "center",
  },
  NavContainer: {
    alignItems: "center",
    bottom: 28,
  },
});

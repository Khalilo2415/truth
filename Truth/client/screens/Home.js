import { Button,Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Header from "../shared/Header";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import Card from '../shared/Card';

export default function Home ({navigation})  {
  
  let [fontLoaded] = useFonts({
    'PoppinsBold': require('./../assets/fonts/PoppinsBold.ttf')
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }

    return (
      <View style = {{
        height:40,
        color:"#302b63"}}>
        
       
     </View>
    )
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
  
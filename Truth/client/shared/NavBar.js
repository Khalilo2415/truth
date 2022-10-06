import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import Likes from "../screens/Likes";
import Trends from "../screens/Trending";
import Profil from "../screens/Profil";
import "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const tab = createBottomTabNavigator();

export default class NavBar extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <tab.Navigator
          tabBarStyle={styles.navContainer}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name == "Home") {
                iconName = "home";
              } else if (route.name == "Likes") {
                iconName = "heart";
              } else if (route.name == "Trends") {
                iconName = "flame";
              } else if (route.name == "Profil") {
                iconName = "person";
              }
              return (
                <Ionicons
                  name={iconName}
                  size={25}
                  color={focused ? "#ffffff" : "#df9448"}
                  backgroundColor={focused ? "#ffffff" : "transparent"}
                />
              );
            },
            tabBarStyle: {
              height: 60,
              alignItems:'center',
              
              backgroundColor: "#302b63",
            },
            headerStyle: {
              backgroundColor: "#302b63",
              height: 65,
              
            },
          })}
        >
          <tab.Screen
            name="Home"
            component={Home}
            options={{
              title: "Truth",
              tabBarShowLabel: false,
              headerTitleStyle: {
                color: "#ffffff",
                fontSize: 28,
                fontWeight: "800",
                alignItems:'center',
                justifyContent:'center',
              },
            }}
          ></tab.Screen>
          <tab.Screen
            name="Likes"
            component={Likes}
            options={{
              tabBarShowLabel: false,
              headerTitleStyle: {
                color: "#ffffff",
                fontSize: 28,
                fontWeight: "800",
                alignItems:'center',
                justifyContent:'center',
              },
            }}
          ></tab.Screen>
          <tab.Screen
            name="Trends"
            component={Trends}
            options={{
              tabBarShowLabel: false,
              headerTitleStyle: {
                color: "#ffffff",
                fontSize: 28,
                fontWeight: "800",
                alignItems:'center',
                justifyContent:'center',
              },
            }}
          ></tab.Screen>
          <tab.Screen
            name="Profil"
            component={Profil}
            options={{
              tabBarShowLabel: false,
              headerTitleStyle: {
                color: "#ffffff",
                fontSize: 28,
                fontWeight: "800",
                alignItems:'center',
                justifyContent:'center',
              },
            }}
          ></tab.Screen>
        </tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins-Bold.ttf",
  },
  navContainer: {
    alignItems: "center",
    bottom: 28,
  },
});

import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import TrendScreen from "../screens/Trends";
import PostScreen from "../screens/Post";
import ChatScreen from "../screens/Chat";
import ProfilScreen from "../screens/Profil";

const CenterButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: "#000000",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          headerTitle: "Inplosion",
          headerStyle: {
            backgroundColor: "#EBB618",
          },
          fontWeight: "10%",
          headerTintColor: "#E02436",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#EBB618",
            borderRadius: 15,
            height: 70,
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icon/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: focused ? "#E02436" : "#ffffff",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#E02436" : "#ffffff",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Trends"
          component={TrendScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icon/fire.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: focused ? "#E02436" : "#ffffff",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#E02436" : "#ffffff",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Trends
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/icon/plus.png")}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 45,
                  tintColor: focused ? "#E02436" : "#ffffff",
                }}
              />
            ),
            tabBarButton: (props) => <CenterButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icon/chat.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: focused ? "#E02436" : "#ffffff",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#E02436" : "#ffffff",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Chat
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfilScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icon/user.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: focused ? "#E02436" : "#ffffff",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#E02436" : "#ffffff",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Profil
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7d7d7d",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;

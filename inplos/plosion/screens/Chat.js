import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        background:'#008037'
    },
}) ;
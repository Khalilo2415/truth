import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FormButton( props  )  {
    return (
      <TouchableOpacity onPress={()=> props.click()}>
        <View style={style.button}> 
            <Text style={style.buttonText}>{props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  
}
const style = StyleSheet.create({
    
    button: {
      
      borderRadius:8,
      paddingVertical:14,
      paddingHorizontal:10,
      backgroundColor:'#302B63'
      
    },

    buttonText: {

        color:'white',
        fontFamily:'PoppinsSemiBold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'

    }



});



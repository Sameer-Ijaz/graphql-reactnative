import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function Chatting({route}) {

  useEffect(()=>{
    console.log('Chatting id =', route.params.id)
  })

  return (
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        
        <Text style={{color:'black', fontSize:30}}> This is Chatting Here</Text>
        
        <Image style={{width:100, height:100}}
        
        source={require('./assets/icon.png')}/>
      </View>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

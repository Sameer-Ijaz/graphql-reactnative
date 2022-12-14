import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import useFetch from './useFetch'

export default function HomeForFunctional() {
  const [flag, setFlag] = useState(0)  
  // console.log('I am in Function')
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [data, setData] = useState(null);

  // useEffect(()=>{
  //   console.log('I am in useEffect')
  // })

  useEffect(()=>{
    console.log('I am in useEffect with Flag')
    setFlag(flag+1)

    const list = [
      {qty:10, size:'XXL'},
      {qty:2, size:'XL'},
      {qty:8, size:'M'}
    ]
    const l = list.sort((a,b)=>(a.qty>b.qty) ? 1 : -1 )
    console.log('after sorting',l)


  },[])

  // useEffect(()=>{
  //   const list = [
  //     {qty:10, size:'XXL'},
  //     {qty:2, size:'XL'},
  //     {qty:8, size:'M'}
  //   ]
  //   list.sort((a,b)=>(a.qty>b.qty)? 1:-1 )
  //   console.log('after sorting',list)
  //   fetch("https://fakestoreapi.com/products")
  //   .then(res=>res.json())
  //   .then(data=>{
  //     data[0].bookmark=1
  //     for(var x=0;x<data.length;x++){
  //       data[x].bookmark=0
  //     }

  //     // data[10].bookmark=1

  //     setData(data)

  //     console.log('data[3]',data[3])
  //   }
  //   )
  // },[])

  return (
    <View style={{flex:1, backgroundColor:'white', alignItems:'center'}}>
      {/* {console.log('My name is Return')} */}
      <FlatList
        data={data}
        extraData={flag}
        renderItem={({item})=>(
          <View>
            {
              item.bookmark?(
                <TouchableOpacity style={{marginBottom:10}}
                onPress={()=>{
                  console.log('pressed')
                  item.bookmark=0
                  data[data.indexOf(item)]=item
                  console.log(data[data.indexOf(item)])
                  setData(data)
                  setFlag(flag+1)
                }}
                >
                <Text style={{backgroundColor:'green'}}>
                {item.title}
              </Text>
                </TouchableOpacity>
               
              ):(
                <TouchableOpacity style={{marginBottom:10}}
                onPress={()=>{
                  console.log('pressed')
                  item.bookmark=1
                  data[data.indexOf(item)]=item
                  console.log(data[data.indexOf(item)])
                  setData(data)
                  setFlag(flag+1)
                }}
                >
                <Text style={{backgroundColor:'red'}}>
                {item.title}
              </Text>
                </TouchableOpacity>
              )
            }
           
          </View>
  )}
      />
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

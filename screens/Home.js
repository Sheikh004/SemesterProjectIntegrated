import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

export default function Home({navigation}) {
    const handleLogout = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
      };
  useEffect(()=>{
    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }
  })
    return (
      <View style={{flex:1, backgroundColor:'black'}}>
        {console.log('Return')}
  
        <Button
            title="Voice Chat"
            onPress={() =>
            navigation.navigate('VChat')
          }
          />
  
      
        
      
          <Button
            title="Chat"
            onPress={() =>
            navigation.navigate('Chat')
          }
          />
       <Button
            title="list"
            onPress={() =>
            navigation.navigate('List2')
          }
          />
          <View style={styles.container}>
      <Button title='Sign Out' onPress={handleLogout} />
    </View>
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
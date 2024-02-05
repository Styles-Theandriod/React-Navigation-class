import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'

const SplashScreen = (data) => {
  return (
    <View>
      <TouchableOpacity onPress={navigator.navigate('HomeScreen')}>
        <Text>{data}</Text>
      </TouchableOpacity>
      <TextInput style={styles.Input}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  Input:{
    border:5,
    borderColor:'red',
    borderRadius:10,
    backgroundColor:'green'
  }
})
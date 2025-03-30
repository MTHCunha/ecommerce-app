import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={{ height: 90, marginTop: 10 }}>
      <TextInput />
      <TouchableOpacity>
        <FontAwesome name="search" iconStyle="solid" />;
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {



  },


})

export default Header
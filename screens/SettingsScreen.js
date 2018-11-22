import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'

export default class SettingsScreen extends React.Component {
constructor(){
  super()

  this.state = {
    counter: 0
  }
}


  render() {
    return <View style={styles.container}>
      <Text>Hello Setting</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  }
});
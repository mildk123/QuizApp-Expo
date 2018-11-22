import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Button, Text, } from 'native-base';

// Fetching Data from Server
import Axios from 'axios'

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      Questions: []
    }
  }

  stateQuiz = () => {
    Axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
      .then(response => {
        this.setState({
          Questions: response.data.results
        }, () => this.props.navigation.navigate('Questions', { Questions: this.state.Questions }))
      })
      .catch(error => console.log(error)
      )

  }



  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          }}>
          <Button block success 
          onPress={() => {
            this.stateQuiz()
          }}>
            <Text> Start Quiz </Text>
          </Button>

        </View>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  }
});

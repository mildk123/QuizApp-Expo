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
    const endpoint = "https://opentdb.com/api.php?"
    const params = {
      amount: "5",
      category: "15",
      difficulty: 'easy',
      type: 'multiple',
      // v: 20181024
    }

    Axios.get(endpoint + new URLSearchParams(params))
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
          <Button bordered success onPress={() => {
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

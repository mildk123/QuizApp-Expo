import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

// Fetching Data from Server
import Axios from 'axios'



export default class HomeScreen extends React.Component {
  constructor() {
    super() 
    this.state = {
      Questions : []
    }
  }
  static navigationOptions = {
    // title: 'Home',
    header: null
  };


  stateQuiz = () => {
    const endpoint = "https://opentdb.com/api.php?"
    const params = {
      amount: "10",
      category: "15",
      difficulty: 'easy',
      type: 'multiple',
      // v: 20181024
    }

    Axios.get(endpoint + new URLSearchParams(params))
      .then(response => {
        this.setState({
          Questions: response.data.results
        },() => this.props.navigation.navigate('Questions', {Questions : this.state.Questions}) )

      })
      .catch(error => console.log(error)
      )

  }



  render() {
    return (
      <View style={styles.container}>

        <ScrollView>
          <Text>Home</Text>
        </ScrollView>
        <Button
          onPress={() => {
            this.stateQuiz()
          }}
          title='Start Quiz'
        />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

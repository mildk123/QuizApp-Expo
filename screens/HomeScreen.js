import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Content, Button, Text, Form, Picker } from 'native-base';

import { Toast } from "native-base";


// Fetching Data from Server
import Axios from 'axios'

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      Questions: [],
      Category: '9',
      noOfQuestions: '10',
      Difficulty: 'easy',
      showToast: false

    }
  }

  stateQuiz = () => {
    const { Category, noOfQuestions, Difficulty } = this.state;
    Axios.get(`https://opentdb.com/api.php?amount=${noOfQuestions}&category=${Category}&difficulty=${Difficulty}&type=multiple`)
      .then(response => {
        if (response.data.results.length !== 0) {
          this.setState({
            Questions: response.data.results
          }, () => this.props.navigation.navigate('Questions', { Questions: this.state.Questions }))

        } else {
          this.setState({
            showToast: true
          })
        }

      })
      .catch(error => console.log(error)
      )

  }

  _onValueChange = (pickerName, data) => {
    this.setState({
      [pickerName]: data
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Content
          style={{ padding: 20 }}>
          <Form>
            <Text>Select Category</Text>

            <Picker
              mode="dropdown"
              selectedValue={this.state.Category}
              onValueChange={(label) => this._onValueChange('Category', label)}

            >
              <Picker.Item label="General Knowledge" value="9" />
              <Picker.Item label="Books" value="10" />
              <Picker.Item label="Film" value="11" />
              <Picker.Item label="Music" value="12" />
              <Picker.Item label="Musicals / Theatres" value="13" />
              <Picker.Item label="Television" value="14" />
              <Picker.Item label="Video Games" value="15" />
              <Picker.Item label="Board Games" value="16" />
              <Picker.Item label="Science & Nature" value="17" />
              <Picker.Item label="Computers" value="18" />
              <Picker.Item label="Mathematics" value="19" />
              <Picker.Item label="Mythology" value="20" />
              <Picker.Item label="Sports" value="21" />
              <Picker.Item label="Geography" value="22" />
              <Picker.Item label="History" value="23" />
              <Picker.Item label="Politics" value="24" />
              <Picker.Item label="Art" value="25" />
              <Picker.Item label="Celebrities" value="26" />
              <Picker.Item label="Animals" value="27" />
              <Picker.Item label="Vehicles" value="28" />
              <Picker.Item label="Science: Comics" value="29" />

            </Picker>
          </Form>

          <Form>
            <Text>Number of Questions </Text>
            <Picker
              mode='dropdown'
              selectedValue={this.state.noOfQuestions}
              onValueChange={(label) => this._onValueChange('noOfQuestions', label)}
            >
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="17" value="17" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" />
              <Picker.Item label="20" value="20" />
            </Picker>
          </Form>

          <Form>
            <Text>Select Difficulty</Text>
            <Picker
              mode="dropdown"
              selectedValue={this.state.Difficulty}
              onValueChange={(label) => this._onValueChange('Difficulty', label)}
            >
              <Picker.Item label="Easy" value="easy" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Hard" value="hard" />
            </Picker>
          </Form>


        </Content>

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

        {this.state.showToast && <Button full danger
          onPress={() => {
            console.log('No Data Found')
          }}>
          <Text> No data found this category </Text>
        </Button>}

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

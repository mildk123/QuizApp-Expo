import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {Content, Button, Icon, Text, Form, Picker } from 'native-base';


// Fetching Data from Server
import Axios from 'axios'

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      Questions: [],
      selectedCat : 'key6'
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

  _onValueChange = (data) => {
    console.log(data)
  }



  render() {
    return (



      <View style={styles.container}>

         <Content
         style={{padding: 20}}>
          <Form>
            <Text>Select Category</Text>
            <Picker
              mode="dropdown"
              selectedValue={this.state.selectedCat}
              onValueChange={(value) => this._onValueChange(value)}
            >
              <Picker.Item label="General Knowledge" value="key0" />
              <Picker.Item label="Books" value="key1" />
              <Picker.Item label="Film" value="key2" />
              <Picker.Item label="Music" value="key3" />
              <Picker.Item label="Musicals / Theatres" value="key4" />
              <Picker.Item label="Television" value="key5" />
              <Picker.Item label="Video Games" value="key6" />
              <Picker.Item label="Board Games" value="key7" />
              <Picker.Item label="Science & Nature" value="key8" />
              <Picker.Item label="Computers" value="key9" />
              <Picker.Item label="Mathematics" value="key10" />
              <Picker.Item label="Mythology" value="key11" />
              <Picker.Item label="Sports" value="key12" />
              <Picker.Item label="Geography" value="key13" />
              <Picker.Item label="History" value="key14" />
              <Picker.Item label="Politics" value="key15" />
              <Picker.Item label="Art" value="key16" />
              <Picker.Item label="Celebrities" value="key17" />
              <Picker.Item label="Animals" value="key18" />
              <Picker.Item label="Vehicles" value="key19" />
              <Picker.Item label="Science: Gadgets" value="key20" />
            </Picker>
          </Form>

          <Form>
            <Text>Select Difficulty</Text>
            <Picker
              mode="dropdown"
              onValueChange={(value) => this._onValueChange(value)}
            >
              <Picker.Item label="Easy" value="key0" />
              <Picker.Item label="Medium" value="key1" />
              <Picker.Item label="Hard" value="key2" />
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

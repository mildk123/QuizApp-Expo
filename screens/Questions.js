import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quizQuestion : this.props.navigation.state.params.Questions
         };
    }
    render() {
        return (
            <View>
                <Text>{this.props.navigation.state.params.Category}</Text>
                <View style={styles.container}>
                    {this.state.quizQuestion.map(question => {
                        {console.log(question.question)}
                        <Text>{question.question}</Text>
                    })}
                </View>
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

export default Questions;
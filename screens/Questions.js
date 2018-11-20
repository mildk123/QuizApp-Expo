import React, { Component } from 'react';
import { Text, View } from 'react-native'

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
                <View>
                    {this.state.quizQuestion.map(question => {
                        {console.log(question.question)}
                        <Text>{question.question}</Text>
                    })}
                </View>
            </View>
        );
    }
}

export default Questions;
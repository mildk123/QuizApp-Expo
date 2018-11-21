import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'



class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizQuestion: this.props.navigation.state.params.Questions
        };
    }
    render() {
        let myArray = [
            "Apples",
            "Bananas",
            "Pears"
        ];
        return (
            <View style={styles.container}>
                <Text>Question</Text>
                {this.state.quizQuestion.map((item, index) => {
                    return <View key={index}>
                    <Text>{item.category}</Text>
                    {console.log(item)}
                        <Text>{item.question}</Text>
                    </View>
                })}
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
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
                <Text>Quesasdtions</Text>

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
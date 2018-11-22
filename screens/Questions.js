import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native'
import { TouchableOpacity, Button } from 'react-native'



class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizQuestion: props.navigation.state.params.Questions,
            questionCounter: 0,
            totalPoint: 0,
            quizCompleted: false
        };
    }

    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#00b0ff',
        animationEnabled: true,
        headerStyle: {
            borderBottomColor: '#00b0ff'
        }
    }

    _checkAnswer = (answerClicked, questionNo) => {
        let currentQuestion = questionNo + 1
        if (answerClicked === 'correct') {
            if (currentQuestion <= 4) {
                this.setState({
                    totalPoint: ++this.state.totalPoint,
                    questionCounter: ++this.state.questionCounter
                })

            } else {
                this.setState({
                    questionCounter: ++this.state.questionCounter,
                    quizCompleted: true
                }, () => { this.props.navigation.navigate('Score', { TotalPoints: this.state.totalPoint }) }
                )
            }
        } else {
            if (currentQuestion <= 4) {
                this.setState({
                    questionCounter: ++this.state.questionCounter
                })

            } else {
                this.setState({
                    questionCounter: ++this.state.questionCounter,
                    quizCompleted: true
                }, () => { this.props.navigation.navigate('Score', { TotalPoints: this.state.totalPoint }) }
                )
            }
        }

    }

    render() {

        const { quizQuestion, questionCounter, totalPoint } = this.state;
        return (
            this.state.quizCompleted !== true && <View style={styles.container}>
                <Text>Total Questions : 10</Text>
                <Text>Question No : {questionCounter + 1}</Text>
                <Text>Category : {quizQuestion[0].category}</Text>

                <View style={styles.quizDiv}>
                    <Text>Q. {quizQuestion[questionCounter].question}</Text>

                    <View style={styles.buttons}>

                        <TouchableOpacity
                            onPress={() => { this._checkAnswer(1, questionCounter) }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>{quizQuestion[questionCounter].incorrect_answers[1]}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { this._checkAnswer(0, questionCounter) }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>{quizQuestion[questionCounter].incorrect_answers[0]}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { this._checkAnswer('correct', questionCounter) }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>{quizQuestion[questionCounter].correct_answer}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { this._checkAnswer(2, questionCounter) }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>{quizQuestion[questionCounter].incorrect_answers[2]}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <Button onPress={() => console.log(totalPoint)} title={`Total Points : ${totalPoint}`} />
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        height: '100%',
    },
    quizDiv: {
        borderRadius: 35,
        margin: 5,
        padding: 20,
        backgroundColor: 'lightblue',
        flex: 1,
    },
    buttons: {
        flexDirection: 'column',
        marginTop: 25,
    },
    buttonText: {
        padding: 5,
        borderRadius: 25,
        marginTop: 15,
        width: '95%',
        margin: 7,


        backgroundColor: '#ff4d4d',
        color: 'white',
        padding: 10,
        alignSelf: 'baseline',
    }
});

export default Questions;
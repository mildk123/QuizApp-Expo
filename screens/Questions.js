import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native'

import { Header, Title, Container, Button, Text } from 'native-base'
import { Content, Card, CardItem, Body } from 'native-base'


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

    _checkAnswer = (answerClicked, questionNo) => {
        let currentQuestion = questionNo + 1
        if (answerClicked === 'correct') {
            if (currentQuestion < 5) {
                this.setState({
                    totalPoint: ++this.state.totalPoint,
                    questionCounter: ++this.state.questionCounter
                })

            } else {
                this.setState({
                    questionCounter: ++this.state.questionCounter,
                    totalPoint: ++this.state.totalPoint,
                    quizCompleted: true
                }, () => { this.props.navigation.navigate('Score', { TotalPoints: this.state.totalPoint }) }
                )
            }
        } else {
            if (currentQuestion < 5) {
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

                <Container>

                    <Header style={{ marginTop: 24 }}>
                        <Body>
                            <Title>Quiz</Title>
                        </Body>
                    </Header>


                    <View style={styles.info}>
                        <Text>Total Questions : 10</Text>
                        <Text>Question No : {questionCounter + 1}</Text>
                        <Text>Category : {quizQuestion[0].category}</Text>
                    </View>


                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                   
                                        <View style={styles.quizDiv}>

                                            <Text>Q. {quizQuestion[questionCounter].question}</Text>

                                            <View style={styles.Buttons}>

                                                <Button
                                                    style={styles.btn}
                                                    success
                                                    onPress={() => { this._checkAnswer(1, questionCounter) }}>
                                                    <Text>{quizQuestion[questionCounter].incorrect_answers[1]}</Text>
                                                </Button>

                                                <Button
                                                    style={styles.btn}
                                                    success
                                                    onPress={() => { this._checkAnswer(0, questionCounter) }}>
                                                    <Text>{quizQuestion[questionCounter].incorrect_answers[0]}</Text>
                                                </Button>

                                                <Button
                                                    style={styles.btn}
                                                    success
                                                    onPress={() => { this._checkAnswer('correct', questionCounter) }}>
                                                    <Text>{quizQuestion[questionCounter].correct_answer}</Text>
                                                </Button>

                                                <Button
                                                    style={styles.btn}
                                                    success
                                                    onPress={() => { this._checkAnswer(2, questionCounter) }}>
                                                    <Text>{quizQuestion[questionCounter].incorrect_answers[2]}</Text>
                                                </Button>

                                            </View>

                                            <Button
                                                transparent dark
                                                onPress={() => console.log(totalPoint)} >
                                                <Text>{`Correct Answers : ${totalPoint}`}</Text>
                                            </Button>

                                        </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>


                </Container>

            </View>

        );
    }

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '80%',
    },
    info: {
        padding: 15
    },
    quizDiv: {
        borderRadius: 35,
        margin: 5,
        padding: 20,
        backgroundColor: 'lightblue',
        flex: 1,
    },
    Buttons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 25,
    },
    btn: {
        alignSelf: 'flex-start',
        marginTop: 10,
        margin: 5,
        width: '90%'
    }
});

export default Questions;
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
            totalQuestions: this.props.navigation.state.params.Questions.length,
            totalPoint: 0,
            quizCompleted: false,
            timeSpend: 0
        };
    }

    // Checking qtiyapa
    _checkAnswer = (answerClicked, questionNo) => {
        let currentQuestion = questionNo + 1

        let check = this.state.totalQuestions

        if (answerClicked === 'correct') {
            if (currentQuestion < check) {
                this.setState({
                    totalPoint: ++this.state.totalPoint,
                    questionCounter: ++this.state.questionCounter
                })

            } else {
                this.setState({
                    questionCounter: ++this.state.questionCounter,
                    totalPoint: ++this.state.totalPoint,
                    quizCompleted: true
                }, () => {
                    this.props.navigation.navigate('Score', {
                        TotalPoints: this.state.totalPoint,
                        totalQuestions: this.state.totalQuestions,
                        category : this.state.quizQuestion[0].category,
                        timeTaken: this.state.timeSpend
                    })
                }
                )
            }

        } else {

            if (currentQuestion < check) {
                this.setState({
                    questionCounter: ++this.state.questionCounter
                })

            } else {
                this.setState({
                    questionCounter: ++this.state.questionCounter,
                    quizCompleted: true
                }, () => {
                    this.props.navigation.navigate('Score', {
                        TotalPoints: this.state.totalPoint,
                        totalQuestions: this.state.totalQuestions,
                        category : this.state.quizQuestion[0].category,
                        timeTaken: this.state.timeSpend
                    })
                }
                )
            }
        }

    }

    // Timer Bullshit
    componentDidMount() {
        let timer = setInterval(() => {
            this.startTimer()
        }, 1000)

        this.setState({ timer: timer })

    }

    startTimer = () => {
        this.setState({
            timeSpend: ++this.state.timeSpend
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

 

    render() {
        const { quizQuestion, questionCounter, totalPoint, timeSpend, totalQuestions } = this.state;

        return (
            this.state.quizCompleted !== true && <View style={styles.container}>

                <Container>

                    <Header style={styles.header}>
                        <Body>
                            <Title>Quiz</Title>
                        </Body>
                    </Header>


                    <View style={styles.info}>
                        <Text>Total Questions : {totalQuestions}</Text>
                        <Text>Question No : {questionCounter + 1}</Text>
                        <Text>Category : {quizQuestion[0].category}</Text>
                        <Text>Time taken : {timeSpend} sec</Text>
                    </View>


                    <Content>

                        <Card>
                            <CardItem style={styles.quizDiv}>
                                <Body>
                                    <Text
                                        style={styles.question}
                                    >Q. {quizQuestion[questionCounter].question}</Text>

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
                                </Body>
                            </CardItem>
                        </Card>

                        <Button
                            transparent block dark
                            onPress={() => console.log(totalPoint)} >
                            <Text>{`Correct Answers : ${totalPoint}`}</Text>
                        </Button>
                    </Content>


                </Container>

            </View>

        );
    }

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '90%',
        maxHeight: '90%'
    },
    header: {
        marginTop: 24,
        backgroundColor: '#4caf50',
    },
    info: {
        padding: 15
    },
    question: {
        color: '#666666',
        fontSize: 20
    },
    quizDiv: {
        borderRadius: 20,
        margin: 5,
        padding: 20,
        backgroundColor: '#eeeeee',
        width: '100%',
        maxWidth: 520,
        flex: 1,
    },
    btn: {
        alignSelf: 'flex-start',
        marginTop: 20,
        margin: 5,
        width: '95%'
    }
});

export default Questions;
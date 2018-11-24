import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Card, CardItem, Body, Text, Button } from 'native-base';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myPoints: 0,
      myScoreArray: [],
      timeTaken: null
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.navigation.state.params) {
      const { TotalPoints, totalQuestions, timeTaken, category } = nextProps.navigation.state.params;
      return {
        myScoreArray: [{
          myPoints: TotalPoints,
          totalQuestions: totalQuestions,
          category: category,
          timeTaken: timeTaken
        }]
      }
    } else {
      return null
    }
  }


  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>

        {this.state.myScoreArray.length !== 0 && this.state.myScoreArray.map((item, index) => {
          return <Card key={index}>
            <CardItem>
              <Body style={styles.div}>
                <Text style={styles.text}>Score: {item.myPoints} out of {item.totalQuestions}</Text>
                <Text style={styles.text}>Category: {item.category}</Text>
                <Text style={styles.text}>Time Taken : {item.timeTaken} seconds</Text>



                <Button
                  success
                  style={styles.btn}
                  onPress={() => { console.log(this.props.navigation.navigate('Home')) }}
                >
                  <Text>Play Again</Text>
                </Button>


              </Body>
            </CardItem>
          </Card>

        })
        }

       

        {this.state.myScoreArray.length === 0 &&
          <Card>
            <CardItem>
              <Body>
                <Text>No Quiz taken</Text>
              </Body>
            </CardItem>
          </Card>}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    margin: 5
  },
  div: {
    height: 150
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
});

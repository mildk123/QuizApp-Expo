import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Card, CardItem, Body, Text, Button } from 'native-base';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myPoints: 0,
      timeTaken: null
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.navigation.state.params) {
      return {
        myPoints: nextProps.navigation.state.params.TotalPoints,
        timeTaken: nextProps.navigation.state.params.timeTaken
      }
    } else {
      return null
    }
  }

  render() {
    const { myPoints } = this.state;
    return (
      <View style={styles.container}>

        {myPoints > 0 &&
          <Card>
            <CardItem>
              <Body>
                <Text>Score: {this.state.myPoints} out of 5</Text>
                <Text>Time Taken : {this.state.timeTaken} seconds</Text>


                <Button 
                bordered success
                onPress={() => {console.log(this.props.navigation.navigate('Home'))}}
                ><Text>Play Again</Text></Button>

              </Body>
            </CardItem>
          </Card>
        }

        {myPoints === 0 &&
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
});

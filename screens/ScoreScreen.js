import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      myPoints : 0
    }
  }
  static navigationOptions = {
    header: null,
  };

  static getDerivedStateFromProps(nextProps) {
    if(nextProps.navigation.state.params){
      return {
        myPoints : nextProps.navigation.state.params.TotalPoints
      }
    }else{
      return {
        myPoints : 0
      }
    }
  }

  render() {
    const { myPoints } = this.state;
    return (
      <ScrollView style={styles.container}>
        
        {myPoints > 0 && <Text>Score: {this.state.myPoints} out of 5</Text> }
        {myPoints === 0 && <Text>No Quiz taken</Text>}
      </ScrollView>
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

import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

// Fetching Data from Server
import Axios from 'axios'



export default class HomeScreen extends React.Component {
  constructor() {
    super() 
    this.state = {
      Questions : []
    }
  }
  static navigationOptions = {
    // title: 'Home',
    header: null
  };


  stateQuiz = () => {
    const endpoint = "https://opentdb.com/api.php?"
    const params = {
      amount: "10",
      category: "15",
      difficulty: 'easy',
      type: 'multiple',
      // v: 20181024
    }

    Axios.get(endpoint + new URLSearchParams(params))
      .then(response => {
        console.log(response.data.results)
        this.setState({
          Questions: response.data.results
        },() => this.props.navigation.navigate('Questions', {Questions : this.state.Questions}) )

      })
      .catch(error => console.log(error)
      )

  }



  render() {
    return (
      <View style={styles.container}>

        <ScrollView>
          <Text>Home</Text>
        </ScrollView>
        <Button
          onPress={() => {
            this.stateQuiz()
          }}
          title='Start Quiz'
        />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

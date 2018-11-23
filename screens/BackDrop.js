import React, { Component } from 'react';
import { View, } from 'react-native'
import { Button, Text } from 'native-base'
import Cam from '../components/Cam';

class BackDrop extends Component {
    constructor() {
        super()
        this.state = {
            homeBtn: false
        }

    }

    static navigationOptions = {
        title: 'Backdrop',
    };

    renderBtn = boolear => {
        this.setState({
            homeBtn: boolear
        })
    }


    render() {
        return (
            <View>
                <View style={{
                    padding: 8,
                    height: '72%',
                    marginTop: 70
                }}>
                    <Cam renderBtn={this.renderBtn} />
                </View>

                <View style={{ flex : 1, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>

                    {this.state.homeBtn &&
                        <Button block info 
                            onPress={() => { this.props.navigation.navigate('Main') }}
                        >
                        <Text>Next</Text>
                        </Button>
                    }

                </View>

            </View>
        );
    }
}

export default BackDrop;
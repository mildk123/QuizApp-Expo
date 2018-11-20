import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import Cam from '../components/Cam';

class BackDrop extends Component {
    constructor() {
        super()
        this.state = {
            homeBtn: true
        }

    }

    static navigationOptions = {
        title: 'Backdrop',
    }; 

    renderBtn = boolean => {
        this.setState({
            homeBtn: boolean
        })
    }


    render() {
        return (
            <View>
                <View style={{
                    padding: 8,
                    height: '76%',
                    marginTop: 62
                }}>
                    <Cam renderBtn={this.renderBtn}/>
                </View>

                <View style={{bottom: 0,}}>

                    {this.state.homeBtn &&
                        <Button
                            title="Go To Homescreen"
                            onPress={() => { this.props.navigation.navigate('Main') }}
                        />}

                </View>

            </View>
        );
    }
}

export default BackDrop;
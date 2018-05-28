import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import PropsType from 'prop-types'

class Hello extends Component {

    static PropsType  = {
        name: PropsType.string
    }

    render() {
        return (
            <Text style={{ color: 'white'}}>
                Hello {this.props.name}
            </Text>
        )
    }
}

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: true,
            text: ''
        }
    }

    _onPressLogin() {
        alert('login')
    }

    render() {
        return ( 
            <View style = { styles.container }>
                <TouchableOpacity onPress = { () => this._onPressLogin() }>
                    <View style = { styles.loginButton }>
                        <Hello name='Nghia Nguyen' />
                        <Text style={styles.loginText}>Hello {this.state.text}</Text>
                        <Text style = { styles.loginText }> Log in </Text> 
                    </View> 
                </TouchableOpacity>
                <TextInput
                    style={ styles.textInput }
                    onChangeText={(text) => this.setState({text}) }
                    value={this.state.text}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButton: {
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: 'white'
    },
    textInput: {
        height: 40,
        width: 200,
        marginTop: 20,
        borderColor: 'gray',
        borderWidth: 1
    }
})
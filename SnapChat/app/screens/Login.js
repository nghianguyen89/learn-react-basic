import React, { Component } from 'react'
import { Routes } from '../config/constants'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native'
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

    static PropsType  = {
        navigation: PropsType.object,
    }

    _onPressLogin() {
        this.props.navigation.navigate(Routes.HOME)
    }

    render() {
        return (
            <View style = { styles.container }>
                <Image source={require('../assets/images/logo.png')} style ={ styles.loginImage } />
                <View>
                    <Text>Tên đăng nhập</Text> 
                    <TextInput />
                </View>
                <View>
                    <Text>Mật Khẩu</Text> 
                    <TextInput />
                </View>
                <TouchableOpacity onPress = { () => this._onPressLogin() }>
                    <View style = { styles.container }>
                        <Text style = { styles.loginText }> Đăng Nhập </Text> 
                    </View> 
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
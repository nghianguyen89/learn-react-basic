import React, { Component } from 'react'
import { Routes } from '../config/constants'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native'
import PropsType from 'prop-types'

export default class Home extends Component {

    _onPressLogin() {
        this.props.navigation.goBack()
    }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress = { () => this._onPressLogin() }>
                <View>
                    <Text> BACK </Text> 
                </View> 
            </TouchableOpacity>
          <Text>Home screen</Text>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })
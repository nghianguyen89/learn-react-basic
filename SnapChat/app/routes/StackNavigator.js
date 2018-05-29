import { StackNavigator } from 'react-navigation'

import { Routes } from '../config/constants'
import Login from '../screens/Login'
import Home from '../screens/Home'

const Stack = {
    [Routes.HOME]: { screen: Home },
    [Routes.LOGIN]: { screen: Login },
}

export default StackNavigator(Stack, {
    initialRouteName: Routes.LOGIN,
    headerMode: 'none'
})
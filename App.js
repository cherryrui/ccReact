/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './components/Login/LoginScreen.js';
import CategoryScreen from './components/Category/CategoryScreen.js';
import HomeScreen from './components/Home/HomeScreen.js';
import CartScreen from './components/Cart/CartScreen.js';
import MineScreen from './components/Mine/MineScreen.js';


import styles from './AppStyle.js';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom
} from 'react-navigation';
let routes = [{
    name: 'Home',
    screen: HomeScreen,
    iconName: 'home',
}, {
    name: 'Category',
    screen: CategoryScreen,
    iconName: 'list-alt',
}, {
    name: 'Cart',
    screen: CartScreen,
    iconName: 'bar-chart',
}, {
    name: "Mine",
    screen: MineScreen,
    iconName: 'home'
}];
const formatRoutes = () => {
    let temp = {};
    routes.map(item => {
        item.navigationOptions = ({
            navigation
        }) => ({
            tabBarIcon: ({
                focused,
                tintColor
            }) => (
                <Icon name={item.iconName} style={{color:tintColor,fontSize:25}}/>),
        })
        temp[item.name] = item;
    })
    return temp;
}
const Tab = TabNavigator(formatRoutes(), {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: 'initialRoute',
    initialRouteName: "Home",
    lazy: true,
    indicatorStyle: styles.tabBarIndicator,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#06c1ae',
        inactiveTintColor: '#979797',
        style: {
            backgroundColor: '#f7f7f7',
        },
    },
})

/**
 * faye 根据路由注册页面
 */
const Navigator = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerStyle: styles.hide
        }
    },
    Tab: {
        screen: Tab,
    },
}, {
    navigationOptions: {
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
    }
})
export default class App extends Component < {} > {
    render() {
        return <Navigator screenProps={{themeColor:'red'}}/>;
    }
}
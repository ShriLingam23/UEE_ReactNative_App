import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BottomNavigation, {
    FullTab, IconTab
} from 'react-native-material-bottom-navigation'

import { IoLogoGameControllerB } from "react-icons/io";


export default class SecondPage extends Component {

    static navigationOptions = {
        title: 'Second Page',
        //Sets Header text of Status Bar
    };

    tabs = [
        {
            key: 'games',
            icon: <IoLogoGameControllerB/>,
            label: 'Games',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'movies-tv',
            icon: 'movie',
            label: 'Movies & TV',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'music',
            icon: 'music-note',
            label: 'Music',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <IconTab size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon.bind(this, tab.icon)}
        />
    )

    render() {
        const { navigate } = this.props.navigation;
        return (


            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text>You are on SecondPage</Text>
                </View>
                <BottomNavigation
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab.bind(this)}
                    tabs={this.tabs}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
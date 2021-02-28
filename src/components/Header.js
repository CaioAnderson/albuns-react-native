import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

export default function Header({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: Constants.statusBarHeight + 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

    },
    textHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
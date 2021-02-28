import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1,
        marginBottom: 10
    }
})
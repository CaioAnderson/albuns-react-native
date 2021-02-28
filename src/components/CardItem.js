import React from 'react';
import { View, StyleSheet } from 'react-native';


export default function CardItem({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginVertical: 2,
        elevation: 1,
    }
})
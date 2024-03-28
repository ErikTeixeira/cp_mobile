import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurnRecorder = ({ playerName }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Jogador Ativo: {playerName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#E9AA4F',
    },
});

export default TurnRecorder;

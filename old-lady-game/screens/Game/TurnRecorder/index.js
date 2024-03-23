import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurnRecorder = ({ playerName }) => {
    return (
        <View style={styles.container} >
            <Text>Jogador Ativo: {playerName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    padding: 0
    },
  });
  


export default TurnRecorder;

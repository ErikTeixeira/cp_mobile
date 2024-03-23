import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';

const Cell = ({ id, cellState, onClick }) => {
    const renderContent = () => {
        switch (cellState) {
            case 1:
                return <Image source={require('../../../../assets/pieces/peca1.jpg')} style={styles.image} />;
            case 2:
                return <Image source={require('../../../../assets/pieces/peca2.png')} style={styles.image} />;
            default:
                return null;
        }
    };

    return (
        <Pressable onPress={() => onClick(id)} style={styles.pressable}>
            <View style={styles.cell}>
                {renderContent()}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressable: {
        flex: 1
    },
    cell: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    }
});

export default Cell;


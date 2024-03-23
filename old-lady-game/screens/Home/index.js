

import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useState } from 'react';

import styles from "./style";


const HomeScreen = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);
    return (
      <View style={styles.viewHome} >
        <Text style={styles.titleHome} >
          Jogo da Veia
        </Text>

        <View style={styles.viewImage}>
         <Image
           style={styles.imageHome}
           source={require('../../assets/board/oldLady.png')}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonPlay}
          onPress={() => navigation.navigate('Game')}
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>

      </View>
    );
  }

export default HomeScreen;

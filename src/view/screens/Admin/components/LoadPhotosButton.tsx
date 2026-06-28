import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {MAIN_COLOR} from '../../../design-system';

export const LoadPhotosButton = () => {
  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        console.log(response.assets[0].base64);
      }
    });
  };

  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={pickImage}>
      <Text style={styles.buttonText}>+ Agregar fotos</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 52,
    backgroundColor: MAIN_COLOR,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: MAIN_COLOR,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{scale: 0.98}],
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
});

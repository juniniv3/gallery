import React, {useState} from 'react';
import {Button} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export const LoadPhotosButton = () => {
  const [image, setimage] = useState('');
  const pickImage = () => {
    console.log('pickImage');
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        // setImageUri(response.assets[0].uri);
        console.log(response.assets[0].uri);
      }
    });
  };
  return <Button title="Agregar" onPress={pickImage} />;
};

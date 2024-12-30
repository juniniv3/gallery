import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../state/store/store';
import {MAIN_COLOR, SECONDARY_COLOR, SUB_TITTLE} from '../../design-system';
import {useAppDispatch} from '../../../hooks/ReduxHooks';
import {useEffect, useState} from 'react';
import {startLoadingImages} from '../../../state/image';
import {ImageCard} from './components/ImageCard';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const images = useSelector((state: RootState) => state.image);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(startLoadingImages());
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        clearButtonMode="always"
        style={styles.searchBar}
        placeholder="Buscar en gallery"></TextInput>
      <Text style={styles.resultText}>Resulados de búsqueda</Text>

      <ScrollView style={styles.imagesContainer}>
        {images.images.map(image => {
          return <ImageCard image={image} key={image.id} ></ImageCard>;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
  },
  imagesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  resultText: {
    marginTop: 10,
    ...SUB_TITTLE,
    color: SECONDARY_COLOR,
  },
  searchBar: {
    fontSize: 18,
    padding: 10,
    borderColor: MAIN_COLOR,
    borderWidth: 2,
    borderRadius: 4,
    color: SECONDARY_COLOR,
  },
});

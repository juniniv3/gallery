import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../state/store/store';
import {
  BACKGROUND,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  BORDER_COLOR,
  SURFACE,
} from '../../design-system';
import {useAppDispatch} from '../../../hooks/ReduxHooks';
import {useEffect, useState} from 'react';
import {startLoadingImages} from '../../../state/image';
import {ImageCard} from './components/ImageCard';
import {ScrollView} from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const images = useSelector((state: RootState) => state.image);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(startLoadingImages());
  }, [dispatch]);

  const filteredImages = query.trim()
    ? images.images.filter(
        img =>
          img.name.toLowerCase().includes(query.toLowerCase()) ||
          img.description.toLowerCase().includes(query.toLowerCase()),
      )
    : images.images;

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          clearButtonMode="always"
          style={styles.searchBar}
          placeholder="Buscar en Gallery..."
          placeholderTextColor={TEXT_SECONDARY}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <Text style={styles.sectionTitle}>
        {filteredImages.length > 0
          ? `${filteredImages.length} resultados`
          : 'Resultados de búsqueda'}
      </Text>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {filteredImages.map(image => (
          <ImageCard image={image} key={image.id} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    paddingTop: 16,
  },
  searchWrapper: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchBar: {
    height: 48,
    backgroundColor: SURFACE,
    borderWidth: 1.5,
    borderColor: BORDER_COLOR,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: TEXT_PRIMARY,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 8,
    fontSize: 13,
    fontWeight: '600',
    color: TEXT_SECONDARY,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});

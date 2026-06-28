import {StyleSheet, Text, View} from 'react-native';
import {LoadPhotosButton} from './components/LoadPhotosButton';
import {BACKGROUND, TEXT_PRIMARY, TEXT_SECONDARY} from '../../design-system';

export const AdminsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel de administración</Text>
      <Text style={styles.subtitle}>
        Agrega fotos a la galería desde tu biblioteca
      </Text>
      <LoadPhotosButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    padding: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    marginBottom: 32,
    lineHeight: 20,
  },
});

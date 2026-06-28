import {StyleSheet, Text, View} from 'react-native';
import {BACKGROUND, MAIN_COLOR, TEXT_PRIMARY, TEXT_SECONDARY} from '../design-system';

export const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>v1.0</Text>
      </View>
      <Text style={styles.title}>Gallery App</Text>
      <Text style={styles.description}>
        Una aplicación para explorar y gestionar tu colección de fotos de forma
        sencilla y elegante.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    padding: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: TEXT_SECONDARY,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 280,
  },
});

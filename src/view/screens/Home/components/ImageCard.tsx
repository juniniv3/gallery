import {Image, StyleSheet, Text, View} from 'react-native';
import {SURFACE, TEXT_PRIMARY, TEXT_SECONDARY} from '../../../design-system';

type ImageCardProps = {
  image: {
    id: string;
    url: string;
    name: string;
    description: string;
  };
};

export const ImageCard: React.FC<ImageCardProps> = ({image}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: image.url}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={1}>
          {image.name}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {image.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: SURFACE,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  body: {
    padding: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_PRIMARY,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: TEXT_SECONDARY,
    lineHeight: 19,
  },
});

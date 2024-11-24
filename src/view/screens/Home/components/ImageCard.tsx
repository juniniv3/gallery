import {Image, Text, View} from 'react-native';

type ImageCardProps = {
  image: {
    id: number;
    url: string;
    name: string;
    description: string;
  };
};

export const ImageCard: React.FC<ImageCardProps> = ({image}): JSX.Element => {
  return (
    <View style={ {display: 'flex', flex: 1, marginTop: 30}}>
      <Image source={{uri: image.url}} style={{flex: 1}} />
      <Text>{image.name}</Text>
      <Text>{image.description}</Text>
    </View>
  );
};

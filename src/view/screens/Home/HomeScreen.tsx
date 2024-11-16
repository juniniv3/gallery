import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../state/store/store';
import {MAIN_COLOR, MAIN_TITTLE} from '../../design-system';

export const HomeScreen = () => {
  const selectedData = useSelector((state: RootState) => state.auth);
  return (
    <View style={styles.container}>
      <TextInput
        clearButtonMode="always"
        style={styles.searchBar}
        placeholder="Buscar en gallery"></TextInput>
      <Text style={styles.title}>Resulados de búsqueda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
  },
  title: {
    ...MAIN_TITTLE,
    color: MAIN_COLOR,
  },
  searchBar: {
    fontSize: 18,
    padding: 10,
    borderColor: MAIN_COLOR,
    borderWidth: 2,
    borderRadius: 4,
    color: MAIN_COLOR,
  },
});

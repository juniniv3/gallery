import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../state/store/store';
import {
  MAIN_COLOR,
  MAIN_TITTLE,
  SECONDARY_COLOR,
  SUB_TITTLE,
} from '../../design-system';

export const HomeScreen = () => {
  const selectedData = useSelector((state: RootState) => state.auth);
  return (
    <View style={styles.container}>
      <TextInput
        clearButtonMode="always"
        style={styles.searchBar}
        placeholder="Buscar en gallery"></TextInput>
      <Text style={styles.resultText}>Resulados de búsqueda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 12,
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

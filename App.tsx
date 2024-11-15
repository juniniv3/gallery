import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/view/navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './src/state/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
export default App;

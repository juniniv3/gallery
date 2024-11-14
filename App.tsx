import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/view/navigation/navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}
export default App;

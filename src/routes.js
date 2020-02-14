import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screen/home'

const Routes = createStackNavigator({
    home: Home,
  },
    {
      headerMode: 'none'
    }
  );

const App = createAppContainer(Routes);
export default App;
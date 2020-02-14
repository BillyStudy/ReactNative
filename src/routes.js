import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screen/home'
import SeeUser from './screen/user'

const Routes = createStackNavigator({
    home: Home,
    user: SeeUser
  },
    {
      headerMode: 'none'
    }
  );

const App = createAppContainer(Routes);
export default App;
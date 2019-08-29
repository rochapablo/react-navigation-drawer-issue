import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import { Drawer } from './components/drawer';
import HomeScreen from './screens/home';

const options: any = {
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  }),
};

const stackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
    ...options,
  },
);

const drawerNavigator = createDrawerNavigator(
  {
    Home: { screen: stackNavigator },
  },
  {
    backBehavior: 'none',
    contentComponent: Drawer,
    // @ts-ignore
    drawerLockMode: 'locked-closed',
    initialRouteName: 'Home',
    optimizationsEnabled: true,
    ...options,
  },
);

export default createAppContainer(drawerNavigator);

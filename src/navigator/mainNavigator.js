import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings138837Navigator from '../features/Settings138837/navigator';
import Settings138822Navigator from '../features/Settings138822/navigator';
import NotificationList138821Navigator from '../features/NotificationList138821/navigator';
import Maps138820Navigator from '../features/Maps138820/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings138837: { screen: Settings138837Navigator },
Settings138822: { screen: Settings138822Navigator },
NotificationList138821: { screen: NotificationList138821Navigator },
Maps138820: { screen: Maps138820Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

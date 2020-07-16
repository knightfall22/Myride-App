import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

//LOADING SCREENS
import initialRoute from './src/screens/initialRoute'
import resolveUSerAuthScreen from './src/screens/UserScreen/resolveUserAuthScreen'

//USER SCREEN
import SigninScreen from './src/screens/UserScreen/SigninScreen'
import SignupScreen from './src/screens/UserScreen/SignupScreen'
import UserHomeScreen from './src/screens/UserScreen/UserHomeScreen'

//DRIVER SCREEN
import DriverSigninScreen from './src/screens/DriverScreen/DriverSigninScreen'
import DriverSignupScreen from './src/screens/DriverScreen/DriverSigninScreen'
import DriverHomeScreen from './src/screens/DriverScreen/DriverHomeScreen'

import { Provider as AuthProvider } from "./src/Context/AuthContext";
import { Provider as LocationProvider } from "./src/Context/LocationContext";

import { setNavigation } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  initial: initialRoute,
  UserResolve: resolveUSerAuthScreen,
  userLoginFlow: createSwitchNavigator(
    {
       UserSignup: SignupScreen,
      UserSignin: SigninScreen,
     
    },
    {
      tabBarOptions: {
        tabStyle: {
          backgroundColor: "#15A2CD",
        },
      },
    }
  ),
  UserHome: UserHomeScreen,
  driverLoginFlow: createStackNavigator({
    DriverSignup: DriverSignupScreen,
    DriverSignin: DriverSigninScreen,
  }),
  DriverHome: DriverHomeScreen
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <App ref={(navigator) => setNavigation(navigator)} />
      </LocationProvider>
    </AuthProvider>
  );
}
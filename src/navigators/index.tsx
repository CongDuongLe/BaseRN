import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import LoginScreen from '@screens/login';
import RegisterScreen from '@screens/register';

import DropdownScreen from '@screens/theme/dropdown';
import CheckboxTreeScreen from '@screens/theme/checkboxTree';
import TimerScreen from '@screens/theme/timer';
import CountdownScreen from '@screens/theme/countdown';
import SwipeViewScreen from '@screens/theme/swipeView';
import MultiSelectScreen from '@screens/theme/multiselect';
import TextInputScreen from '@screens/theme/textinput';
import AvatarScreen from '@screens/theme/avatar';
import CheckboxScreen from '@screens/theme/checkbox';
import { tabBar } from './bottombar';
import ReactQuery from '@screens/learn-react-query/ReactQuery';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '@constants/Constants';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppNavigator() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );
  const NotAuthorizeScreenStack = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const MainStackNavigator = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName={'Main'}>
        <Stack.Screen
          name="Main"
          component={tabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Dropdown" component={DropdownScreen} />
        <Stack.Screen name="MultiSelect" component={MultiSelectScreen} />
        <Stack.Screen name="CheckboxTree" component={CheckboxTreeScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="Countdown" component={CountdownScreen} />
        <Stack.Screen name="SwipeView" component={SwipeViewScreen} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
        <Stack.Screen name="Avatar" component={AvatarScreen} />
        <Stack.Screen name="Checkbox" component={CheckboxScreen} />
        <Stack.Screen name="QueryScreen" component={ReactQuery} />
      </Stack.Navigator>
    );
  };

  const DrawerNavigator = ({ navigation }) => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: COLORS.white,
            width: width * 0.7,
          },
          drawerPosition: 'left',
        }}>
        <Drawer.Screen name="Main" component={MainStackNavigator} />
        {/* <Stack.Screen name="No_Auth" component={NotAuthorizeScreenStack} /> */}
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? 
        <DrawerNavigator navigation={
          navigationRef.current?.getRootState().routes[0].state?.index === 0
            ? navigationRef
            : null
        } /> :
        <NotAuthorizeScreenStack />}
    </NavigationContainer>
  );
}
export default AppNavigator;

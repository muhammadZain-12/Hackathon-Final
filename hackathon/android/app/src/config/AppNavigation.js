import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from '../screens/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/signup';
import MapScreen from '../screens/userScreens.js/mapScreen';
import TabView from '../screens/userScreens.js/tabViewScreen';
import UserTab from './userTabNavigation';
import AdminTab from './adminTabNavigation';


const Stack = createNativeStackNavigator();


function AppNavigation  () {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="signUp"
          component={SignUp}
        />
        <Stack.Screen name="mapScreen" component={MapScreen} />
        <Stack.Screen name="userTab" component={UserTab} />
        <Stack.Screen name="adminTab" component={AdminTab} />
        <Stack.Screen name="tabView" component={TabView} />
      </Stack.Navigator>
    </NavigationContainer>
    )


}

export default AppNavigation
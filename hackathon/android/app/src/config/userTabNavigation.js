import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen1 from '../screens/userScreens.js/userScreen1';
import UserScreen2 from '../screens/userScreens.js/userScreen2';
import UserScreen3 from '../screens/userScreens.js/userScreen3';
import User from '../screens/userScreens.js/user';


const Tab = createBottomTabNavigator();

export default function UserTab () {
  return (
    
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black', padding: 5},
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'blue',
      }}
      >
        <Tab.Screen name="user" component={User}/>
        <Tab.Screen name="Home" component={UserScreen1}/>
        <Tab.Screen name="Settings" component={UserScreen2}/>
        <Tab.Screen name="screen3" component={UserScreen3}/>
      </Tab.Navigator>
    
  );
}
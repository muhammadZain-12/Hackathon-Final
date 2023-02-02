import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminScreen1 from '../screens/adminScreen.js/adminScreen1';
import AdminScreen2 from '../screens/adminScreen.js/adminScreen2';
import AdminScreen3 from '../screens/adminScreen.js/adminScreen3';
import Admin from '../screens/adminScreen.js/admin';


const Tab = createBottomTabNavigator();

export default function AdminTab () {
  return (
    
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black', padding: 5},
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'blue',
      }}
      >
        <Tab.Screen name="admin" component={Admin}/>
        <Tab.Screen name="Home" component={AdminScreen1}/>
        <Tab.Screen name="Settings" component={AdminScreen2}/>
        <Tab.Screen name="screen3" component={AdminScreen3}/>
      </Tab.Navigator>
    
  );
}
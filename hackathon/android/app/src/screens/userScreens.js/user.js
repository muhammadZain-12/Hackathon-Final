import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function User({navigation, route}) {
  const [userData, setUserData] = React.useState('');

  const gwtUserDataInStorage = async () => {
    try {
      await AsyncStorage.getItem('user').then(res => {
        setUserData(res);
      });
    } catch (error) {
      console.log(error, 'error');
    }
  };

console.log(userData,"user")

  useEffect(() => {
    gwtUserDataInStorage();
  }, []);

  return (
    <View>
      <Text style={{color: 'black'}}>Hello USER</Text>
      <TouchableOpacity onPress={() => navigation.navigate('tabView')}>
        <Text style={{color: 'black'}}>Go to Tab View</Text>
      </TouchableOpacity>
    </View>
  );
}

export default User;

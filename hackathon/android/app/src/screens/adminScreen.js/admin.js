import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Admin({navigation, route}) {
  const [adminData, setAdminData] = React.useState('');

  const getAdminDataInStorage = async () => {
    try {
      await AsyncStorage.getItem('admin').then(res => {
        setAdminData(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdminDataInStorage();
  }, []);

  console.log(adminData, 'admin');

  return (
    <View>
      <Text>Hello Admin</Text>
    </View>
  );
}

export default Admin;

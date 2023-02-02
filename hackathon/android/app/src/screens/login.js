import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {cloneElement} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import UserTab from '../config/userTabNavigation';

function Login({navigation}) {
  const initialData = {
    email: '',
    password: '',
  };

  const [loginData, setLoginData] = React.useState(initialData);
  const [password, setPassword] = React.useState({
    inputPasswordActive: false,
    showPassword: false,
  });
 

const RouteToAdmin = async (data) => {

  try{
   await AsyncStorage.setItem("admin",JSON.stringify(data.data))
  }catch(error){
    console.log(error)
  }

  setTimeout(()=>{
    navigation.navigate("adminTab")
  },1000)

}


const RouteToUser = async (data) => {

  try{
   await AsyncStorage.setItem("user",JSON.stringify(data.data))
  }catch(error){
    console.log(error)
  }

  setTimeout(()=>{
    navigation.navigate("userTab")
  },1000)

}



  const checkUserToLogin = () => {
    axios
      .post('http:192.168.100.45:9000/api/login', loginData)
      .then(({data}) => {
        console.log(data);
        console.log(data.message);

        if (!data.status) {
          Alert.alert('Error Alert', data.message);
        } else {
          ToastAndroid.show('Successfully Login', ToastAndroid.SHORT);
          if(data.data.category=="admin"){
            RouteToAdmin(data)
          }
          else{
            RouteToUser(data)
          }
      
  };
}).catch((error)=>{
  console.log(error)
})
}

  const passwordShowHideIcon = () => {
    if (!password.showPassword) {
      setPassword({...password, showPassword: true});
    } else {
      setPassword({...password, showPassword: false});
    }
  };

  return (
    <View>
      <KeyboardAvoidingView enabled>
        <View style={styles.container}>
          <Text style={styles.heading}>Welcome,</Text>
          <Text style={styles.text}>Sign in to continue!</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="email"
              placeholderTextColor="gray"
              onChangeText={e => setLoginData({...loginData, email: e})}
              value={loginData.email}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '97%',
                borderWidth: 1,
                borderColor: 'gray',
                marginTop: 10,
                borderRadius: 10,
                alignItems: 'center',
              }}
            >
              <TextInput
                style={[
                  styles.input,
                  {marginTop: 0, borderWidth: 0, width: '90%'},
                ]}
                placeholder="password"
                placeholderTextColor="gray"
                secureTextEntry={password.showPassword ? false : true}
                onChangeText={e => setLoginData({...loginData, password: e})}
                value={loginData.password}
                onPressIn={() =>
                  setPassword({...password, inputPasswordActive: true})
                }
                onBlur={() =>
                  setPassword({...password, inputPasswordActive: false})
                }
              />
              {password.inputPasswordActive && (
                <TouchableOpacity onPress={passwordShowHideIcon}>
                  <Icon
                    name={!password.showPassword ? 'eye' : 'eye-off'}
                    size={25}
                    color="black"
                  />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={{width: '100%', marginTop: 5}}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 14,
                    textAlign: 'right',
                    width: '97%',
                    color: 'black',
                  },
                ]}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={checkUserToLogin}
              style={styles.touchableOpacity}
            >
              <Text
                style={[styles.text, {textAlign: 'center', color: 'black'}]}
              >
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
              }}
            >
              <Text style={styles.text}> Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
                <Text style={[styles.text, {color: '#a8aada'}]}> SignUp </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
    marginTop: 80,
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '500',
  },
  input: {
    width: '97%',
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  touchableOpacity: {
    width: '97%',
    backgroundColor: '#a8aada',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
});

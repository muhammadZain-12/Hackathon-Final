import React, { useDebugValue } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';

function SignUp({navigation}) {

    const initialData = {
        userName : "",
        email  : "",
        password : "",
        category : "User",
        mobileNumber : "",
    }

    const [userData,setUserData] = React.useState(initialData)

console.log(userData,"USER")
    

  const createUser = () => {

    axios.post("http:192.168.100.45:9000/api/signUp",userData).then(({data})=>{
        if(data.status){
            ToastAndroid.show("You are successfully Signup",ToastAndroid.SHORT)
            setUserData(initialData)
            setTimeout(()=>{
                    navigation.navigate("login")
            },1000)
        }
        else{
            Alert.alert("Error Alert", `${data.message}`)
        }
    }).catch((err)=>{   
        console.log(err,"error")
    })

  };

  return (
    <KeyboardAvoidingView enabled >
      <View style={styles.container}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.text}>Sign up to get started!</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="gray"
            onChangeText={(e)=>setUserData({...userData,userName : e})}
            value={userData.userName}
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="gray"
            onChangeText={(e)=>setUserData({...userData,email : e})}
            value={userData.email}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry = {true}
            onChangeText={(e)=>setUserData({...userData,password : e})}
            value={userData.password}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="gray"
            onChangeText={(e)=>setUserData({...userData,mobileNumber : e})}
            keyboardType="numeric"
            value={userData.mobileNumber}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={createUser}
            style={styles.touchableOpacity}
          >
            <Text style={[styles.text, {textAlign: 'center', color: 'black'}]}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            <Text style={styles.text}> Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={[styles.text, {color: '#a8aada'}]}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignUp;

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

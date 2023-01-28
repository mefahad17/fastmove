import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/config';

import logoSm from '../../assets/logo-sm.png';
import visa from '../../assets/visa-white.png';
import camera from '../../assets/camera.png';

import Header from '../../components/Header';
import Button from '../../components/Button';

import * as S from './styles';

const Login: React.FC = () => {
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState("")

  const { navigate } = useNavigation();

  const handle = ()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate('AppHome')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
  }

  return (
    <S.Container >
      <Header title="Login" boldPosition={1} />
      <S.Inner style = {{marginTop: 130}}>
        <S.Label>Email</S.Label>
        <S.Input
          value={email}
          onChangeText={setemail}
          onFocus={() => setFocused('email')}
          focused={focused === 'email'}
        />
        <S.Label>Password</S.Label>
        <S.CardInputWrapper focused={focused === 'pass'}>
          <S.CardInput
            value={password}
            onChangeText={setpassword}
            onFocus={() => setFocused('pass')}
            maxLength={19}
            
          />
        </S.CardInputWrapper>

      </S.Inner>
      <S.Inner>
        <Text style = {{textAlign: "center", marginBottom: 10}}>Before logging in your are agreeing to all the user terms and services!</Text>
        <Text style={{textAlign:"center",marginBottom:10,color:"blue",textDecorationLine: 'underline'}}>Create an account?</Text>
        <Button onPress={handle}>Login</Button>
      </S.Inner>
    </S.Container>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/config';

import logoSm from '../../assets/logo-sm.png';
import visa from '../../assets/visa-white.png';
import camera from '../../assets/camera.png';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Text } from 'react-native';

import * as S from './styles';

const CreateAccount: React.FC = () => {
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('');
  const [password, setpassword] = useState('');
  const [ phone, setPhone] = useState('');
  const [email, setemail] = useState("")

  const { navigate } = useNavigation();

  const handle = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate('Verification')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
  }

  return (
    <S.Container style = {{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <Header title="Create Account" boldPosition={1} />
      <S.Inner>
        <S.Label>Name</S.Label>
        <S.Input
          value={name}
          onChangeText={setName}
          onFocus={() => setFocused('name')}
          focused={focused === 'name'}
        />
        <S.Label>Email</S.Label>
        <S.CardInputWrapper focused={focused === 'email'}>
          <S.CardInput
            value={email}
            onChangeText={setemail}
            onFocus={() => setFocused('email')}
            focused={focused === 'email'}
          />
        </S.CardInputWrapper>
        <S.Label>Phone Number</S.Label>
        <S.CardInputWrapper focused={focused === 'phone'}>
          <S.CardInput
            keyboardType="number-pad"
            value={phone}
            onChangeText={setPhone}
            onFocus={() => setFocused('phone')}
            focused={focused === 'phone'}
            maxLength={19}
          />
        </S.CardInputWrapper>
        <S.Label>Password</S.Label>
        <S.CardInputWrapper focused={focused === 'number'}>
          <S.CardInput
            value={password}
            onChangeText={setpassword}
            onFocus={() => setFocused('number')}
            maxLength={19}
            focused={focused === 'number'}
          />
        </S.CardInputWrapper>
        <Text style = {{textAlign: "center", marginTop: 10}}>Before creating account please verify your credentials!</Text>

      </S.Inner>
      <S.Inner>
        <Button onPress={handle}>Create account</Button>
      </S.Inner>
    </S.Container>
  );
};

export default CreateAccount;

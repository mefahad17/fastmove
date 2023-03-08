import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import PhoneInput from '../../components/PhoneInput';
import Button from '../../components/Button';


import cabImg from '../../assets/bus.png';
import * as S from './styles';
// import { Text } from 'react-native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <S.Container>
      <StatusBar style="light" />
      <S.TopArea>
        <S.CabImg source={cabImg} resizeMode="contain" /> 
       
      </S.TopArea>
      <S.BottomArea>
        <S.Title style = {{textAlign: "center"}}>
          <S.Title>Welcome to </S.Title>
          <S.TitleBold>FastMove</S.TitleBold>
        </S.Title>
        
        <Button onPress={() => navigation.navigate('CreateAccount')} style={{marginBottom: 5}}>
          Create an Account
        </Button>
        <Button onPress={() => navigation.navigate('Login')}>
          Sigin
        </Button>
      </S.BottomArea>
    </S.Container>
  );
};





export default Home;

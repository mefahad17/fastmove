import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/config';

import logoSm from '../../assets/logo-sm.png';
import visa from '../../assets/visa-white.png';
import camera from '../../assets/camera.png';
import { View,  Image, TextComponent } from 'react-native';
import {  TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import Button from '../../components/Button';
import visaImage from './../../assets/visapic.png';
import mastercardImage from './../../assets/mastercard.png';

import { Text } from 'react-native';

import * as S from './styles';
import { BoldText } from 'screens/passengerDetails/styles';
const CARD_IMAGES = [
  require('./../../assets/mastercard.png'),
  require('./../../assets/mastercard.png'),
  require('./../../assets/mastercard.png'),
  require('./../../assets/mastercard.png'),
];

const payments: React.FC = () => {
  const [focused, setFocused] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const[code,setCode]=useState('');
  const handlePayment = () => {
    // Handle payment logic here
  };

  const { navigate } = useNavigation();


  return (
      <><Header title="Payment" boldPosition={1} />
    <View>
    <View style={{ flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20, }}>
        {CARD_IMAGES.map((image, index) => (
          <Image
            key={`cardImage-${index}`}
            source={image}
            style={{   width: 50,
              height: 30,
              marginRight: index < CARD_IMAGES.length - 1 ? 10 : 0,
            marginTop:15, }}
          />
        ))}
      </View>
      
      <S.Inner>
      <Text style={{ fontFamily:'bold',fontSize:25 }}>Total Amount</Text>
      <Text style={{ fontSize:25,marginTop:10 }}>Rs</Text>
      
      
      <S.Label  >Name on Card</S.Label>
        <S.Input
          value={cardName}
          onChangeText={setCardName}
          onFocus={() => setFocused('cardName')}
          focused={focused === 'cardName'}
        />
         <S.Label  >Card Number</S.Label>
        <S.Input
          value={cardNumber}
          onChangeText={setCardNumber}
          onFocus={() => setFocused('cardNumber')}
          focused={focused === 'cardNumber'}
          placeholder=""
          keyboardType="number-pad"
          maxLength={16}
          required
        />
        <S.Label  >ZIP/Postel Code</S.Label>
        <S.Input
          value={code}
          onChangeText={setCode}
          onFocus={() => setFocused('code')}
          focused={focused === 'code'}
          placeholder=""
          keyboardType="number-pad"
          maxLength={5}
          required
        />
        <Button>Pay</Button>
    

      </S.Inner>
      

      </View>
    
    </>
    
  );
};

export default payments;

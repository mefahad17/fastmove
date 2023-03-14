import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';




import { Text, View,TextInput,TouchableOpacity, } from 'react-native';
import Button from '../../screens/complain/button';



import * as S from './styles';
import styled from 'styled-components';
import { Center, Right } from 'components/Header/styles';
interface FeedbackFormProps {
  onSubmit: (feedback: string) => void;
}


const profile: React.FC = () => {
  const navigation = useNavigation();
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [ phone, setPhone] = useState('');
  




  return (
    <S.Container>    
      <S.Header>
        <S.HeaderView>   
          <S.BoldText>Fast-Move</S.BoldText>
        </S.HeaderView>
        <View style={{ flexDirection: "row", alignItems: "center" }} />
      </S.Header>
     
      <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Profile Details</Text>

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
      </S.Inner>
    </S.Container>
  );
};

export default profile;


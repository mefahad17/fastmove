import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import IconI from "react-native-vector-icons/Feather";





import { Text, View,TouchableOpacity, } from 'react-native';
import Button from '../../components/Button';


import * as S from './styles';
import styled from 'styled-components';
import { Right } from 'components/Header/styles';


const helpline: React.FC = () => {

    const navigation = useNavigation();
  return (
    <S.Container>    
        <S.Header>
            <S.HeaderView>
           
            <S.BoldText>Fast-Move</S.BoldText>
            </S.HeaderView>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
    </View>    
     </S.Header>
     <S.BoldText>General Queries Helpline</S.BoldText>
     <Text style={{ marginTop:15,fontSize:15, }}>For E-ticket issuance,SMS delivery or payment deduction/refund realted problems.</Text>

     <S.Stack>
      <S.LinkContainer onPress={() => navigation.navigate('SelectDestination')}>
  <View style={{ alignItems: 'center' }}>
  <IconI  name="phone-call" size={30} color="white" />
    <S.CText>Helpline</S.CText>
    <S.CText>+92345-6776456</S.CText>
    <S.CText>fastmove@gmail.com</S.CText>
    

  </View>
</S.LinkContainer>
     
      
      </S.Stack>
      <S.Stack>
      <S.LinkContainer onPress={() => navigation.navigate('bookedtickets')}>
        <View style={{ alignItems: 'center' }}>
        <IconI  name="phone-call" size={30} color="white"  />
        <S.CText>SMS Delivery Problem</S.CText>
    <S.CText>+92345-6776456</S.CText>
        </View>
        
      </S.LinkContainer>
      
      </S.Stack>
      <S.Stack>
      <S.LinkContainer onPress={() => navigation.navigate('pendingtickets')}>
        <View style={{ alignItems: 'center' }}>
        <IconI  name="phone-call" size={30} color="white" />
        <S.CText>ATM Card Problem</S.CText>
    <S.CText>+92345-6776456</S.CText>
        </View>
      </S.LinkContainer>
      </S.Stack>

    
        
      
     
      
    
 
      
    </S.Container>
  );
};

export default helpline;

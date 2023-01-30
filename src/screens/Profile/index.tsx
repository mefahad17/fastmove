import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconC from "react-native-vector-icons/Entypo";

import { Text, View,TouchableOpacity, } from 'react-native';
import Button from '../../components/Button';


import * as S from './styles';
import styled from 'styled-components';

const AppHome: React.FC = () => {
 
    const navigation = useNavigation();
  return (
    <S.Container>
        <S.Header>
            <S.HeaderView>
            <IconA name="home" size={30} color="black"/>
            <S.BoldText>Fast-Move</S.BoldText>
            </S.HeaderView>
        </S.Header>
        <View >
            <S.BoldText style={{marginTop:20, }}>Profile Detail</S.BoldText>
            
         
      <Text style={{fontSize:25,marginTop:40,marginRight:220,}} >User Name</Text>
      <Text style={{fontSize:15,marginTop:15,marginLeft:50,}} >user.@gmail.com</Text>
      <View >
        <Text style={{fontSize:25,marginTop:40,}} >Phone:</Text>
        <Text style={{fontSize:15,marginTop:15,marginLeft:50,}} >+9235-55-5555</Text>
      </View>
      <View >
        <Text style={{fontSize:25,marginTop:40,}} >Location:</Text>
        <Text style={{fontSize:15,marginTop:15,marginLeft:50,}} >City,</Text>
      </View>
            
            

        </View>

        <Button style={{width:140,marginTop:100,}}>Edit profile</Button>
      
    </S.Container>
  );
};

export default AppHome;

import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconC from "react-native-vector-icons/Entypo";
import IconF from "react-native-vector-icons/MaterialIcons";

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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
      
      <TouchableOpacity>
        <IconC name="user" size={30} onPress={() => navigation.navigate('Profile')} />
        
      </TouchableOpacity>
    </View>
        
        </S.Header>
        <S.WhereToContainer>
        <S.WhereToButton

        >
          <S.ToContainer>
            <S.To placeholder="search"></S.To>
          </S.ToContainer>
        </S.WhereToButton>
      </S.WhereToContainer>
      <S.Stack>
      <S.LinkContainer onPress={() => navigation.navigate('SelectDestination')}>
        <Icon name="ticket" size={30} color="white"/>
        <S.CText>Book ticket</S.CText>
      </S.LinkContainer>
      <S.LinkContainer onPress={() => navigation.navigate('CurrentLocation')}>
      <IconA name="car" size={30} color="white"/>
        <S.CText>View Rides</S.CText>
      </S.LinkContainer>
      </S.Stack>
      <S.Stack>
      <S.LinkContainer>
        <IconE name="credit-card" size={30} color="white"/>
        <S.CText>Check Out</S.CText>
      </S.LinkContainer>
      <S.LinkContainer onPress={() => navigation.navigate('CurrentLocation')}>
        <Icon name="location" size={30} color="white"/>
        <S.CText>Track Rides</S.CText>
      </S.LinkContainer>
      
      </S.Stack>
      <S.Stack>
      <S.LinkContainer>
        <IconE name="credit-card" size={30} color="white"/>
        <S.CText>Complaint</S.CText>
      </S.LinkContainer>
      <S.LinkContainer>
        <IconF name="feedback" size={30} color="white"/>
        <S.CText>Review</S.CText>
      </S.LinkContainer>
      
      </S.Stack>
    </S.Container>
  );
};

export default AppHome;

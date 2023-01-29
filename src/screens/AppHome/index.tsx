import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import { Text, View } from 'react-native';
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
      <S.LinkContainer>
        <Icon name="location" size={30} color="white"/>
        <S.CText>Track Rides</S.CText>
      </S.LinkContainer>
      </S.Stack>
    </S.Container>
  );
};

export default AppHome;

import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';

import { Text, View,TouchableOpacity, } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';


import * as S from './styles';
import styled from 'styled-components';
import { Right } from 'components/Header/styles';


const AboutusScreen: React.FC = () => {
    const navigation = useNavigation();
  return (
    <S.Container>    
        <Header title="Notifications" boldPosition={1} />
     
     
    </S.Container>
  );
};

export default AboutusScreen;

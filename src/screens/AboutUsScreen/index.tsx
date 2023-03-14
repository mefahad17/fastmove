import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';

import { Text, View,TouchableOpacity, } from 'react-native';
import Button from '../../components/Button';


import * as S from './styles';
import styled from 'styled-components';
import { Right } from 'components/Header/styles';


const AboutusScreen: React.FC = () => {
    const navigation = useNavigation();
  return (
    <S.Container>    
        <S.Header>
            <S.HeaderView>
            <S.BoldText>About Us</S.BoldText>
            </S.HeaderView>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
    </View>    
     </S.Header>
     
     <Text  style={{ fontSize:25,marginLeft:10,marginTop:10,fontWeight:"bold" }} >Fast Move</Text>
    <Text style={{ fontSize:23,marginLeft:10,marginTop:5 }}>Fast Move - Your Go To Bus Ticket Booking App</Text>
    <Text style={{ fontSize:17,marginTop:10, }}>Fast Move is the ultimate solution for anyone looking to </Text>
    <Text  style={{ fontSize:17,marginTop:5, }}> book bus tickets quickly and easily.</Text>
    <Text style={{ fontSize:17,marginTop:5, }}>Our mission at Fast Move is to provide our customers</Text>
    <Text style={{ fontSize:17,marginTop:5, }}> with an exceptional booking experience.</Text>
    <Text style={{ fontSize:17,marginTop:5, }}>We understand the importance of time and convenience,</Text>
     <Text style={{ fontSize:17,marginTop:5, }}>which is why we have designed</Text>
     <Text style={{ fontSize:17,marginTop:5, }}> our app to be user-friendly, intuitive, and extremely fast.</Text>
    <Text style={{ fontSize:17,marginTop:15,fontWeight:"bold" }}>So why wait?</Text>
    <Text style={{ fontSize:17,marginTop:5, }}> Download the Fast Move app today </Text>
    <Text style={{ fontSize:17,marginTop:5, }}>and experience the joy of hassle-free bus ticket booking!</Text>
    </S.Container>
  );
};

export default AboutusScreen;

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


const notifications: React.FC = () => {

 
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
     <S.BoldText>Complaints</S.BoldText>
     

    
        
      
     
      
    
 
      
    </S.Container>
  );
};

export default notifications;

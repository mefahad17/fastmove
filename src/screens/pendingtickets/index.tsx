import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';
import IconL from "react-native-vector-icons/FontAwesome5";
import Header from '../../components/Header';




import { Text, View,TouchableOpacity, } from 'react-native';
import Button from '../../components/Button';


import * as S from './styles';
import styled from 'styled-components';
import { Right } from 'components/Header/styles';


const pendings: React.FC = () => {

 
    const navigation = useNavigation();
  return (
    <S.Container>    
        <S.Header>
            <S.HeaderView>
            
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 40 }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 50 }}>Lahore{'\n'}</Text>
  <View style={{ alignItems: 'center', marginLeft: 50 }}>
    <IconL name="bus-alt" size={50} color="#0a84ff" />
  </View>
  <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 70 }}>Multan</Text>
</View>





</S.HeaderView>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
    </View>    
    <Header title="Pending Tickets" boldPosition={1} />
     </S.Header>
    
     

    
  
    
 
      
    </S.Container>
  );
};

export default pendings;
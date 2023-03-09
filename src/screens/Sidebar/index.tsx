import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';

import { Text, View,TouchableOpacity,FlatList  } from 'react-native';
import Button from '../../components/Button';
import * as S from './style';
import styled from 'styled-components';
import { Left, Right } from 'components/Header/styles';


const sidebar: React.FC = () => {

 
    const navigation = useNavigation();
    
      const buttons = [
        { id: 1, title: 'Profile', },
        { id: 2, title: 'Home' },
        { id: 3, title: 'Book Tickets' },
        { id: 4, title: 'Buses Schedules' },
        { id: 5, title: 'About us' },
        { id: 6, title: 'Sign Out'},
      ];
    
      function renderItem({ item }) {
    return (
      <TouchableOpacity 
    style={{ paddingVertical: 25,paddingHorizontal:175, backgroundColor: 'black', }}
    onPress={() => {
      // Navigate to the desired screen
      if (item.title === 'Profile') {
        navigation.navigate('Profile');
      } else if (item.title === 'Home') {
        navigation.navigate('AppHome');
      } else if (item.title === 'Book Tickets') {
        navigation.navigate('SelectDestination');
      } else if (item.title === 'Buses Schedules') {
        navigation.navigate('busshedules');
      } else if (item.title === 'About us') {
        navigation.navigate('AboutUsScreen');
      } else if (item.title === 'Sign Out') {
        navigation.navigate('SignOutScreen');
      }
    }}
  >
    <Text style={{ fontSize: 18, color: 'white' }}>{item.title}</Text>
  </TouchableOpacity>
    );
  }
  return (
    <S.Container>    
        <S.Header>
            <S.HeaderView>
           
            <S.BoldText>Fast-Move</S.BoldText>
            </S.HeaderView>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
    </View>    
     </S.Header>
     
     <S.View style={{ width: '100%' }}>
  <FlatList
    data={buttons}
    renderItem={renderItem}
    keyExtractor={item => item.id.toString()}
  />
</S.View>      
    </S.Container>
  );
};

export default sidebar;

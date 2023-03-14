import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Text, View,TouchableOpacity,FlatList  } from 'react-native';
import Button from '../../components/Button';
import * as S from './style';
import styled from 'styled-components';
import { Left, Right } from 'components/Header/styles';


const sidebar: React.FC = () => {

 
    const navigation = useNavigation();
    
    const buttons = [
      { id: 1, title: 'Profile', icon: 'person' },
      { id: 2, title: 'Home', icon: 'home' },
      { id: 3, title: 'Book Tickets', icon: 'book' },
      { id: 4, title: 'Buses Schedules', icon: 'schedule' },
      { id: 5, title: 'About us', icon: 'info' },
      { id: 6, title: 'Sign Out', icon: 'exit-to-app' },
    ];
    
      function renderItem({ item }) {
    return (
      <TouchableOpacity 
    style={{backgroundColor: '#0a84ff',width:480,height:70, }}
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
  <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 20  }}>
  <MaterialIcons name={item.icon} size={30} color="white" style={{ marginRight: 40 }} />
  <View style={{ justifyContent: 'center', alignItems: 'center', }}>
    <Text style={{ fontSize: 20, color: 'white' }}>{item.title}</Text>
  </View>
</View>
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
     
     <S.View style={{ width: '100%',marginTop:0, }}>
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

import React, { useEffect, useState } from 'react';
import { Alert, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/MaterialCommunityIcons';
import IconB from 'react-native-vector-icons/Entypo';
import IconE from 'react-native-vector-icons/Ionicons';
import IconC from "react-native-vector-icons/Entypo";
import IconD from "react-native-vector-icons/FontAwesome";

import IconF from "react-native-vector-icons/FontAwesome";
import IconG from "react-native-vector-icons/MaterialIcons";
import IconH from "react-native-vector-icons/MaterialIcons";
import IconI from "react-native-vector-icons/Feather";
import IconJ from "react-native-vector-icons/FontAwesome";
import IconK from "react-native-vector-icons/MaterialIcons";


import { Text, View,TouchableOpacity, } from 'react-native';
import Button from '../../components/Button';


import * as S from './styles';
import styled from 'styled-components';
import { Right } from 'components/Header/styles';
function openSidebar(drawerRef: React.RefObject<DrawerLayoutAndroid>): void {
  drawerRef.current?.openDrawer();
}

const AppHome: React.FC = () => {
  const drawerRef = React.useRef<DrawerLayoutAndroid>(null);

  function handleButtonPress(): void {
    openSidebar(drawerRef);
  }
 
    const navigation = useNavigation();
  return (
    <S.Container>
            
        <S.Header>
            <S.HeaderView>
            <IconB name="menu" onPress={() => navigation.navigate('Sidebar')}size={30}  color="black"/>
            <S.BoldText>Fast-Move</S.BoldText>
            </S.HeaderView>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
      
      <TouchableOpacity>
        <Text style={{ fontSize: 17,textDecorationLine: 'underline' }}>Sign out</Text>
        
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
      <S.LinkContainer onPress={() => navigation.navigate('busshedules')}>
      <IconA name="bus-clock"  size={30} color="white"/>
        <S.CText>Bus timings</S.CText>
      </S.LinkContainer>
      
      </S.Stack>
      <S.Stack>
      <S.LinkContainer>
        <IconD name="check-square" size={30} color="white"/>
        <S.CText>Booked Tickets</S.CText>
      </S.LinkContainer>
      <S.LinkContainer onPress={() => navigation.navigate('CurrentLocation')}>
        <IconK name="pending" size={30} color="white"/>
        <S.CText>Pending tickets</S.CText>
      </S.LinkContainer>
      </S.Stack>
      <Text style={{ fontSize: 30, color: 'black', position: 'relative', right: 0 }}>Other information</Text>
      <S.Stack>
      <S.LinkContainer>
        <IconE name="notifications" size={30} color="white"/>
        <S.CText>Notifications</S.CText>
      </S.LinkContainer>
      <S.LinkContainer>
        <IconF name="calendar" size={30} color="white"/>
        <S.CText>Booking History</S.CText>
      </S.LinkContainer>
      
      </S.Stack>
      <S.footer>
        <S.Stack  >
          
    <View>
      <IconG name="star" size={35} color="white" style={{marginRight: 80,marginTop:-20}} />
      <Text style={{color: 'white', textAlign: 'center',}}>Rate us</Text>
    </View>
    <View>
      <IconH name="bus-alert" size={35} color="white" style={{marginRight: 100,marginTop:-20}} />
      <Text style={{color: 'white', textAlign: 'center'}}>Bus cancelled</Text>
    </View>
    <View>
      <IconI name="phone-call" size={30} color="white" style={{marginRight: 100,marginTop:-20}} />
      <Text style={{color: 'white', textAlign: 'center'}}>Helpline</Text>
    </View>
    <View>
      <IconJ name="credit-card" size={35} color="white" style={{ marginTop:-20 }} />
      <Text style={{color: 'white', textAlign: 'center'}}>Complain</Text>
    </View>

        </S.Stack>
       
       
      </S.footer>
      
    </S.Container>
  );
};

export default AppHome;

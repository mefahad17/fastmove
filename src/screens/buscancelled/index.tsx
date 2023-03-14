import React, { useEffect, useState } from 'react';
import { Alert, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';

import IconB from 'react-native-vector-icons/Entypo';
import IconL from "react-native-vector-icons/FontAwesome5";

import { Text, View,TouchableOpacity,  } from 'react-native';
import Button from '../../components/Button';


import * as S from './styles';
import styled from 'styled-components';
import { Right } from 'components/Header/styles';
interface IProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}


const AppHome: React.FC = () => {
    const navigation = useNavigation();
    const [selectedSeats, setSelectedSeats] = useState<{
      length: number; [key: number]: boolean 
}>({
  length: 0
});
    const [errorMessage, setErrorMessage] = useState('');

    const handleSelectSeat = (seatNumber: number) => {
      setSelectedSeats(prevSelectedSeats => ({
        ...prevSelectedSeats,
        [seatNumber]: !prevSelectedSeats[seatNumber]
      }));
    };
    const handlePress = () => {
      console.log('Button pressed');
    };
   
  const handleBookNow = () => {
    if (selectedSeats.length === 0) {
      setErrorMessage('Please select a seat');
      return;
    }
    console.log(selectedSeats);
    navigation.navigate('notifications');
  };
  return (
    <S.Container>
            
        <S.Header>
            <S.HeaderView>
            <IconB name="menu" onPress={() => navigation.navigate('Sidebar')}size={30}  color="black"/>
            <IconL name="bus-alt" size={30}  color="#0a84ff"/> 
            <S.BoldText>Fast-Move</S.BoldText>
            </S.HeaderView>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
      
      
    </View>
        
    </S.Header>
  <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}> ABC Travel   </Text>
  <Text style={{ fontSize: 16 }}>From: Lahore | To: Multan    </Text>
  <Text style={{ fontSize: 16 }}>Departure : 8:00 AM</Text>
</View>

  <S.Container style={{ marginRight:15 }} >    
  <S.Stack style={{ margin: 5, flexDirection: 'row' }}>
          <S.LinkContainer
            style={{ marginRight: -9, backgroundColor: selectedSeats[1] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(1)}
          >
            <View>
              <S.CText>seat.1</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[2] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(2)}
          >
            <View>
              <S.CText>Seat.2</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ marginRight: -9, marginLeft: 80, justifyContent: 'space-between', backgroundColor: selectedSeats[3] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(3)}
          >
            <View>
              <S.CText>seat.3</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[4] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(4)}
          >
            <View>
              <S.CText>Seat.4</S.CText>
            </View>
          </S.LinkContainer>
        </S.Stack>


        <S.Stack style={{ margin: 2, flexDirection: 'row' }}>
          <S.LinkContainer
            style={{ marginRight: -9, backgroundColor: selectedSeats[5] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(5)}
          >
            <View>
              <S.CText>seat.5</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[6] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(6)}
          >
            <View>
              <S.CText>Seat.6</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ marginRight: -9, marginLeft: 80, justifyContent: 'space-between', backgroundColor: selectedSeats[7] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(7)}
          >
            <View>
              <S.CText>seat7</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[8] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(8)}
          >
            <View>
              <S.CText>Seat8</S.CText>
            </View>
          </S.LinkContainer>
        </S.Stack>
      
        <S.Stack style={{ margin: 2, flexDirection: 'row' }}>
          <S.LinkContainer
            style={{ marginRight: -9, backgroundColor: selectedSeats[9] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(9)}
          >
            <View>
              <S.CText>seat9</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[10] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(10)}
          >
            <View>
              <S.CText>Seat10</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ marginRight: -9, marginLeft: 80, justifyContent: 'space-between', backgroundColor: selectedSeats[11] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(11)}
          >
            <View>
              <S.CText>seat11</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[12] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(12)}
          >
            <View>
              <S.CText>Seat12</S.CText>
            </View>
          </S.LinkContainer>
        </S.Stack>

        <S.Stack style={{ margin: 2, flexDirection: 'row' }}>
          <S.LinkContainer
            style={{ marginRight: -9, backgroundColor: selectedSeats[13] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(13)}
          >
            <View>
              <S.CText>seat13</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[14] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(14)}
          >
            <View>
              <S.CText>Seat14</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ marginRight: -9, marginLeft: 80, justifyContent: 'space-between', backgroundColor: selectedSeats[15] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(15)}
          >
            <View>
              <S.CText>seat15</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[16] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(16)}
          >
            <View>
              <S.CText>Seat16</S.CText>
            </View>
          </S.LinkContainer>
        </S.Stack>

        <S.Stack style={{ margin: 2, flexDirection: 'row' }}>
          <S.LinkContainer
            style={{ marginRight: -9, backgroundColor: selectedSeats[17] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(17)}
          >
            <View>
              <S.CText>seat17</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[18] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(18)}
          >
            <View>
              <S.CText>Seat18</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ marginRight: -9, marginLeft: 80, justifyContent: 'space-between', backgroundColor: selectedSeats[19] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(19)}
          >
            <View>
              <S.CText>seat19</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[20] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(20)}
          >
            <View>
              <S.CText>Seat20</S.CText>
            </View>
          </S.LinkContainer>
        </S.Stack>
        <S.Stack style={{ margin: 2, flexDirection: 'row' }}>
          <S.LinkContainer
            style={{ marginRight: -9, backgroundColor: selectedSeats[21] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(21)}
          >
            <View>
              <S.CText>seat21</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[22] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(22)}
          >
            <View>
              <S.CText>Seat22</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ marginRight: -9, marginLeft: 80, justifyContent: 'space-between', backgroundColor: selectedSeats[23] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(23)}
          >
            <View>
              <S.CText>seat23</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[24] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(24)}
          >
            <View>
              <S.CText>Seat24</S.CText>
            </View>
          </S.LinkContainer>
        </S.Stack>
        <S.Stack style={{ margin: 2, flexDirection: 'row' }}>
          <S.LinkContainer
            style={{ marginRight: -9, backgroundColor: selectedSeats[25] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(25)}
          >
            <View>
              <S.CText>seat25</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[26] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(26)}
          >
            <View>
              <S.CText>Seat26</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ marginRight: -9, marginLeft: 80, justifyContent: 'space-between', backgroundColor: selectedSeats[27] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(27)}
          >
            <View>
              <S.CText>seat27</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[28] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(28)}
          >
            <View>
              <S.CText>Seat28</S.CText>
            </View>
          </S.LinkContainer>
        </S.Stack>
        <S.Stack style={{ margin: 2, flexDirection: 'row' }}>
          <S.LinkContainer
            style={{ marginRight: -9, backgroundColor: selectedSeats[29] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(29)}
          >
            <View>
              <S.CText>seat29</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[30] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(30)}
          >
            <View>
              <S.CText>Seat30</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ marginRight: -9, marginLeft: 80, justifyContent: 'space-between', backgroundColor: selectedSeats[31] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(31)}
          >
            <View>
              <S.CText>seat31</S.CText>
            </View>
          </S.LinkContainer>
          <S.LinkContainer
            style={{ backgroundColor: selectedSeats[32] ? 'green' : '#0a84ff' }}
            onPress={() => handleSelectSeat(32)}
          >
            <View>
              <S.CText>Seat32</S.CText>
            </View>
          </S.LinkContainer>
        </S.Stack>
  
  
</S.Container>

<View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          margin: 20,
          width: 200,
        }}
        onPress={handleBookNow}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Book now</Text>
      </TouchableOpacity>
      {errorMessage ? (
        <Text style={{ color: 'red' }}>{errorMessage}</Text>
      ) : null}
    </View> 
    </S.Container>
  );
};

export default AppHome;

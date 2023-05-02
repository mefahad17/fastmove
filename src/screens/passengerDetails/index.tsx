import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';
import IconL from "react-native-vector-icons/FontAwesome5";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text, View,TouchableOpacity, } from 'react-native';
import Button from '../../components/Button';


import * as S from './styles';
import styled from 'styled-components';
import { Right } from 'components/Header/styles';
import { FlatList } from 'react-native-gesture-handler';


const addcard: React.FC = () => {
  const navigation = useNavigation();
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [cnic,setCnic]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  const handleInputsFilled = () => {
    if (name && phoneNumber && cnic) {
      setAllInputsFilled(true);
    } else {
      setAllInputsFilled(false);
    }
  };
  const handleContinue = () => {
    if (!name || !phoneNumber || !cnic) {
      Alert.alert('All fields are required');
      return;
    }

    if (phoneNumber.length !== 11) {
      Alert.alert('Phone number must be 11 digits');
      return;
    }

    if (cnic.length !== 13) {
      Alert.alert('CNIC number must be 13 digits');
      return;
    }

    navigation.navigate('payments');
  };

  

  return (
    <S.Container>    
        <S.Header>
        <S.HeaderView>
  <View>
    <S.BoldText>Lahore</S.BoldText>
    <Text style={{ marginLeft:50,marginTop:10  }}>Bus: ABC-123</Text>
    
    
  </View>
  <View>
    <IconL style={{ marginLeft: 80}} name="bus-alt" size={45} color="#0a84ff" />
  </View>
  <View>
    <S.BoldText>Gujranwala</S.BoldText>
    <Text style={{ marginLeft:10,marginTop:10 }}>Date/Time: 28 March 2023 10:00 AM</Text>
    
  </View>
</S.HeaderView>    
     </S.Header>
     <View>
      <S.Inner>
      <S.Label>
    <Icon name="phone" size={20} color="#000" /> Phone Number*
  </S.Label>
        <S.Input
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          onFocus={() => setFocused('phoneNumber')}
          focused={focused === 'phoneNumber'}
          placeholder="Enter phone number"
          placeholderTextColor="#A9A9A9"
          keyboardType="number-pad"
          maxLength={11}
          required
          onBlur={handleInputsFilled}
        />
        <S.Label>
    <Icon name="user" size={20} color="#000" /> Passenger Name*
  </S.Label>
        <S.Input
          value={name}
          onChangeText={setName}
          onFocus={() => setFocused('name')}
          focused={focused === 'name'}
          placeholder="Enter name"
          placeholderTextColor="#A9A9A9"
          required
          onBlur={handleInputsFilled}
        />
         <S.Label>
    <Icon name="id-card" size={20} color="#000"  /> Passenger CNIC*
  </S.Label>
        <S.Input
          value={cnic}
          onChangeText={setCnic}
          onFocus={() => setFocused('cnic')}
          focused={focused === 'cnic'}
          placeholder="Enter CNIC"
          placeholderTextColor="#A9A9A9"
          keyboardType="number-pad"
          maxLength={13}
          required
          onBlur={handleInputsFilled}
        />
      </S.Inner>

      <Button style={{ marginTop: 290 }} onPress={handleContinue}>
        Continue for E-Ticket
      </Button>
    </View>
     

    
        
      
     
      
    
 
      
    </S.Container>
  );
};

export default addcard;

import { Text,View,Platform,TouchableOpacity, Modal,TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Calendar from 'react-native-calendars/src/calendar';


import Button from '../../components/Button';
import React, { useState } from 'react'

import {Picker} from '@react-native-picker/picker';

import * as S from './styles';
import CarButton from '../../components/CarButton';


const SelectDestination: React.FC= () => {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [selectedYear, setSelectedYear] = useState<number>(100);
 

 
  
  const days = [...Array(31).keys()].map(i => i + 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = [...Array(10).keys()].map(i => i + 2022);
  const [selected, setSelected] = useState('');
  const [selectedValue, setSelectedValue] = useState("1");
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [focused, setFocused] = useState('');


  return (
    <S.Container>
      <S.TopContainer>
        <S.Timeline>
          <S.Dot />
          <S.Dash />
          <S.Dot secondary = {true}/>
        </S.Timeline>
        <S.FromTo>
        <S.Input
          value={from}
          onChangeText={setFrom}
          onFocus={() => setFocused('from')}
          focused={focused === 'from'}
          placeholder='From'
        />
        <S.Input
          value={to}
          onChangeText={setTo}
          onFocus={() => setFocused('to')}
          focused={focused === 'to'}
          placeholder='To'
        />
        </S.FromTo>
      </S.TopContainer>
      <S.Shadow />
      <View style = {{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <S.Label style={{marginTop:-50,}}>Date</S.Label>
      <Picker
        selectedValue={selectedDay}
        style={{ height: 20, width: 100, marginTop:50, }}
        onValueChange={(itemValue: number, itemIndex: number) => setSelectedDay(itemValue)}
      >
        {days.map(day => (
          <Picker.Item label={day.toString()} value={day} key={day} />
        ))}
      </Picker>
      <S.Label style={{marginTop:-50,}}>Month</S.Label>
      <Picker
        selectedValue={selectedMonth}
        style={{ height: 20, width: 200 ,marginTop:50,}}
        onValueChange={(itemValue: number, itemIndex: number) => setSelectedMonth(itemValue)}
      >
        {months.map((month, index) => (
          <Picker.Item label={month} value={index+1} key={month} />
        ))}
      </Picker>

      

      
    </View>   
    <View style={{ margin: 20 }}>
      <Text>Number of Seats:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
    </View>
   
    
    






      <S.BottomContainer>
        <Button onPress={() => navigation.navigate('Request')}>Search</Button>
      </S.BottomContainer>
    </S.Container>
  );

};



export default SelectDestination;



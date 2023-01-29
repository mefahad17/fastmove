
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Button from '../../components/Button';
import React, { useState } from 'react'

import {Picker} from '@react-native-picker/picker';

import * as S from './styles';

const SelectDestination: React.FC = () => {
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

  return (
    <S.Container>
      <S.TopContainer>
        <S.Timeline>
          <S.Dot />
          <S.Dash />
          <S.Dot secondary = {true}/>
        </S.Timeline>
        <S.FromTo>
          <S.From placeholder="From"></S.From>
          <S.To placeholder="To"></S.To>
        </S.FromTo>
      </S.TopContainer>
      <S.Shadow />
      <View style = {{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <S.Label>Date</S.Label>
      <Picker
        selectedValue={selectedDay}
        style={{ height: 20, width: 100 }}
        onValueChange={(itemValue: number, itemIndex: number) => setSelectedDay(itemValue)}
      >
        {days.map(day => (
          <Picker.Item label={day.toString()} value={day} key={day} />
        ))}
      </Picker>
      <S.Label>Date</S.Label>
      <Picker
        selectedValue={selectedMonth}
        style={{ height: 20, width: 100 }}
        onValueChange={(itemValue: number, itemIndex: number) => setSelectedMonth(itemValue)}
      >
        {months.map((month, index) => (
          <Picker.Item label={month} value={index+1} key={month} />
        ))}
      </Picker>
      <S.Label>Date</S.Label>
      <Picker
        selectedValue={selectedYear}
        style={{ height: 20, width: 100 }}
        onValueChange={(itemValue: number, itemIndex: number) => setSelectedYear(itemValue)}
      >
        {years.map(year => (
          <Picker.Item label={year.toString()} value={year} key={year} />
        ))}
      </Picker>
    </View>     
     
      <S.BottomContainer>
        <Button onPress={() => navigation.navigate('Request')}>Done</Button>
      </S.BottomContainer>
    </S.Container>
  );

};

export default SelectDestination;
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackgroundBase, TextComponent } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayoutAndroid } from 'react-native';
import Header from '../../components/Header';




import { Text, View,TextInput,TouchableOpacity, } from 'react-native';
import Button from '../../screens/complain/button';



import * as S from './styles';
import styled from 'styled-components';
import { Center, Right } from 'components/Header/styles';
interface FeedbackFormProps {
  onSubmit: (feedback: string) => void;
}


const complain: React.FC = () => {
  const navigation = useNavigation();
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [feedback, setFeedback] = useState('');


  const handleSubmit = () => {
    console.log(`Submitting feedback from ${name} (${email}): ${feedback}`);
    // Here you can send the feedback to your server or do something else with it
  };
  interface IProps {
    onPress: () => void;
    title: string; // Add the title prop to the interface
    color?: string;
  }
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <S.Container>    
        <Header title="Complain" boldPosition={1} />
      <S.Inner>
        <S.Label>Name</S.Label>
        <S.Input
          value={name}
          onChangeText={setName}
          onFocus={() => setFocused('name')}
          focused={focused === 'name'}
        />
        <S.Label>Email</S.Label>
        <S.CardInputWrapper focused={focused === 'email'}>
          <S.CardInput
            value={email}
            onChangeText={setemail}
            onFocus={() => setFocused('email')}
            focused={focused === 'email'}
          />
        </S.CardInputWrapper>
        <S.Label>Feedback</S.Label>
        <TextInput
           style={{
            height: 150,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 25,
            paddingTop: 10, // add padding to move text to the top
            color: 'black',
            textAlignVertical: 'top', 
          }}
          multiline
          value={feedback}
          onChangeText={setFeedback}
         
        />
        <View style={{ marginTop: 25 }}>
        <Button onPress={handlePress} />
        </View>
      </S.Inner>
    </S.Container>
  );
};

export default complain;


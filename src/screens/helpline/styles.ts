import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

import { ThemeProps } from '../../theme';


export const Container = styled.View`
  flex: 1;
  align-items: center;
`;


export const Header = styled.View`
padding: 10px;
margin-top: 10%;
padding-bottom: 20px;
  justify-content: flex-end;
  width: 100%;  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 2px;

  border-bottom-color: ${({ theme }) => theme.color.gray};
  `;
  
  export const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  
  `;
  export const BoldText = styled.Text`
  font-weight: bold;
  font-size:25px;
  margin-left: 10px;
  
`;
export const Stack = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 85%;
`;

export const CText = styled.Text`
color: white;
padding: 10px;
font-size:15px;
`;

export const LinkContainer = styled(RectButton)`
    background-color: black;
    padding: 25px;
    width: 300px;
    height: 170px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 10px;
    margin-top: 5%;
    margin-left: 50px;
`;
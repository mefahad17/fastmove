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

export const SmallText = styled.Text`
font-weight: bold;
font-size: 18px;
`;
export const WhereToContainer = styled.View<ThemeProps>`
  justify-content: center;
  width: 90%;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  background: #fff;
  border-radius: 45px;
  padding: 0 23px;
  margin: 10px;
`;

export const WhereToButton = styled(RectButton)`
  justify-content: center;
  background: #fff;
  border-radius: 45px;
`;

export const From = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 10px;
  color: ${({ theme }) => theme.color.primary};
`;

export const ToContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const To = styled.TextInput<ThemeProps>`
width: 100%;
  // font-family: ${({ theme }) => theme.font.regular};
  // font-size: 18px;
  // color: ${({ theme }) => theme.color.primary};
  
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
`;

export const LinkContainer = styled(RectButton)`
    background-color: black;
    padding: 10px;
    width: 150px;
    height: 125px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 10px;
`;
export const footer = styled.Text`
background-color: black;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 71px;
    padding: 30px;
    width: 100%;
    height: 80px;
    
`;

export const Containers = styled.View`
flex-direction: row;
align-items: center;

`;

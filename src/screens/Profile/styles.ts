import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

import { ThemeProps } from '../../theme';


export const Container = styled.View`
  
  
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
  align-items: center;
  
`;
export const Inner = styled.View`
  justify-content: flex-end;
  padding: 40px 10% 5% 10%;
`;
export const Label = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 17px;
  color: ${({ theme }) => theme.color.primary};
`;

export const Input = styled.TextInput<InputProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 28px;
  color: ${({ theme }) => theme.color.primary};
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.color.secondary : theme.color.gray};
  margin-bottom: 20px;
`;
export const CardInputWrapper = styled.View<InputProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.color.secondary : theme.color.gray};
  margin-bottom: 20px;
`;
export const CardInput = styled.TextInput<InputProps>`
  flex: 1;
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
  padding: 8px 0;
`;

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
  
  
  `;
  export const BoldText = styled.Text`
  font-weight: bold;
  font-size:25px;
  margin-left: 10px;
  
`;
export const View = styled.Text`
  width: 100%;
  margin-left: 5px;
  margin-top: 5px;
`;
import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import economy from '../../assets/economy.png';
import luxury from '../../assets/luxury.png';
import family from '../../assets/family.png';

import * as S from './styles';

interface IProps extends RectButtonProperties {
  text: string;
  active?: boolean;
}

const carType = {
  economy,
  luxury,
  family,
};

const CarButton: React.FC<IProps> = ({ text, active, ...props }) => {
  return (
    <S.Container active={active}>
      <S.Button {...props}>
        <Icon name = "bus" size = {32} color = "black"/>
        <S.Title>{text}</S.Title>
      </S.Button>
    </S.Container>
  );
};

export default CarButton;

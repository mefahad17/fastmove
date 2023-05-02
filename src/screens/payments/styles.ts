import styled from 'styled-components/native';

import { ThemeProps } from '../../theme';

interface InputProps extends ThemeProps {
  focused?: boolean;
}

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Inner = styled.View`
  justify-content: flex-end;
  padding: 10px 10% 5% 10%;
  
`;

export const CardImage = styled.Image``;

export const Label = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.color.primary};
  margin-top:40px;
`;

export const Input = styled.TextInput<InputProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.color.secondary : theme.color.gray};
  margin-bottom: 20px;
`;



import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

interface IProps {
  onPress: () => void;
  style?: ViewStyle;
  color?: string;
}

const Button: React.FC<IProps> = ({ onPress, style, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color || '#0a84ff',
        padding: 15,
        borderRadius: 9,
        ...style,
      }}>
      <Text style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' }}>Submit</Text>
    </TouchableOpacity>
  );
};

export default Button;

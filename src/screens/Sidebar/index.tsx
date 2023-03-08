import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  onClose: () => void;
};

const Sidebar: React.FC<Props> = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Home</Text>
      <Text style={styles.item}>Settings</Text>
      <Text style={styles.item} onPress={onClose}>
        Close Menu
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 16,
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Sidebar;

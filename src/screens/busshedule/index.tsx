import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as S from './styles';
import styled from 'styled-components';


type Bus = {
  key: string;
  name: string;
  number: string;
  departureTime: string;
  arrivalTime: string;
  fromCity: string;
  toCity: string;
};

type Section = {
  title: string;
  data: Bus[];
};

const DATA: Section[] = [
  {
    title: 'Economy Buses',
    data: [
      { key: '1', name: 'ABC Express', number: 'A101', departureTime: '10:00 AM', arrivalTime: '2:00 PM', fromCity: 'City A', toCity: 'City D' },
      { key: '2', name: 'XYZ Express', number: 'X202', departureTime: '12:00 PM', arrivalTime: '4:00 PM', fromCity: 'City B', toCity: 'City D' },
      { key: '3', name: 'PQR Express', number: 'P303', departureTime: '2:00 PM', arrivalTime: '6:00 PM', fromCity: 'City C', toCity: 'City D' },
    ],
  },
  {
    title: 'Luxury Buses',
    data: [
      { key: '4', name: 'LMN Local', number: 'L404', departureTime: '8:00 AM', arrivalTime: '10:00 AM', fromCity: 'City A', toCity: 'City B' },
      { key: '5', name: 'EFG Local', number: 'E505', departureTime: '11:00 AM', arrivalTime: '1:00 PM', fromCity: 'City B', toCity: 'City C' },
      { key: '6', name: 'RST Local', number: 'R606', departureTime: '4:00 PM', arrivalTime: '6:00 PM', fromCity: 'City C', toCity: 'City D' },
    ],
  },
  {
    title: 'Family Buses',
    data: [
      { key: '4', name: 'LMN Local', number: 'L404', departureTime: '8:00 AM', arrivalTime: '10:00 AM', fromCity: 'City A', toCity: 'City B' },
      { key: '5', name: 'EFG Local', number: 'E505', departureTime: '11:00 AM', arrivalTime: '1:00 PM', fromCity: 'City B', toCity: 'City C' },
      { key: '6', name: 'RST Local', number: 'R606', departureTime: '4:00 PM', arrivalTime: '6:00 PM', fromCity: 'City C', toCity: 'City D' },
    ],
  },
];

const renderItem = ({ item }: { item: Bus }) => (
  <View style={styles.item}>
    <Text style={styles.busName}>{item.name} ({item.number})</Text>
    <Text style={styles.busCity}>{item.fromCity} - {item.toCity}</Text>
    <Text style={styles.busTime}>{item.departureTime} - {item.arrivalTime}</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
  </View>
);

const renderSectionHeader = ({ section }: { section: Section }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{section.title}</Text>
  </View>
);

export default function BusList() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Bus Schedules</Text>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.key + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      stickySectionHeadersEnabled={true}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight:"bold",
    marginTop:15,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  busName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  busTime: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#0a84ff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  busCity:{

  }
});

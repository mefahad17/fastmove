import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type SeatStatus = 'available' | 'selected' | 'occupied';

interface Seat {
  id: string;
  status: SeatStatus;
}

const seats: Seat[] = [
  { id: 'S1', status: 'available' },
  { id: 'S2', status: 'available' },
  { id: 'S3', status: 'occupied' },
  { id: 'S4', status: 'available' },
  { id: 'S5', status: 'available' },
  { id: 'S6', status: 'available' },
  { id: 'S7', status: 'available' },
  { id: 'S8', status: 'available' },
  { id: 'S9', status: 'available' },
  { id: 'S10', status: 'available' },
  { id: 'S11', status: 'available' },
  { id: 'S12', status: 'available' },
  { id: 'S13', status: 'occupied' },
  { id: 'S14', status: 'available' },
  { id: 'S15', status: 'available' },
  { id: 'S16', status: 'available' },
  { id: 'S17', status: 'available' },
  { id: 'S18', status: 'available' },
  { id: 'S19', status: 'available' },
  { id: 'S20', status: 'available' },
  { id: 'S21', status: 'available' },
  { id: 'S22', status: 'available' },
  { id: 'S23', status: 'occupied' },
  { id: 'S24', status: 'available' },
  { id: 'S25', status: 'available' },
  { id: 'S26', status: 'available' },
  { id: 'S27', status: 'available' },
  { id: 'S28', status: 'available' },
  { id: 'S29', status: 'available' },
  { id: 'S30', status: 'available' },
  { id: 'S31', status: 'available' },
  { id: 'S32', status: 'available' },
  
];
  

const Seat: React.FC<{ seat: Seat; onPress: () => void }> = ({ seat, onPress }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
    onPress();
  };

  let backgroundColor = '#fff';

  switch (seat.status) {
    case 'available':
      backgroundColor = selected ? 'green' : '#0a84ff';
      break;
    case 'selected':
      backgroundColor = 'green';
      break;
    case 'occupied':
      backgroundColor = 'red';
      break;
  }
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSelectSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBookNow = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat!');
    } else {
      // handle booking logic here
    }
  };

  return (
    <TouchableOpacity style={[styles.seat, { backgroundColor }]} onPress={handlePress} disabled={seat.status !== 'available'}>
      <Text style={styles.seatText}>{seat.id}</Text>
    </TouchableOpacity>
  );
};

const SeatsReservation: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSelectSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBookNow = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat!');
    } else {
      // handle booking logic here
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your seats</Text>
      <View style={styles.seatsContainer}>
        <View style={styles.seatsRow}>
          {seats.slice(0, 2).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
          <View style={styles.seatSpacer} />
          {seats.slice(2, 4).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
        </View>
        <View style={styles.seatsRow}>
          {seats.slice(4, 6).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
          <View style={styles.seatSpacer} />
          {seats.slice(6, 8).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
        </View>
        
        <View style={styles.seatsRow}>
          {seats.slice(8, 10).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
          <View style={styles.seatSpacer} />
          {seats.slice(10, 12).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
        </View>
        <View style={styles.seatsRow}>
          {seats.slice(12, 14).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
          <View style={styles.seatSpacer} />
          {seats.slice(14, 16).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
        </View>
        <View style={styles.seatsRow}>
          {seats.slice(16, 18).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
          <View style={styles.seatSpacer} />
          {seats.slice(18, 20).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
        </View>
        <View style={styles.seatsRow}>
          {seats.slice(20, 22).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
          <View style={styles.seatSpacer} />
          {seats.slice(22, 24).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
        </View>
        <View style={styles.seatsRow}>
          {seats.slice(24, 26).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
          <View style={styles.seatSpacer} />
          {seats.slice(26, 28).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
        </View>
        <View style={styles.seatsRow}>
          {seats.slice(28, 30).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
          <View style={styles.seatSpacer} />
          {seats.slice(30, 32).map(seat => (
            <Seat key={seat.id} seat={seat} onPress={() => handleSelectSeat(seat.id)} />
          ))}
        </View>
        
      </View>
      <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  seatsContainer: {
    justifyContent: 'center',
  },
  seatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  seat: {
    width: 80,
    height: 70,
    marginHorizontal: 3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seatSpacer: {
    width: 90,
  },
  seatText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});


export default SeatsReservation;

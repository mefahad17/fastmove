import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './theme';

import Home from './screens/Home';

import Verification from './screens/Verification';
import Login from './screens/Login';
import AddCard from './screens/passengerDetails';
import CurrentLocation from './screens/CurrentLocation';
import SelectDestination from './screens/SelectDestination';
import Request from './screens/Request';
import YourRide from './screens/YourRide';
import AppHome from './screens/AppHome';
import CreateAccount from './screens/Createaccount';
import Profile from './screens/Profile';
import Sidebar from './screens/Sidebar';
import busshedules from './screens/busshedule';
import seatbooking from './screens/seatbooking';
import bookinghistory from './screens/bookinghistory';
import notifications from './screens/notifications';
import pendingtickets from './screens/pendingtickets';
import bookedtickets from './screens/bookedticket';
import complain from './screens/complain';
import helpline from './screens/helpline';
import buscancelled from './screens/buscancelled';
import AboutUsScreen from './screens/AboutUsScreen';
import busavailbility from './screens/busavailbility';
import passengerDetails from './screens/passengerDetails';
import payments from './screens/payments';
import Location from './screens/Location';


const Stack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="AppHome" component={AppHome} />
          <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Sidebar" component={Sidebar} />
          <Stack.Screen name="busshedules" component={busshedules} />
          <Stack.Screen name="seatbooking" component={seatbooking} />
          <Stack.Screen name="bookinghistory" component={bookinghistory} />
          <Stack.Screen name="notifications" component={notifications} />
          <Stack.Screen name="pendingtickets" component={pendingtickets} />
          <Stack.Screen name="bookedtickets" component={bookedtickets} />
          <Stack.Screen name="complain" component={complain} />
          <Stack.Screen name="helpline" component={helpline} />
          <Stack.Screen name="buscancelled" component={buscancelled} />
          <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
          <Stack.Screen name="busavailbility" component={busavailbility} />
          <Stack.Screen name="passengerDetails" component={passengerDetails} />
          <Stack.Screen name="payments" component={payments} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen
            name="SelectDestination"
            component={SelectDestination}
          />
          <Stack.Screen name="Request" component={Request} />
          <Stack.Screen name="YourRide" component={YourRide} />
          
          </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    
  );
};

export default Index;

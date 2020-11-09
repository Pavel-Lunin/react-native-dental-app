import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { HomeScreen, PatientScreen, AddPatientScreen, AddAppointmentScreen } from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddAppointment">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Журнал приёмов',
            headerTintColor: '#2A86FF',
            headerStyle: {
              elevation: 0.8,
              shadowOpacity: 0.8,
            },
          }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{
            title: 'Карта пациента',
            headerTintColor: '#2A86FF',
            headerStyle: {
              elevation: 2,
              shadowOpacity: 1,
            },
          }}
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatientScreen}
          options={{
            title: 'Добавить пациента',
            headerTintColor: '#2A86FF',
            headerStyle: {
              elevation: 0.8,
              shadowOpacity: 0.8,
            },
          }}
        />
        <Stack.Screen
          name="AddAppointment"
          component={AddAppointmentScreen}
          options={{
            title: 'Добавить приём',
            headerTintColor: '#2A86FF',
            headerStyle: {
              elevation: 0.8,
              shadowOpacity: 0.8,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import {
  HomeScreen,
  PatientScreen,
  AddPatientScreen,
  AddAppointmentScreen,
  PatientsScreen,
} from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            title: 'Журнал приёмов',
            headerTintColor: '#2A86FF',
            headerRight: (props) => (
              <View>
                <TouchableOpacity
                  onPress={navigation.navigate.bind(this, 'Patients')}
                  style={{ marginRight: 25 }}>
                  <Ionicons name="md-people" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: {
              elevation: 0.8,
              shadowOpacity: 0.8,
            },
          })}
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
        <Stack.Screen
          name="Patients"
          component={PatientsScreen}
          options={{
            title: 'Пациенты',
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

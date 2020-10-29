import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { HomeScreen, PatientScreen } from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Пациенты',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

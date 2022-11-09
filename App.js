import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cau_3 from './Screen/Cau_3';
// import Cau_2 from './Screen/Cau_2';
// import Cau_1 from './Screen/Cau_1';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Cau_3} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
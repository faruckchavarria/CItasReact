import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './components/Inicio';
import Formulario from './components/Formulario';


const Stack = createStackNavigator();


const App = () => {
  return (
    <>
      <NavigationContainer>

        <Stack.Navigator
          //barra de inicio anterior
          initialRouteName="Inicio"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#00BCD4'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}

        >



          <Stack.Screen

            name="Inicio"
            options={{
              title: 'Administrador de Citas'
            }}

            component={Inicio}

          />
          {/* <Stack.Screen

            name="Servicios"
            component={Servicios}

          /> */}
          <Stack.Screen

            name="Formulario"
            component={Formulario}

          />

        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
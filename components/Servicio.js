import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Servicios = ({ navigation,route }) => {

    const { idCliente, total } = route.params;
    const regresar = () => {

        navigation.goBack();
    }
    return (

        <View>
            <Text>El total es:{total}</Text>
            <Button
                title="Regresar"
                onPress={() => regresar()}
            />
        </View>

    );
}

export default Servicios;
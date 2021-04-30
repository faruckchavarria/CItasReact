import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableHighlight } from "react-native";
import Cita from './Cita';

const Inicio = ({ navigation }) => {
    const [mostrarForm, guardarMostrarForm] = useState(false);
    const [citas, setCitas] = useState([
        { id: "1", paciente: "Jagger", propietario: "Yesser", sintomas: "No come" },
        { id: "2", paciente: "Firulais", propietario: "James", sintomas: "No toma agua" },
        { id: "3", paciente: "Micifus", propietario: "Ferly", sintomas: "No saluda" },
        { id: "4", paciente: "Don gato", propietario: "Beatriz", sintomas: "No es amigable" }
    ]);
    const info = {
        citas,
        setCitas,

    }
    const abrirServicios = () => {
        navigation.navigate('Servicios', info)
    }
    const mostrar = () => {
        navigation.navigate('Formulario', info)
    }
    const eliminarPaciente = id => {
        const citasFiltradas = citas.filter(cita => cita.id !== id);
        setCitas(citasFiltradas);
        
    }

    return (
        <View>

            <TouchableHighlight style={styles.btneliminar} onPress={() => mostrar()}>
                <Text style={styles.textoeliminar}>Crear Citas</Text>
            </TouchableHighlight>


            <View>
            <Text style={styles.encabezado}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>
            </View>


            <FlatList

                data={citas}
                renderItem={({ item }) => <Cita cita={item} eliminarPaciente={eliminarPaciente} />}
                keyExtractor={cita => cita.id}
            />




        </View>
    );
}


const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#393e46',
        flex: 1,
    },
    encabezado: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: Platform.OS === 'ios' ? 40 : 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    contenido: {
        flex: 1,
        marginHorizontal: '2.5%'
    },

    btMostrarForm: {
        backgroundColor: '#393e46',
        padding: 10,
        marginVertical: 10
    },
    textMostrarForm: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btneliminar: {
        padding: 10,
        backgroundColor: '#00BCD4',
        marginVertical: 10
    },
    textoeliminar: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});
export default Inicio;
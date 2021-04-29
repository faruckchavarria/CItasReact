import React, { useState, useEffect } from 'react';
import Cita from './Cita';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';


const Inicio = ({ navigation }) => {


    const abrirFormulario = () => {
        navigation.navigate('Formulario')

    }   

    const [citas, setCitas] = useState([
        { id: "1", paciente: "Jagger", propietario: "Yesser", sintomas: "No come" },
        { id: "2", paciente: "Firulais", propietario: "James", sintomas: "No toma agua" },
        { id: "3", paciente: "Micifus", propietario: "Ferly", sintomas: "No saluda" },
        { id: "4", paciente: "Don gato", propietario: "Beatriz", sintomas: "No es amigable" }
    ]);

    const eliminarPaciente = id => {
        const citasFiltradas = citas.filter(cita => cita.id !== id);
        setCitas(citasFiltradas);
        //guardarCitasStorage(JSON.stringify(citasFiltradas));
    }

    //mostrar u ocultar el formulario
    const mostrarFormulario = () => {
        guardarMostrarForm(!mostrarForm);
    }

    //cerrar el teclado
    const cerrarTeclado = () => {
        Keyboard.dismiss();
    }


    // Comienzo de el return
    return (

        <View>

            <View>
                <Button
                    title="Crear Nueva Cita"
                    onPress={() => abrirFormulario()}
                />

            </View>

            <Text style={styles.encabezado}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>
            <FlatList
                //style={styles.listado}
                data={citas}
                renderItem={({ item }) => <Cita cita={item} eliminarPaciente={eliminarPaciente} />}
                keyExtractor={cita => cita.id}

            />

        </View>


    );

};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#455A64',
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
    listado: {
        flex: 1
    },
    btMostrarForm: {
        backgroundColor: '#FF5252',
        padding: 10,
        marginVertical: 10
    },
    textMostrarForm: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Inicio;
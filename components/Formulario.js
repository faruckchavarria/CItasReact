import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({ citas, setCitas, guardarMostrarForm }) => {
    const [fecha, guardarFecha] = useState('');
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [sintomas, guardarSintomas] = useState('');


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    const crearNuevaCita = () => {
        if (paciente.trim() === '' ||
            propietario.trim() === '' ||
            telefono.trim() === '' ||
            fecha.trim() === '' ||
            sintomas.trim() === ''
        ) {
            mostrarAlert();
            return;
        }
        //crear una nueva cita
        const cita = { paciente, propietario, telefono, fecha, sintomas };

        cita.id = shortid.generate();

        //console.log(cita);

        //agregar nueva cita al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        //guardarCitasStorage(JSON.stringify(citasNuevo));

        //ocultar formulario
        guardarMostrarForm(false);

    }

    const mostrarAlert = () => {
        Alert.alert(
            'Error',
            'Los campos son obligatorios',
            [{
                text: 'OK'
            }]
        );
    }
    return (
        <ScrollView>
            <View style={styles.formulario}>
                <Text style={styles.label}>Paciente</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarPaciente(texto)}

                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Propietario</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarPropietario(texto)}

                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Telefono</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => guardarTelefono(texto)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Mostrar fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <Text>{fecha}</Text>
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Sintomas</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarSintomas(texto)}
                />
            </View>
            <View style={styles.formulario}>
                <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btneliminar}>
                    <Text style={styles.textoeliminar}>Crear nueva cita</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212121'
    },
    input: {
        marginTop: 10,
        height: 50,
        color: '#212121',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btneliminar: {
        padding: 10,
        backgroundColor: '#FF5722',
        marginVertical: 10
    },
    textoeliminar: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    }
});

export default Formulario;
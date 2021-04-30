import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Cita = ({ cita, eliminarPaciente }) => {
    // funcion remover una cita
    const removerCita = id => {
        console.log('eliminando', id);
        eliminarPaciente(id);
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.texto}>{cita.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.texto}>{cita.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas:</Text>
                <Text style={styles.texto}>{cita.sintomas}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => removerCita(cita.id)} style={styles.btneliminar}>
                    <Text style={styles.textoeliminar}>eliminar</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        padding: 10
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212121'
    },
    texto: {
        fontSize: 18,
        color: '#757575'
    },
    btneliminar: {
        padding: 10,
        backgroundColor: '#393e46',
        marginVertical: 10
    },
    textoeliminar: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    }
});

export default Cita;
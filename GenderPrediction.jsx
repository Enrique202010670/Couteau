import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const GenderPrediction = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      const data = response.data;

      if (data.gender === 'male') {
        setGender('Masculino');
      } else if (data.gender === 'female') {
        setGender('Femenino');
      } else {
        setGender('Desconocido');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escriba un nombre"
        onChangeText={(value) => setName(value)}
      />
      <TouchableOpacity style={styles.button} onPress={predictGender}>
        <Text style={styles.buttonText}>Predecir género</Text>
      </TouchableOpacity>
      <Text style={[styles.genderText, gender === 'Masculino' && styles.maleText, gender === 'Femenino' && styles.femaleText]}>
        {gender}
      </Text>
      {gender === 'Masculino' && (
        <View style={styles.male}></View>
      )}
      {gender === 'Femenino' && (
        <View style={styles.female}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    width: 250,
    textAlign: 'center',
  },
  genderText: {
    fontSize: 24,
    textAlign: 'center',
  },
  maleText: {
    color: 'lightblue',
  },
  femaleText: {
    color: 'pink',
  },
  male: {
    backgroundColor: 'lightblue',
    height: 50,
    width: '100%',
    marginTop: 10,
  },
  female: {
    backgroundColor: 'pink',
    height: 50,
    width: '100%',
    marginTop: 10,
  },
});

export default GenderPrediction;

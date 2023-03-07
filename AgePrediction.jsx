import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const AgePrediction = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [image, setImage] = useState('');

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const data = response.data;

      setAge(data.age);

      if (data.age <= 30) {
        setAgeGroup('Joven');
        setImage(require('./assets/young.png'));
      } else if (data.age <= 60) {
        setAgeGroup('Adulto');
        setImage(require('./assets/adult.png'));
      } else {
        setAgeGroup('Anciano');
        setImage(require('./assets/old.png'));
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
      <Text style={styles.button} onPress={predictAge}>
        Predecir edad
      </Text>
      {ageGroup !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.ageText}>{age}</Text>
          <Text style={styles.ageGroupText}>{ageGroup}</Text>
          <Image source={image} style={styles.image} />
        </View>
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
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  resultContainer: {
    alignItems: 'center',
  },
  ageText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ageGroupText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default AgePrediction;

import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, Linking } from 'react-native';
import axios from 'axios';

const UniversityList = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const searchUniversities = async () => {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = response.data;

      setUniversities(data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderUniversity = ({ item }) => {
    return (
      <View style={styles.universityContainer}>
        <Text style={styles.universityName}>{item.name}</Text>
        <Text style={styles.universityDomain}>{item.domains[0]}</Text>
        <Text
          style={styles.universityLink}
          onPress={() => Linking.openURL(item.web_pages[0])}
        >
          {item.web_pages[0]}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escriba el nombre de un país en inglés"
        onChangeText={(value) => setCountry(value)}
      />
      <Text style={styles.button} onPress={searchUniversities}>
        Buscar universidades
      </Text>
      {universities.length > 0 && (
        <FlatList
          data={universities}
          renderItem={renderUniversity}
          keyExtractor={(item) => item.alpha_two_code}
        />
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
  universityContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  universityName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  universityDomain: {
    fontSize: 14,
    marginBottom: 5,
  },
  universityLink: {
    fontSize: 14,
    color: 'blue',
  },
});

export default UniversityList;

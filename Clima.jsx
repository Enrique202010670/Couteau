import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const Clima = () => {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=18.5001200&lon=-69.9885700&appid=79e6c0db47325019e06e53c37922655f"
      )
      .then((response) => {
        setClima(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!clima) {
    return (
      <View style={styles.container}>
        <Text>Cargando clima...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Clima en {clima.name}, {clima.sys.country}:
      </Text>
      <Text style={styles.texto}>Temperatura: {clima.main.temp}°K</Text>
      <Text style={styles.texto}>
        Descripción: {clima.weather[0].description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default Clima;

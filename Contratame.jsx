import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Contratame = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("./assets/Jose.jpg")} />
			<Text style={styles.subtitle}>Jose Enrique Ogando Perez</Text>
			<Text style={styles.subtitle}>Quieres contrartarme, aqui te dejo mi correo.</Text>
			<Text style={styles.subtitle}>Enriquemk51@gmail.com</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 16,
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: "contain",
		marginBottom: 16,
		borderRadius: "100%"
	},
	subtitle: {
		fontSize: 24,
		fontWeight: "bold",
	},
});

export default Contratame;

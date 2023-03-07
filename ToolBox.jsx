import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ToolBox = () => {
	return (
		<View style={styles.container}>
			<Image source={require("./assets/toolbox.jpg")} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#dec7e1",
	},
	image: {
		width: "200px",
		height: "100%",
		resizeMode: "contain",
	},
});

export default ToolBox;

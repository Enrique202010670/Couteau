import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

import ToolBox from "./ToolBox.jsx";
import GenderPrediction from "./GenderPrediction.jsx";
import AgePrediction from "./AgePrediction.jsx";
import UniversityList from "./UniversityList.jsx";
import Clima from "./Clima.jsx";
import Contratame from "./Contratame.jsx";

const App = () => {
	const [activeScreen, setActiveScreen] = useState("Portada");

	const handleScreenChange = (screenName) => {
		setActiveScreen(screenName);
	};

	const renderScreen = () => {
		switch (activeScreen) {
			case "ToolBox":
				return <ToolBox />;
			case "GenderPrediction":
				return <GenderPrediction />;
			case "AgePrediction":
				return <AgePrediction />;
			case "UniversityList":
				return <UniversityList />;
			case "Clima":
				return <Clima />;
			case "Contratame":
				return <Contratame />;
			default:
				return <ToolBox />;
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			{renderScreen()}
			<Button title="ToolBox" onPress={() => handleScreenChange("ToolBox")} />
			<Button title="Gender Prediction" onPress={() => handleScreenChange("GenderPrediction")} />
			<Button title="Age Prediction" onPress={() => handleScreenChange("AgePrediction")} />
			<Button
				title="University List"
				onPress={() => handleScreenChange("UniversityList")}
			/>
			<Button title="Clima" onPress={() => handleScreenChange("Clima")} />
			<Button
				title="Contratame"
				onPress={() => handleScreenChange("Contratame")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bottomNavigationBar: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
		gridGap: 40,
		height: 64,
		backgroundColor: "#F5F5F5",
		paddingHorizontal: 16,
		borderTopWidth: 1,
		borderTopColor: "#EFEFEF",
	},
	button: {
		flex: 1,
		marginHorizontal: 10,
		width: 50,
	},
});

export default App;

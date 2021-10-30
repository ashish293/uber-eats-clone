import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";

const Home = () => {
	return (
		<SafeAreaView style={{ paddingTop: 50, backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "white" }}>
				<HeaderTabs />
			</View>
		</SafeAreaView>
	);
};

export default Home;

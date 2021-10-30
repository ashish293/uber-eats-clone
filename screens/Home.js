import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import Searchbar from "../components/Searchbar";

const Home = () => {
	return (
		<SafeAreaView style={{ paddingTop: 50, backgroundColor: "#eee", flex: 1 }}>
			<View style={{ padding: 10, backgroundColor: "white" }}>
				<HeaderTabs />
				<Searchbar />
			</View>
			<Categories />
		</SafeAreaView>
	);
};

export default Home;

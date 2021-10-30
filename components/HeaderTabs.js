import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "center",
	},
	touchable: {
		backgroundColor: "black",
		padding: 4,
		width: 80,
		alignItems: "center",
		margin: 4,
		borderRadius: 15,
	},
});

const HeaderTabs = () => {
	const [activeTab, setActiveTab] = useState("Delivery");
	return (
		<View style={styles.header}>
			<Heaaderbutton
				text="Delivery"
				btnColor="black"
				txtColor="white"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<Heaaderbutton
				text="Pickup"
				btnColor="white"
				txtColor="black"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</View>
	);
};

const Heaaderbutton = (props) => (
	<View>
		<TouchableOpacity
			style={{
				backgroundColor: props.activeTab === props.text ? "black" : "white",
				padding: 4,
				width: 80,
				alignItems: "center",
				margin: 4,
				borderRadius: 15,
			}}
			onPress={() => props.setActiveTab(props.text)}
		>
			<Text style={{ fontSize: 18, color: props.activeTab === props.text ? "white" : "black" }}>
				{props.text}
			</Text>
		</TouchableOpacity>
	</View>
);

export default HeaderTabs;

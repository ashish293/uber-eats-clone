import React from "react";
import { View, Text, Touchable, Image, ScrollView } from "react-native";

const items = [
	{
		image: require("../assets/images/shopping-bag.png"),
		text: "Pick-up",
	},
	{
		image: require("../assets/images/soft-drink.png"),
		text: "Soft Drinks",
	},
	{
		image: require("../assets/images/bread.png"),
		text: "Bakery Items",
	},
	{
		image: require("../assets/images/fast-food.png"),
		text: "Fast food",
	},
	{
		image: require("../assets/images/laddu.png"),
		text: "Sweets",
	},
	{
		image: require("../assets/images/laddu.png"),
		text: "Hello",
	},
];

const Categories = () => {
	return (
		<View style={{ marginTop: 10, backgroundColor: "white", padding: 20 }}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{items.map((elem, index) => {
					return (
						<View key={index} style={{ alignItems: "center", marginHorizontal: 10 }}>
							<Image source={elem.image} style={{ height: 40, width: 40 }} />
							<Text>{elem.text}</Text>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default Categories;

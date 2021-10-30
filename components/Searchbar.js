import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
const Searchbar = () => {
	return (
		<View style={{ marginTop: 10, flexDirection: "row" }}>
			<GooglePlacesAutocomplete
				placeholder="Search"
				styles={{
					textInput: {
						backgroundColor: "#eee",
						borderRadius: 20,
						fontWeight: "700",
						fontSize: 18,
						marginTop: 10,
					},
					textInputContainer: {
						backgroundColor: "#eee",
						borderRadius: 50,
						flexDirection: "row",
						alignItems: "center",
					},
				}}
				renderLeftButton={() => (
					<View style={{ marginLeft: 10 }}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View
						style={{
							flexDirection: "row",
							marginRight: 20,
							padding: 4,
							borderRadius: 15,
						}}
					>
						<Ionicons name="search" size={24} />
					</View>
				)}
			/>
		</View>
	);
};

export default Searchbar;

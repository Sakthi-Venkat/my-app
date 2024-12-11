import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Install this using npm install @expo/vector-icons if not already installed

const categories = [
  { id: 1, name: "Neurologist", icon: require("./assets/neurologist.png") },
  { id: 2, name: "Cardiologist", icon: require("./assets/Cardiologist.png") },
  { id: 3, name: "Dermatologist", icon: require("./assets/Derma.png") },
  { id: 4, name: "Dentist", icon: require("./assets/Dentist.png") },
];

const App = () => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  const handleSearchPress = () => {
    console.log("Search button pressed");
  };

  return (
    <View style={styles.container}>
      {/* Back and Search Icons */}
      <View style={styles.iconRow}>
        <TouchableWithoutFeedback onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="#333" style={styles.iconButton} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleSearchPress}>
          <Ionicons name="search" size={24} color="#333" style={styles.iconButton} />
        </TouchableWithoutFeedback>
      </View>

      {/* Categories Heading */}
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
      </View>

      {/* Categories Grid */}
      <FlatList
        data={Array(4).fill(categories).flat()} // Simulating the grid
        numColumns={4}
        keyExtractor={(item, index) => `${item.id}-${index}`} // Corrected keyExtractor
        renderItem={renderCategory}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  iconButton: {
    padding: 8,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 80,
    height: 100,
    alignItems: "center",
    margin: 8,
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4CAF50",
    textAlign: "center",
  },
});

export default App;
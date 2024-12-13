import React from 'react'; 
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// Importing vector icons library
import Icon from 'react-native-vector-icons/MaterialIcons';

const Insuranceplan = () => {
  // Handler functions for Back and Search icon presses
  const handleBackPress = () => {
    console.log('Back button pressed');
    // Add your back navigation logic here
  };

  const handleSearchPress = () => {
    console.log('Search button pressed');
    // Add your search logic here
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.iconButton}>
          {/* Back icon on the left */}
          <Icon name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Insurance Plan</Text>
          <Text style={styles.headerSubtitle}>Select Hospital according to your Insurance Plan</Text>
        </View>

        <TouchableOpacity onPress={handleSearchPress} style={styles.iconButton}>
          {/* Search icon on the right */}
          <Icon name="search" size={30} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Hospital List */}
      <ScrollView style={styles.listContainer}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.hospitalImage} source={require("./assets/img1.png")}/>
            <View style={styles.infoContainer}>
              <Text style={styles.hospitalName}>ABC Hospital</Text>
              <Text style={styles.hospitalSpecialty}>Emergency/Surgery/Doctors</Text>
              <Text style={styles.hospitalExperience}>30+ Years of experience in Cardiovascular surgery</Text>
              <Text style={styles.rating}>⭐ 150+ Reviews</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.directionsButton}>
                  <Text style={styles.buttonText}>Get Directions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactButton}>
                  <Text style={styles.buttonText}>Contact the place</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image style={styles.insuranceImage} source={require("./assets/pic1.png")}/>
              <Image style={styles.insuranceImage} source={require("./assets/pic2.png")} />
              <TouchableOpacity style={styles.bookNowButton}>
                <Text style={styles.bookNowText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navbar with icons */}
      <View style={styles.navbar}>
        {['Home', 'Bookings', 'Maps', 'Chat', 'Profile'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            {/* Use correct MaterialIcons for Navbar */}
            <Icon 
              name={item === 'Home' ? 'home' : 
                    item === 'Bookings' ? 'book' : 
                    item === 'Maps' ? 'map' : 
                    item === 'Chat' ? 'chat' : 
                    item === 'Profile' ? 'account-circle' : ''} 
              size={30} 
              color="#333" 
            />
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    flexDirection: 'row', 
    padding: 20, 
    backgroundColor: '#f4f4f4', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  headerSubtitle: { fontSize: 14, color: '#666', marginTop: 5 },
  iconButton: {
    padding: 5,
  },
  filterButtons: { flexDirection: 'row', marginTop: 10 },
  filterButton: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  listContainer: { flex: 1, padding: 10 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  hospitalImage: { width: 80, height: 80, borderRadius: 40 },
  infoContainer: { flex: 1, marginHorizontal: 10 },
  hospitalName: { fontSize: 16, fontWeight: 'bold' },
  hospitalSpecialty: { fontSize: 14, color: '#666' },
  hospitalExperience: { fontSize: 12, color: '#666', marginTop: 5 },
  rating: { fontSize: 12, color: '#999', marginTop: 5 },
  buttonsContainer: { flexDirection: 'row', marginTop: 10 },
  directionsButton: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  contactButton: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  insuranceImage: { width: 60, height: 30, marginVertical: 5 },
  bookNowButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookNowText: { color: '#fff', fontWeight: 'bold' },
  navbar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f4f4f4',
    paddingVertical: 10,
  },
  navItem: { flex: 1, alignItems: 'center' },
  navText: { fontSize: 12, marginTop: 5 },
});

export default Insuranceplan;

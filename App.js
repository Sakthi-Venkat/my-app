import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  // State to hold map region and error message
  const [mapRegion, setMapRegion] = useState({
    latitude: 13.067439,
    longitude: 80.237617,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const userLocation = async () => {
    // Request location permission
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    // Get current location
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    // Update map region with current location
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    console.log(location.coords.latitude, location.coords.longitude); // Corrected
  };

  // Run userLocation once on component mount
  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      {/* Show error message if permission is denied */}
      {errorMsg ? <Text>{errorMsg}</Text> : null}

      {/* MapView with controlled region */}
      <MapView
        style={styles.map}
        region={mapRegion} // Controlled region
      >
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>

      {/* Button to get location */}
      <Button title="Get Location" onPress={userLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align the content to the bottom
    alignItems: 'center', // Center the content horizontally
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

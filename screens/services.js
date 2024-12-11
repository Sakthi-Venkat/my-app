import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const services = [
  {
    id: '1',
    title: 'Locate & Book Cabs',
    image: 'https://i.imgur.com/c9WVtb8.png',
    icon: 'directions-car',
    rating: 5,
  },
  {
    id: '2',
    title: 'Book An Appointment',
    image: 'https://i.imgur.com/8oHwDwY.png',
    icon: 'medical-services',
    rating: 4,
  },
  {
    id: '3',
    title: 'Find Doctors',
    image: 'https://i.imgur.com/c9WVtb8.png',
    icon: 'person-search',
    rating: 4.5,
  },
  {
    id: '4',
    title: 'Order Medicines',
    image: 'https://i.imgur.com/8oHwDwY.png',
    icon: 'local-pharmacy',
    rating: 4.2,
  },
];

const ServiceCard = ({ service }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {/* Like Button without background */}
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => setLiked(!liked)}
        >
          <Icon
            name={liked ? 'favorite' : 'favorite-border'}
            size={32} // Increased the size of the icon
            color="#FF0000" // Red color
          />
        </TouchableOpacity>

        {/* Image */}
        <Image source={{ uri: service.image }} style={styles.image} />
      </View>

      {/* Ratings (Below the Image, Left-Aligned) */}
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="star"
            size={18}
            color={index < Math.floor(service.rating) ? '#FFD700' : '#E0E0E0'}
          />
        ))}
      </View>

      {/* Content */}
      <View style={styles.cardContent}>
        <Text style={styles.title}>{service.title}</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name={service.icon} size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header: Back Button and Search Icon */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={32} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.header}>Services</Text>

      {/* Service List */}
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceCard service={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  searchIcon: {
    padding: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10, // Positioned on the right side
    padding: 6,
    elevation: 3,
    zIndex: 1, // Ensure that the like button stays on top of the image
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 8,
    paddingLeft: 16, // Positioned to the left side
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton: {
    backgroundColor: '#4CAF50', // Green color matching your design
    padding: 8,
    borderRadius: 16,
  },
});

export default ServicesScreen;
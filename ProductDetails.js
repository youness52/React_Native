import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const [selectedThumbnail, setSelectedThumbnail] = useState(product.thumbnail);

  const handleThumbnailPress = (imageUri) => {
    setSelectedThumbnail(imageUri);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: selectedThumbnail }} style={styles.thumbnail} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>${product.price.toFixed(2)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Discount:</Text>
          <Text style={styles.value}>{product.discountPercentage}%</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.value}>{product.rating}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Stock:</Text>
          <Text style={styles.value}>{product.stock}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Brand:</Text>
          <Text style={styles.value}>{product.brand}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.value}>{product.category}</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Other Images:</Text>
      <ScrollView horizontal={true} style={styles.imagesContainer}>
        {product.images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleThumbnailPress(image)}>
            <Image source={{ uri: image }} style={styles.otherImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    //width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  otherImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 5,
  },
});

export default ProductDetails;

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity ,Button} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handlePress = (product) => {
    navigation.navigate('ProductDetails', { product });

 // alert("Pressed product:" + product.title);
  // Handle product press action here, e.g., navigate to product details screen
};

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
        <Button title='Show post' onPress={()=>{navigation.navigate('Gestdata')}}/>
      {products.map(product => (
        <TouchableOpacity key={product.id} style={styles.card} onPress={() => handlePress(product)}>
          <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ProductsList;
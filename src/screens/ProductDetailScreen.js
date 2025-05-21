import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CartContext from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const { dispatch } = useContext(CartContext);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    console.log('Added to cart:', product.title);
    navigation.navigate('Cart'); 
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { height: 200, resizeMode: 'contain', marginBottom: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 16, marginBottom: 8 },
  description: { fontSize: 14, marginBottom: 8 },
  rating: { fontSize: 14, marginBottom: 16 },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

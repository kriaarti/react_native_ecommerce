import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import CartContext from '../context/CartContext';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const { cart, dispatch } = useContext(CartContext);
  const navigation = useNavigation();

  const cartItemCount = cart.items.length;
  console.log(cartItemCount,'cartItemCount')

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    console.log('Added to cart:', product.title);
  };

useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
        <View style={styles.iconContainer}>
          <Icon name="shopping-cart" size={28} color="#000" />
          {cartItemCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItemCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    ),
  });
}, [navigation, cartItemCount]);



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
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
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
iconContainer: {
  position: 'relative',
  width: 30,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
},

badge: {
  position: 'absolute',
  top: -4,
  right: -4,
  backgroundColor: 'red',
  borderRadius: 10,
  height: 18,
  minWidth: 18,
  paddingHorizontal: 4,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
},

badgeText: {
  color: '#fff',
  fontSize: 10,
  fontWeight: 'bold',
},

});

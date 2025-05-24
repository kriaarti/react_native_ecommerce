import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text numberOfLines={1}>{item.title}</Text>
      <Text>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

// const styles = StyleSheet.create({
//   container: { padding: 10 },
//   card: {
//     flex: 1,
//     margin: 8,
//     padding: 10,
//     backgroundColor: '#eee',
//     borderRadius: 8,
//   },
//   image: { height: 100, resizeMode: 'contain' },
// });

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff', // Full white background for the screen
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Android shadow
    elevation: 3,
  },
  image: {
    height: 100,
    resizeMode: 'contain',
  },
});


import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function CartItem({ item, onRemove, onQuantityChange }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={item.quantity.toString()}
          onChangeText={val => onQuantityChange(item.id, parseInt(val) || 1)}
        />
        <Button title="Remove" onPress={() => onRemove(item)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  price: {
    color: '#444',
  },
  input: {
    borderWidth: 1,
    width: 50,
    padding: 5,
    textAlign: 'center',
    marginVertical: 5,
  },
});

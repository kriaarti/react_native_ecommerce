import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CartItem({ item, onQuantityChange, onRemove }) {
  const increase = () => onQuantityChange(item.id, item.quantity + 1);
  const decrease = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };
console.log('Item name:', item);
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        <View style={styles.controls}>
          <TouchableOpacity onPress={decrease} style={styles.button}>
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={increase} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onRemove(item)} style={styles.removeButton}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    gap: 12,
    alignItems: 'flex-start',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
 name: {
  fontSize: 16,
  fontWeight: '600',
  color: '#000', // Ensure visible text color
  marginBottom: 4,
},

  price: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 4,
  },
  removeButton: {
    marginLeft: 12,
  },
  removeText: {
    color: 'red',
  },
});

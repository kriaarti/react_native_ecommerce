import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import CartContext from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function CartScreen() {
  const { cart, dispatch } = useContext(CartContext);

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      {cart.items.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart.items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            )}
          />
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' }, // White background
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  empty: { textAlign: 'center', marginTop: 50, fontSize: 16 },
});

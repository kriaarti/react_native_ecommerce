import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving data to AsyncStorage:', error);
  }
};

export const getData = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  } catch (error) {
    console.error('Error reading data from AsyncStorage:', error);
    return null;
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from AsyncStorage:', error);
  }
};

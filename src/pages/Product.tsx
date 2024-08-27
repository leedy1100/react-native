import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'Product'>;

const windowWidth = Dimensions.get('window').width;

const Product = ({ route }: Props) => {
  const { name, price } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
      <View style={styles.container}>
        <Text style={styles.buttonText}>name: {name}</Text>
        <Text style={styles.buttonText}>price: {price}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: windowWidth * 0.5,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'gray',
    fontSize: 16,
  },
});

export default Product;

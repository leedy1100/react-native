import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import GenderPicker from '../components/GenderPicker';

const windowWidth = Dimensions.get('window').width;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Profile', {
                userId: 1,
                name: 'doo',
              })
            }>
            <Text style={styles.buttonText}>Go to Profile!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Product', {
                name: 'apple',
                price: 4870,
              })
            }>
            <Text style={styles.buttonText}>Go to Product</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('WebScreen', {
                url: 'https://reactnative.dev/',
              })
            }>
            <Text style={styles.buttonText}>Go to React Native</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('WebScreen', {
                url: 'https://www.naver.com/',
              })
            }>
            <Text style={styles.buttonText}>Go to Naver</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('WebScreen', {
                url: 'https://www.google.com/',
              })
            }>
            <Text style={styles.buttonText}>Go to Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('WebScreen', {
                url: 'https://letthinggo.com/product/item',
              })
            }>
            <Text style={styles.buttonText}>Go to Letthinggo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('WebScreen', {
                url: 'https://dev.evix-dct.com',
              })
            }>
            <Text style={styles.buttonText}>Go to evix-dct</Text>
          </TouchableOpacity>
        </View>
        <GenderPicker />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    width: windowWidth * 0.5,
    backgroundColor: '#94d82d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;

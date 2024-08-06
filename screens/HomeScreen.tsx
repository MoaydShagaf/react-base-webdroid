import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { HomeScreenProps } from '../types'; // For mobile navigation

// Conditional import for web navigation
let useNavigate: any;
if (Platform.OS === 'web') {
  useNavigate = require('react-router-dom').useNavigate;
}

const HomeScreen: React.FC<HomeScreenProps | {}> = (props) => {
  const navigate = Platform.OS === 'web' ? useNavigate() : null; // For web navigation

  const handleNavigation = () => {
    if (Platform.OS === 'web') {
      navigate('/login'); // Navigate using React Router for web
    } else {
      (props as HomeScreenProps).navigation.navigate('Login'); // Navigate using React Navigation for mobile
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>شن الجو</Text>
      <Button title="Go to Login" onPress={handleNavigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

});

export default HomeScreen;

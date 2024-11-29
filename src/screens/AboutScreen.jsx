import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Incredible Todo List App</Text>
        <Pressable onPress={() => setShowEasterEgg(!showEasterEgg)}>
          <Text style={styles.name}>Created by: Your Name</Text>
        </Pressable>
        <Text style={styles.date}>Date: {currentDate}</Text>
        {showEasterEgg && (
          <Text style={styles.easterEgg}>🎉 You found the Easter egg! 🎉</Text>
        )}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  easterEgg: {
    marginTop: 20,
    fontSize: 20,
    color: '#FF69B4',
  },
});

export default AboutScreen;

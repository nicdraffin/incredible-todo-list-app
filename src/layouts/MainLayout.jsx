import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    {/* Add your footer content here */}
  </View>
);

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
  },
});

export default MainLayout;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Background Bubbles */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      {/* Logo Row */}
      <View style={styles.logoRow}>
        <View style={styles.smallIcon} />
        <Text style={styles.logo}>argon</Text>
      </View>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Design</Text>
        <Text style={styles.title}>System</Text>

        <Text style={styles.subtitle}>
          Fully coded React Native components
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF',
    justifyContent: 'space-between'
  },

  /* Bubbles */
  circle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 100,
    top: -50,
    right: -50
  },

  circle2: {
    position: 'absolute',
    width: 250,
    height: 250,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 125,
    bottom: -80,
    left: -80
  },

  /* Logo */
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20
  },

  smallIcon: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 3,
    marginRight: 8
  },

  logo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'
  },

  /* Text */
  textContainer: {
    marginLeft: 20
  },

  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },

  subtitle: {
    color: 'white',
    marginTop: 10,
    fontSize: 14
  },

  /* Button */
  button: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 8,
    marginBottom: 40
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
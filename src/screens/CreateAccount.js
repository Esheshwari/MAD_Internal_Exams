import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default function CreateAccount({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Background Bubbles */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back} onPress={() => navigation.goBack()}>
          ←
        </Text>
        <Text style={styles.headerText}>Create Account</Text>
        <Text style={styles.notify}>🔔</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>

        <Text style={styles.signup}>Sign Up with</Text>

        {/* Social Row */}
        <View style={styles.socialRow}>
          <View style={styles.socialBtn}>
            <Text>🐙</Text>
            <Text>GitHub</Text>
          </View>

          <View style={styles.socialBtn}>
            <Text>G</Text>
            <Text>Google</Text>
          </View>
        </View>

        <Text style={styles.or}>Or sign up with credentials</Text>

        {/* Inputs */}
        <View style={styles.inputRow}>
          <Text>👤</Text>
          <TextInput placeholder="Name" style={styles.input} />
        </View>

        <View style={styles.inputRow}>
          <Text>📧</Text>
          <TextInput placeholder="Email" style={styles.input} />
        </View>

        <View style={styles.inputRow}>
          <Text>🔒</Text>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
        </View>

        <Text style={styles.strength}>
          Password strength: strong
        </Text>

        <Text style={styles.checkbox}>
          ☑ I agree with Privacy Policy
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF'
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

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20
  },

  back: {
    color: 'white',
    fontSize: 20
  },

  notify: {
    color: 'white',
    fontSize: 18
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  /* Card */
  card: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    padding: 25,
    marginTop: 50,
    height: 520
  },

  signup: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  socialBtn: {
    alignItems: 'center',
    width: '45%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8
  },

  or: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'gray'
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 15
  },

  input: {
    flex: 1,
    marginLeft: 10
  },

  strength: {
    fontSize: 12,
    color: 'green',
    marginBottom: 10
  },

  checkbox: {
    marginBottom: 20
  },

  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
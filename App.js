
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 72,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffffff90',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#192f6a',
    fontWeight: 'bold',
  },
});

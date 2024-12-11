import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!passwordVisible}
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        <Ionicons
          name={passwordVisible ? 'eye' : 'eye-off'}
          size={24}
          color="#7C7C7C"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#C7C7C7',
    borderRadius: 8,
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 10,
  },
});

export default PasswordInput;
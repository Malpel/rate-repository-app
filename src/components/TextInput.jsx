import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 40,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5
  },

  error: {
    borderWidth: 1,
    height: 40,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5,
    borderColor: '#d73a4a'
  }
});

const TextInput = ({ error, ...props }) => {
  //const textInputStyle = [style];
  if (error) return <NativeTextInput style={styles.error} {...props}/>; 
  
  return <NativeTextInput style={styles.inputStyle} {...props} />;
};

export default TextInput;
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function SearchBox({onFinishTyping}) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        returnKeyType="search"
        style={styles.input}
        onChangeText={setText}
        onSubmitEditing={onFinishTyping.bind(this, text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    color: '#eeeeee',
    fontWeight: '600',
    fontSize: 18,
    padding: 6,
  },
});

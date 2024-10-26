import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
  },
});

export default TodoInput;

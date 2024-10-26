import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (e) {
        console.error("Failed to load todos.", e);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (e) {
        console.error("Failed to save todos.", e);
      }
    };

    saveTodos();
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
  };

  const deleteTodoItem = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(item =>
      id === item.id ? { ...item, completed: !item.completed } : item
    );
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Todo App</Text>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodoItem={deleteTodoItem} toggleTodo={toggleTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

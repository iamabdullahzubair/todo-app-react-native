import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

const TodoList = ({ todos, deleteTodoItem, toggleTodo }) => (
  <View style={styles.container}>
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <View style={styles.todoItem}>
          <TouchableOpacity style={styles.touch} onPress={() => toggleTodo(item.id)}>
            <Text style={item.completed ? styles.completedText : styles.text}>{item.text}</Text>
          </TouchableOpacity>
          <Button
            color={"red"}
            title="X"
            onPress={() => deleteTodoItem(item.id)}
          />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touch : {
    // backgroundColor: '#000',
    flex :1
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#6c757d',
    fontSize : 15
  },
  text: {
    color: '#333',
    fontSize : 20
  },
});

export default TodoList;

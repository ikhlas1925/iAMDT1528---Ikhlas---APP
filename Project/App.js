import React, { useState, useEffect, Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  const [todo, setTodo] = useState('');

  const [todoItems, setTodoItems] = useState([]);

  //Listing ToDos
  const addNewToDo = () => {
    setTodoItems((oldToDos) =>
      setTodoItems([{ id: Math.random().toString(), todo }, ...oldToDos])
    );

    //Remove entered to from start
    setTodo('');
  };

  // Delete function
  const delToDo = () => {
    setTodoItems((setTodo) => setTodoItems([]));
  };

  //Adding Text Strike
  const onClickFuntion = (index) => {
    todoItems[index].class = 'strike';
    setTodoItems((oldToDos) => setTodoItems([...todoItems]));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoNotes</Text>

      {/* Enter ToDo List */}
      <TextInput
        style={styles.enterTodo}
        value={todo}
        maxLength={30}
        onChangeText={(text) => setTodo(text)}
        placeholder="New Todo"
      />

      {/* Add Button */}
      <View style={styles.buttonCont}>
        <Button color={ '#02cffa' } title="ADD TODO" onPress={addNewToDo} />
      </View>

      {/* Delete All Button */}
      <View>
        <Button color={ '#DC143C' } title="DELETE ALL" onPress={delToDo} />
      </View>

      {/* ToDo Listing */}
      <FlatList
        style={styles.todoContainer}
        data={todoItems}
        renderItem={({ item, index }) => (
          <View>
            <Text
              onPress={(event) => onClickFuntion(index)}
              style={(styles.toDoList, styles[item.class])}>
              {item.todo}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 30,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#02cffa',
    textAlign: 'center',
    marginBottom: 28,
  },
  enterTodo: {
    fontSize: 15,
    fontFamily: 'Montserrat',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 18,
  },
  buttonCont: {
    marginBottom: 8,
  },
  todoContainer: {
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 10,
    marginTop: 18,
  },
  toDoList: {
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#1a1a1a',
    paddingTop: 8,
    paddingBottom: 8,
  },
  strike: {
    textDecorationLine: 'line-through',
  },
});

import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';


function ToDoList({ tasks, onToggleTask }) {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <Pressable key={task.id} onPress={() => onToggleTask(task.id)}>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>
              {task.text}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
    textDecorationLine: 'line-through',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
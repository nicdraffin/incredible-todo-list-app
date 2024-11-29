import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function Index() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: false },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (taskText) => {
    if (tasks.some((task) => task.text.toLowerCase() === taskText.toLowerCase())) {
      alert('Task already exists!');
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>ToDo List</Text>
      <ToDoList tasks={tasks} onToggleTask={toggleTaskCompletion} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Index;

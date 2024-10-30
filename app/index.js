import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function Index() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: false },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} onToggleTask={toggleTaskCompletion} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default Index;
import React, { useState } from 'react';
import './todolist.css'; // Correct import for your CSS file

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add a new state to track the completion status of each task
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setCompletedTasks([...completedTasks, false]); // Initialize the task as not completed
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    const newCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setCompletedTasks(newCompletedTasks);
  };

  const handleToggleComplete = (index) => {
    const newCompletedTasks = completedTasks.map((completed, i) => 
      i === index ? !completed : completed
    );
    setCompletedTasks(newCompletedTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={completedTasks[index] ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={completedTasks[index]}
              onChange={() => handleToggleComplete(index)}
            />
            <span>{task}</span>
            <button onClick={() => handleDeleteTask(index)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

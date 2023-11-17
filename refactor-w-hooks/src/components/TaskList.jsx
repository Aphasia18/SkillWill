import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import DoneTask from "./DoneTask";

const TaskList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "Study" },
    { id: 2, name: "Work" },
  ]);
  const [done, setDone] = useState([
    { id: 10, name: "Clean" },
    { id: 20, name: "Cook" },
  ]);

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const addTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      name: inputValue,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const moveToDone = (id) => {
    const removedTask = tasks.find((task) => task.id === id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setDone([...done, removedTask]);
  };

  const moveToDo = (id) => {
    const removedTask = done.find((task) => task.id === id);
    const updatedDone = done.filter((task) => task.id !== id);
    setDone(updatedDone);
    setTasks([...tasks, removedTask]);
  };

  const removeFromDone = (id) => {
    const updatedDone = done.filter((task) => task.id !== id);
    setDone(updatedDone);
  };

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <form onSubmit={addTask} className="user-form">
          <input type="text" onChange={onChange} value={inputValue} />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className="task-column-wrapper">
        <div className="column-wrapper">
          <h1>To Do</h1>
          {useState.tasks.map((user) => (
            <TaskItem
              key={user.id}
              id={user.id}
              name={user.name}
              action={moveToDone}
            />
          ))}
        </div>
        <div className="column-wrapper">
          <h1>Done</h1>
          {this.state.done.map((user) => (
            <DoneTask
              key={user.id}
              id={user.id}
              name={user.name}
              moveBack={moveToDo}
              remove={removeFromDone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;

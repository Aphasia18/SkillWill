import { Component } from "react";
import TaskItem from "./TaskItem";
import DoneTask from "./DoneTask";

class TaskList extends Component {
  state = {
    inputValue: "",
    tasks: [
      { id: 1, name: "Study" },
      { id: 2, name: "Work" },
    ],
    done: [
      { id: 10, name: "Clean" },
      { id: 20, name: "Cook" },
    ],
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputValue: value,
    });
  };

  addTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: this.state.tasks.length + 1,
      name: this.state.inputValue,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
      inputValue: "",
    });
  };

  moveToDone = (id) => {
    const removedTask = this.state.tasks.find((task) => task.id === id);
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);

    this.setState({
      tasks: updatedTasks,
      done: [...this.state.done, removedTask],
    });
  };

  moveToDo = (id) => {
    const removedTask = this.state.done.find((task) => task.id === id);
    const updatedDone = this.state.done.filter((task) => task.id !== id);

    this.setState({
      done: updatedDone,
      tasks: [...this.state.tasks, removedTask],
    });
  };

  removeFromDone = (id) => {
    const doneTask = this.state.done.filter((task) => task.id !== id);

    this.setState({
      done: doneTask,
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.addTask} className="user-form">
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.inputValue}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div className="task-column-wrapper">
          <div className="column-wrapper">
            <h1>To Do</h1>
            {this.state.tasks.map((user) => (
              <TaskItem
                key={user.id}
                id={user.id}
                name={user.name}
                action={this.moveToDone}
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
                moveBack={this.moveToDo}
                remove={this.removeFromDone}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;

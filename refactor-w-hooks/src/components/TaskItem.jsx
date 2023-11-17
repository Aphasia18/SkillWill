import React, { Component } from "react";

class TaskItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id || this.props.name !== nextProps.name;
  }
  render() {
    const { id, name, action } = this.props;
    return (
      <div className="column-item">
        <p>Task: {name}</p>
        <button onClick={() => action(id)}>Done</button>
      </div>
    );
  }
}

export default TaskItem;

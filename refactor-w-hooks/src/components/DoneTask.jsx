import React, { Component } from "react";

class DoneTask extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id || this.props.name !== nextProps.name;
  }
  render() {
    const { id, name, moveBack, remove } = this.props;
    return (
      <div className="column-item">
        <p>Task: {name}</p>
        <button onClick={() => moveBack(id)}>Move to To Do</button>
        <button onClick={() => remove(id)}>Delete</button>
      </div>
    );
  }
}

export default DoneTask;

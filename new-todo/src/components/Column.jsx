import React, { Component } from "react";

class Column extends Component {
  render() {
    const { columnName, action } = this.props;
    return (
      <div className="column-wrapper">
        <h1>{columnName}</h1>
        <p> THis is a placeholder for task</p>
        <p>TAsk placeholder two</p>
        <p>threeeee</p>
        <button className="add-btn" onClick={action}>
          +
        </button>
      </div>
    );
  }
}

export default Column;

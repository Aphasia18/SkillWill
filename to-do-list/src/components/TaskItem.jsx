import React from "react";

const TaskItem = ({ id, name, action }) => {
  return (
    <div className="column-item">
      <p>Task: {name}</p>
      <button onClick={() => action(id)}>Done</button>
    </div>
  );
};

export default TaskItem;

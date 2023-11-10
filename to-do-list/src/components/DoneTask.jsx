import React from "react";

const DoneTask = ({ id, name, moveBack, remove }) => {
  return (
    <div className="column-item">
      <p>Task: {name}</p>
      <button onClick={() => moveBack(id)}>Move to To Do</button>
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};

export default DoneTask;

import { useState } from "react";

const TaskForm = ({ onFormSubmit }) => {
  const [task, setTaskName] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(task);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Task"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default TaskForm;

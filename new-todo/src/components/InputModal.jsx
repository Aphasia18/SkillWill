import React from "react";

const InputModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form>
          <input type="text" placeholder="Enter task" />
          <button type="submit">Add Task</button>
          <button onClick={handleClose}>Close</button>
        </form>
      </section>
    </div>
  );
};

export default InputModal;

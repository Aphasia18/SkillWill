import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";

const API_KEY = "syCQ9NklipBe70r5gMqEkjKk-TsPH_k3HTnQoEJpxBAniRPD-g";

function App() {
  const [taskList, setUserList] = useState([]);

  useEffect(() => {
    fetch("/api/v1/todo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("RESPONE FAILED");
        return res.json();
      })
      .then((data) =>
        setUserList(
          data.items.map((user) => {
            return {
              taskName: user.taskName,
              id: user._uuid,
            };
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const getTasks = () => {
    fetch("/api/v1/todo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("RESPONE FAILED");
        return res.json();
      })
      .then((data) =>
        setUserList(
          data.items.map((task) => {
            return {
              taskName: task.taskName,
              id: task._uuid,
            };
          })
        )
      )
      .catch((err) => console.log(err));
  };

  const onFormSubmit = (taskName) => {
    fetch("/api/v1/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([{ taskName }]),
    })
      .then((res) => {
        if (!res.ok) throw new Error("RESPONE FAILED");
        return res.json();
      })
      .then((data) =>
        setUserList((prev) => [
          { taskName: data.items[0].taskName, id: data.items[0]._uuid },
          ...prev,
        ])
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <TaskForm onFormSubmit={onFormSubmit} />
      <button onClick={getTasks}>Load tasks</button>
      <button onClick={() => setUserList([])}>Delete tasks</button>
      {taskList.map((user) => (
        <div key={user.id}>
          <h3>{user.taskName}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;

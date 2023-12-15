import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodoListPage = () => {
  const { todoList } = useSelector((state) => state.todo);
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <Link to={"/create"}>To Create Page</Link>
    </div>
  );
};

export default TodoListPage;

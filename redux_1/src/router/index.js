import CreateTodoPage from "../pages/CreateTodo";
import TodoListPage from "../pages/TodoList";

const routes = [
  {
    element: <CreateTodoPage />,
    path: "/create",
  },
  {
    element: <TodoListPage />,
    path: "/",
  },
];

export default routes;

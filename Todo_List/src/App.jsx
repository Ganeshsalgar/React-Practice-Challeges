import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    if (isEdit) {
      todos.forEach((item) => {
        if (item.id === isEdit) {
          item.name = input;
        }
      });

      setTodos(todos);
      setIsEdit(null);
    } else {
      const obj = {
        id: Date.now(),
        name: input,
        complete: false,
      };

      setTodos((prev) => [...prev, obj]);
    }

    setInput("");
  };

  const handleDelete = (id) => {
    const todo = todos.filter((item) => item.id !== id);
    setTodos(todo);
  };

  const handleEdit = (id) => {
    const todo = todos.find((item) => item.id === id);
    setInput(todo.name);
    setIsEdit(todo.id);
  };

 const handleToggle = (id) => {
  setTodos((prev) =>
    prev.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete,
        };
      }

      return item;
    })
  );
};
  return (
    <>
      <div className="w-full h-screen bg-gray-950 text-white">
        <div className="w-full flex border-b  p-2 justify-center">
          Todo List
        </div>
        <div className="w-full flex justify-center">
          <div className="w-90 flex flex-col mt-10">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border p-2"
                placeholder="Enter todo here"
              />
              <div className="mt-4 flex gap-3">
                <button type="submit" className="bg-blue-700 p-2 rounded-md">
                  {isEdit ? "update" : "Submit"}
                </button>
                <button
                  type="text"
                  onClick={() => setInput("")}
                  className="bg-blue-700 p-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
            <div className="mt-5 flex justify-center">
              {todos.length === 0 ? (
                <div>Add todo here</div>
              ) : (
                <ul>
                  <div>
                    {todos.map((item) => (
                      <div key={item.id}>
                        <li className="flex w-90 justify-between">
                          <div className={`${item.complete ? "line-through text-gray-500" : ""}`}
                            onClick={() => handleToggle(item.id)}
                          >{item.name}</div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(item.id)}
                              className="bg-green-700 p-2 rounded-md"
                            >
                              edit
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="bg-red-700 p-2 rounded-md"
                            >
                              delete
                            </button>
                          </div>
                        </li>
                      </div>
                    ))}
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

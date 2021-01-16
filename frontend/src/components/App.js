import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { getAllTodo } from "./helper";
import CreateArea from "./CreateArea";
import UpdateArea from "./UpdateArea";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [flag, setflag] = useState(0);
  const [updateFlag, setUpdateFlag] = useState(0);
  const [updateId, setUpdateId] = useState(0);

  const preload = () => {
    getAllTodo().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTodos(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, [flag]);

  const reRenderPage = () => {
    setflag(1 - flag);
  };

  const handleUpdate = (id) => {
    setUpdateId(id);
    setUpdateFlag(1 - updateFlag);
  };

  return (
    <div>
      <Header />

      {updateFlag ? (
        <UpdateArea
          key={updateId}
          id={updateId}
          onUpdate={reRenderPage}
          onUpdation={handleUpdate}
        />
      ) : (
        <CreateArea onAdd={reRenderPage} />
      )}
      {todos.map((todo, index) => {
        return (
          <Note
            key={todo._id}
            id={todo._id}
            title={todo.title}
            content={todo.description}
            onDelete={reRenderPage}
            onUpdate={handleUpdate}
          />
        );
      })}
      <Footer />
    </div>
  );
}

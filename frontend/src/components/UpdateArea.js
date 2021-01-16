import React, { useState, useEffect } from "react";
import { getTodo, updateTodo } from "./helper";
import EditIcon from "@material-ui/icons/Edit";

export default function UpdateArea(props) {
  //use for updating todo
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  // const preload = () => {};

  useEffect(() => {
    getTodo(props.id).then((data) => {
      setTodo(data);
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo(() => {
      return {
        ...todo,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    updateTodo(todo, props.id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("Note Updated");
        props.onUpdation(props.id);
        props.onUpdate();
      }
    });
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={todo.title}
        />
        <textarea
          onChange={handleChange}
          name="description"
          value={todo.description}
        />
        <button onClick={handleClick}>
          <EditIcon />
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { createTodo } from "./helper";
import AddIcon from "@material-ui/icons/Add";

export default function CreateArea(props) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    createTodo(todo).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("Note Created");
        setTodo(() => {
          return {
            title: "",
            description: "",
          };
        });
        props.onAdd();
      }
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={todo.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Enter Anything HERE You Wish"
          value={todo.description}
          onChange={handleChange}
          rows="3"
        />
        <button onClick={handleClick}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

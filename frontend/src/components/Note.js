import React from "react";
import { removeTodo } from "./helper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Note(props) {
  const handleDelete = (event) => {
    removeTodo(props.id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("Successfully deleted");
      }
    });
    props.onDelete();
  };

  const handleUpdate = (event) => {
    props.onUpdate(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button onClick={handleUpdate}>
        <EditIcon />
      </button>

      <button onClick={handleDelete} name="delete">
        <DeleteIcon />
      </button>
    </div>
  );
}

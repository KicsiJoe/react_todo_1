import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
    
  const deleteHandler = () => {
    props.onDelete(props.szam);
  };

  return (
    <li className="goal-form-item" onClick={deleteHandler} key={props.id}>
      {props.name} {props.age} {props.szam}
    </li>
  );
};

export default ListItem;

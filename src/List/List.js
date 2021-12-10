import React from "react";
import ListItem from "./ListItem";
import "./List.css";

const List = (props) => {
   if( props.ertekek.length > 0 ) {
  return (
    <div style={{ margin: "0px" }}>
      <ul>
        {props.ertekek.map((item) => (
          <ListItem
            key={item.id}
            onDelete={props.onDeleteItem}
            szam={item.id}
            name={item.name}
            age={item.age}
          />
        ))}
      </ul>
    </div>
  );} else {
      return (
          <p className="message">Nincs megjeleníthető elem!</p>
      )
  }
};

export default List;

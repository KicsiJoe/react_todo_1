import React, { useState } from "react";
import "./App.css";
import Form from "./Input/Form.js";
import List from "./List/List.js";

function App(props) {
  const [lista, setLista] = useState([
    {
      id: "elso",
      name: "Joe",
      age: 23,
    },
    {
      id: "masodik",
      name: "Eger",
      age: 38,
    },
  ]);

  const formSubmitHandler = (listaButtonrol) => {
    let listaUj = [...lista, listaButtonrol];
    setLista(listaUj);
    console.log(listaUj);
  };
  const deleteItemHandler = (id) => {
    console.log(id);

    setLista( elolista => {return elolista.filter(item => item.id !== id )})
  };

  return (
    <div>
      <Form onSubmitValami={formSubmitHandler}></Form>
      <List onDeleteItem={deleteItemHandler} ertekek={lista} />
    </div>
  );
}

export default App;

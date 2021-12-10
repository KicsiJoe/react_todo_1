import React, {useState} from "react";
import Button from "./Button";
import "./Form.css";

const Form = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
    
  };
  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value)
    
  };

  const onFormBeadas = (event) => {
    event.preventDefault();
    const inputTartalom = {
        id: Math.round(Math.random()*100000*Math.random().toString()),
        age: enteredAge,
        name: enteredName
    }

    props.onSubmitValami(inputTartalom);
    setEnteredName('');
    setEnteredAge('');
  }

  return (
    <div id="goal-form">
      <label>Név</label>
      <input
        type="text"
        name="name"
        className="inputClass"
        onChange={nameInputChangeHandler}
        value={enteredName}
      />

      <label>Mennyi idős</label>
      <input
        type="number"
        name="first_name"
        className="inputClass"
        onChange={ageInputChangeHandler}
        value={enteredAge}
      />

      <Button className="centerButton" type="submit" formBeadas={onFormBeadas}>
        Hozzáad
      </Button>
    </div>
  );
};

export default Form;

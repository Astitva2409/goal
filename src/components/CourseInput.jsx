import React, { useState } from "react";
import Button from "./Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const goalText = enteredValue
    setEnteredValue('');
    if (goalText.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(goalText);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className= {`form-control ${!isValid ? 'invalid' : ''}`} >
          <label htmlFor="">Your Goal</label>
          { !isValid && <span>Please enter some text</span>}
          <input
            type="text"
            onChange={goalInputChangeHandler}
            placeholder="Enter your goal"
            value={enteredValue}
          />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;

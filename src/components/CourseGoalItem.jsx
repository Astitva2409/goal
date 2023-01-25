import React from "react";

const CourseGoalItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>{props.text}</li>
  );
};

export default CourseGoalItem;

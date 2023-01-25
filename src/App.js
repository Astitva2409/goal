import React, { useState } from "react";
import CourseInput from "./components/CourseInput";
import CourseGoalList from "./components/CourseGoalList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises', id: 'G1' },
    { text: 'Read a book daily for 30 minutes', id: 'G2' }
  ]);

  const addGoalHandler = (goalText) => {
    if (goalText.length > 0) {
      setCourseGoals((prevGoals) => {
        const updatedGoals = [...prevGoals];
        updatedGoals.unshift({ text: goalText, id: Math.random().toString() });
        return updatedGoals;
      });
    }
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  }

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="goal-form" >
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals" >
        {content}
      </section>
    </div>
  );
};

export default App;

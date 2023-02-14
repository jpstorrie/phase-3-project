//For each question to be displayed on the Forums page

import { NavLink } from "react-router-dom";

function FormQuestion({ question }) {
  return (
    <NavLink to={`/forums/${question.id}`}>
      <h3>{question.question}</h3>
      <h5>{question.username}</h5>
      <p>{question.date}</p>
    </NavLink>
  );
}
export default FormQuestion;

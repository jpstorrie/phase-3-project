//For each question to be displayed on the Forums page

import { useNavigate } from "react-router-dom";

function FormQuestion({ question }) {
  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/forums/${question.id}`)} className="card ms-2 m-2 me-2 text-decoration-none shadow-sm mb-3 bg-white rounded">
        <p className="card-header">{question.username}</p>
        <div className="card-body">
        <h4 className="card-title">{question.question}</h4>
        <p className="card-text font-weight-light">{question.date}</p>
      </div>
      </div>
  );
}
export default FormQuestion;

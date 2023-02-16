//For each question to be displayed on the Forums page

import { useNavigate } from "react-router-dom";

function FormQuestion({ question }) {
  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/forums/${question.id}`)} className="card ms-2 m-2 me-2 text-decoration-none shadow-sm mb-3 bg-white rounded">
        <h4 className="card-header">{question.username}</h4>
        <div className="card-body">
        <h5 className="card-title">{question.question}</h5>
        <p className="card-text font-weight-light">{question.date}</p>
        {/* <button className="btn btn-primary me-1" >Add Comment</button>
        <button className="btn btn-danger">DELETE🗑</button> */}
      </div>
      </div>
  );
}
export default FormQuestion;

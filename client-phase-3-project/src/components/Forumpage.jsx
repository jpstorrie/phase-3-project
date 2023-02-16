import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentCard from "./Commentcard";
import CommentForm from "./Commentform";

function Forumpage() {
  const [question, setQuestion] = useState({});
  const [comments, setComments] = useState([]);
  const [commentFormVis, setFormVis] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  //get the question and comment data
  useEffect(() => {
    fetch(`/api/forums/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setQuestion(data[0]);
        setComments(data[1]);
      });
  }, [params.id]);

  // Function to delete reviews
  function handleDelete() {
    fetch(`/api/forums/delete/${question.id}`, {
      method: "DELETE",
    }).then(navigate("/forums"));
  }

  //function to filter out the projects that are deleted
  function onDeleteComment(deletedComment) {
    const updatedComments = comments.filter((comment) => {
      return comment.id !== deletedComment.id;
    });
    setComments(updatedComments)
  }

  //render a comment card for each comment
  const eachComment = comments.map((comment) => (
    <CommentCard
      key={comment.id}
      onDeleteComment={onDeleteComment}
      comments={comments}
      setComments={setComments}
      comment={comment}
    />
  ));

  return (
    <div>
      <div className="card shadow-sm ms-2 me-2">
        <h4 className="card-header">{question.username}</h4>
        <div className="card-body">
        <h5 className="card-title">{question.question}</h5>
        <p className="card-text font-weight-light">{question.date}</p>
        <button className="btn btn-primary me-1" onClick={() => setFormVis(!commentFormVis)}>Add Comment</button>
        <button className="btn btn-danger" onClick={handleDelete}>DELETE🗑</button>
      </div>
    </div>
    <h3 className="ms-3">Answers and Comments:</h3>
      {commentFormVis === true ? (
        <CommentForm
          cFVis={commentFormVis}
          setFVis={setFormVis}
          question={question}
          setComments={setComments}
          comments={comments}
        />
      ) : (
        ""
      )}
      {eachComment}
    </div>
  );
}
export default Forumpage;

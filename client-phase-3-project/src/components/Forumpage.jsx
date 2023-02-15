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
      <h1>{question.username}</h1>
      <h1>{question.question}</h1>
      <h1>{question.date}</h1>
      <button onClick={() => setFormVis(!commentFormVis)}>Add Comment</button>
      <button onClick={handleDelete}>DELETE🗑</button>
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

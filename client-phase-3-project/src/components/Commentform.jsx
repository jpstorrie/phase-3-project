import { useState } from "react";

function CommentForm({ cFVis, setFVis, question, setComments, comments }) {
  const initialValues = {
    forum_id: question.id,
    comment: "",
    username: "",
    likes: 0,
  };
  const [formData, setFormData] = useState(initialValues);

  function handleCommentChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handlePost(obj) {
    fetch("/api/comments/new", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((data) => setComments(() => [...comments, data]));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handlePost(formData);
    setFVis(!cFVis);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text">Username</span>
        <input
          onChange={handleCommentChange}
          required
          minLength={3}
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          name="username"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Comment</span>
        <textarea
          onChange={handleCommentChange}
          required
          minLength={10}
          name="comment"
          className="form-control"
          placeholder="Your Comment Here"
          aria-label="With textarea"
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;

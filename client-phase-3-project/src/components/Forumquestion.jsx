//For each question to be displayed on the Forums page

function FormQuestion({question}) {
  return (
    <div>
      <h3>{question.question}</h3>
      <h5>{question.username}</h5>
      <p>{question.date}</p>
    </div>
  );
}
export default FormQuestion;

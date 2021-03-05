import React from "react";
import Button from "../UI/Button/Button";
import "./FinishedQuiz.css";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          let cls = "fa fa-check success";
          if (props.results[quizItem.id] === "error") {
            cls = "fa fa-times error";
          }
          return (
            <li key={index}>
              <strong>{index + 1}. </strong>
              {quizItem.question}
              <i className={cls} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>

      <div>
        <Button onClick={props.onRetry} type="primary">
          Повторить
        </Button>

        <Button type="success">Перейти в список тестов</Button>
      </div>
    </div>
  );
};

export default FinishedQuiz;

import React from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        answers: [
          {
            id: 1,
            text: "Черный",
          },
          {
            id: 2,
            text: "Синий",
          },
          {
            id: 3,
            text: "Красный",
          },
          {
            id: 4,
            text: "Зелёный",
          },
        ],
      },
      {
        id: 2,
        question: "В каком году основали Санкт-Петербург?",
        rightAnswerId: 4,
        answers: [
          {
            id: 1,
            text: "1700",
          },
          {
            id: 2,
            text: "1705",
          },
          {
            id: 3,
            text: "1702",
          },
          {
            id: 4,
            text: "1703",
          },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {
          [answerId]: "success",
        },
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finished");
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: {
          [answerId]: "error",
        },
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className="Quiz">
        <div className="Quiz-Wrapper">
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;

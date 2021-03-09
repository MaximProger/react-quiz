import React, { Component } from "react";
import "./QuizCreator.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import { createControl } from "../../form/formFramework";

function createOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым",
      },
      { required: true }
    ),
    option_1: createOptionControl(1),
    option_2: createOptionControl(2),
    option_3: createOptionControl(3),
    option_4: createOptionControl(4),
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    rightAnserId: 1,
    formControls: createFormControls(),
  };

  submitHandler(evt) {
    evt.preventDefault();
  }

  addQuestionHandler = () => {};

  createQuestionHandler = () => {};

  changeHandler = (value, controlName) => {};

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <React.Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(evt) =>
              this.changeHandler(evt.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </React.Fragment>
      );
    });
  }

  selectChangeHandler = (evt) => {
    this.setState({
      rightAnserId: +evt.target.value,
    });
  };

  render() {
    const select = (
      <Select
        label="Выберете правильный ответ"
        value={this.state.rightAnserId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );

    return (
      <div className="QuizCreator">
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            {select}
            <Button type="primary" onClick={this.addQuestionHandler}>
              Добавить вопрос
            </Button>
            <Button type="success" onClick={this.createQuestionHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

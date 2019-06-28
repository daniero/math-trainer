import React, { useState } from 'react';
import { answer, container, equals, question } from './Multiplication.module.css';
import { Answer } from "./Answer";
import { randomInteger } from "./util";

// TODO filter out questions such as (x<=9)*(y<=9), 10*x, 11*(x<=9)
// TODO don't show same question twice in a row, including reversed

function pickNewNumbers() {
  return [
    randomInteger(7, 19),
    randomInteger(7, 19)
  ]
}

export const Multiplication = () => {

  const [[number1, number2], setNumbers] = useState(pickNewNumbers());

  function answerQuestion(answer) {
    const correctAnswer = number1 * number2;

    if (answer === correctAnswer) {
      setNumbers(pickNewNumbers());
    }
  }

  return (
    <div className={container}>
      <span className={question}>{number1} × {number2}</span>
      <span className={equals}>&nbsp;=&nbsp;</span>
      <Answer
        className={answer}
        answerQuestion={answerQuestion}
      />
    </div>
  );
};
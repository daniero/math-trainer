import React, { useState } from 'react';

export const Answer = ({
                         answerQuestion,
                         ...props
                       }) => {

  const [answer, setAnswer] = useState('');

  function submitAnswer() {
    answerQuestion(parseInt(answer));
    setAnswer('');
  }

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      submitAnswer();
      e.preventDefault();
    }
  }

  return (
    <input
      type="number"
      autoFocus
      value={answer}
      onChange={e => setAnswer(e.target.value)}
      onKeyPress={onKeyPress}
      {...props}
    />
  );
};

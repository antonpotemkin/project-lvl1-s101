import { car, cdr } from 'hexlet-pairs';
import { getCondition, getText, writeText, getQuestion } from '../util';

export const welcome = (gameName) => {
  writeText('Welcome to the Brain Games!');
  writeText(getCondition(gameName));
  const name = getText('May I have your name? ');
  writeText(`Hello, ${name}!\n`);
  return name;
};

export const iter = (gameName, round, name) => {
  if (round === 0) {
    return true;
  }
  const questionPair = getQuestion(gameName);
  writeText(`Question: ${car(questionPair)}`);
  const answer = getText('Your answer: ');
  const correctAnswer = cdr(questionPair);
  if (answer !== `${correctAnswer}`) {
    writeText(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  writeText('Correct!');
  return iter(gameName, round - 1, name);
};

export const exit = (isWin, name) => {
  if (!isWin) {
    writeText(`Let's try again, ${name}!`);
  } else {
    writeText(`Congratulations, ${name}!`);
  }
};

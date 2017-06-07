import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { getCondition, getQuestion } from '..';

export const welcome = (gameName) => {
  console.log('Welcome to the Brain Games!');
  console.log(getCondition(gameName));
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const iter = (gameName, roundCount) => {
  if (roundCount === 0) {
    return true;
  }
  const questionPair = getQuestion(gameName);
  console.log(`Question: ${car(questionPair)}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = cdr(questionPair);
  if (answer !== `${correctAnswer}`) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return iter(gameName, roundCount - 1);
};

export const exit = (isWin, name) => {
  if (!isWin) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

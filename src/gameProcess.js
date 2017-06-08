import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundCount = 3;

const iter = (pair, count) => {
  const questionAndAnswer = pair();
  const question = car(questionAndAnswer);
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = cdr(questionAndAnswer);
  if (answer !== `${correctAnswer}`) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  if (count === 1) {
    return true;
  }
  return iter(pair, count - 1);
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const condition = car(game);
  console.log(condition);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const questionAndAnswer = cdr(game);
  const isWin = iter(questionAndAnswer, roundCount);
  if (!isWin) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

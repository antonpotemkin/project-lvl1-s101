import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const iter = (game, count) => {
  const questionPair = cdr(game)();
  console.log(`Question: ${car(questionPair)}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = cdr(questionPair);
  console.log(correctAnswer);
  if (answer !== `${correctAnswer}`) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  if (count === 1) {
    return true;
  }
  return iter(game, count - 1);
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(car(game));
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const isWin = iter(game, 3);
  if (!isWin) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

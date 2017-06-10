import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundCount = 3;

const iter = (puzzle, count) => {
  if (count === 0) {
    return true;
  }
  const questionAndAnswer = puzzle();
  const question = car(questionAndAnswer);
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = cdr(questionAndAnswer);
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return iter(puzzle, count - 1);
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const condition = car(game);
  console.log(condition);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  const puzzle = cdr(game);
  const isWin = iter(puzzle, roundCount);
  if (!isWin) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

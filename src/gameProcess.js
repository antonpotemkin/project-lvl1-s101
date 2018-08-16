// @flow

import readLineSync from 'readline-sync';

const roundCount = 3;

const iter: Function = (puzzle: Function, count: number) => {
  if (count === 0) {
    return true;
  }
  const { question, correctAnswer } = puzzle();
  console.log(`Question: ${question}`);
  const answer: string = readLineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return iter(puzzle, count - 1);
};

export default (game: Object): void => {
  console.log('Welcome to the Brain Games!');
  if (game.condition) {
    console.log(game.condition);
  }
  console.log();
  const name: string = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (game.getPuzzle) {
    console.log();
    const puzzle: Function = game.getPuzzle;
    const isWin = iter(puzzle, roundCount);
    if (!isWin) {
      console.log(`Let's try again, ${name}!`);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

import readlineSync from 'readline-sync';

const roundCount = 3;

const iter = (puzzle, count) => {
  if (count === 0) {
    return true;
  }
  const { question, correctAnswer } = puzzle();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return iter(puzzle, count - 1);
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const condition = game.condition;
  console.log(condition);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  const puzzle = game.getPuzzle;
  const isWin = iter(puzzle, roundCount);
  if (!isWin) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

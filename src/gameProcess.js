import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const iter = (questions) => {
  const questionPair = car(questions);
  console.log(`Question: ${car(questionPair)}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = cdr(questionPair);
  if (answer !== `${correctAnswer}`) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  if (!cdr(questions)) {
    return true;
  }
  return iter(cdr(questions));
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(car(game));
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const isWin = iter(cdr(game));
  if (!isWin) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

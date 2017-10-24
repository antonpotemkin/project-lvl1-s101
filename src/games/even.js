import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const min = 1;
const max = 100;
const isEven = number => number % 2 === 0;

const getPuzzle = () => {
  const number = getRandomNumber(max, min);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame({ condition, getPuzzle });

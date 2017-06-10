import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const max = 100;
const isEven = number => number % 2 === 0;

const getPuzzle = () => {
  const number = getRandomNumber(max);
  const question = number;
  return cons(question, isEven(number) ? 'yes' : 'no');
};

export default () => startGame(cons(condition, getPuzzle));

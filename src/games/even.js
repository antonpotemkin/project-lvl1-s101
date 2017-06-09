import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getPuzzle = () => {
  const number = getRandomNumber(100);
  const question = `Question: ${number}`;
  return cons(question, isEven(number) ? 'yes' : 'no');
};

export default () => startGame(cons(condition, getPuzzle));

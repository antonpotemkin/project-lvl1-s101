import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';

const getRandomNumber = max => Math.floor(Math.random() * max);

const isEven = number => number % 2 === 0;

const questionPair = () => {
  const question = getRandomNumber(100);
  return cons(question, isEven(question) ? 'yes' : 'no');
};

export default () => {
  const condition = 'Answer "yes" if number even otherwise answer "no".\n';
  return startGame(cons(condition, () => questionPair()));
};

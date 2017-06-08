import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';

const getRandomNumber = max => Math.floor(Math.random() * max);
const condition = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = number => number % 2 === 0;

const getPair = () => {
  const number = getRandomNumber(100);
  const question = `Question: ${number}`;
  return cons(question, isEven(number) ? 'yes' : 'no');
};

export default () => startGame(cons(condition, getPair));

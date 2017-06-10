import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'What is the result of the expression?';
const min = 1;
const max = 60;

const getGcd = (a, b) => {
  if (b === 1) {
    return b;
  }
  if (a % b === 0) {
    return b;
  }
  return getGcd(b, a % b);
};

const getPuzzle = () => {
  const firstNumber = getRandomNumber(max, min);
  const secondNumber = getRandomNumber(max, min);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  return cons(question, `${answer}`);
};

export default () => startGame(cons(condition, getPuzzle));

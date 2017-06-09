import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'What is the result of the expression?';

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
  const firstNumber = getRandomNumber(60) + 1;
  const secondNumber = getRandomNumber(50) + 1;
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  return cons(question, `${answer}`);
};

export default () => startGame(cons(condition, getPuzzle));

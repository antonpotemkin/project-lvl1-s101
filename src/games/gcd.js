import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';

const getRandomNumber = max => Math.floor(Math.random() * max);

const getGcd = (a, b) => {
  if (b === 1) {
    return b;
  }
  const isGcd = a % b === 0;
  if (isGcd) {
    return b;
  }
  return getGcd(b, a % b);
};

const questionPair = () => {
  const firstNumber = getRandomNumber(60) + 1;
  const secondNumber = getRandomNumber(50) + 1;
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);
  return cons(question, correctAnswer);
};

export default () => {
  const condition = 'What is the result of the expression?\n';
  return startGame(cons(condition, () => questionPair()));
};

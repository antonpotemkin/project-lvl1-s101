import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';

const getRandomNumber = max => Math.floor(Math.random() * max);
const condition = 'What is the result of the expression?\n';

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

const getPair = () => {
  const firstNumber = getRandomNumber(60) + 1;
  const secondNumber = getRandomNumber(50) + 1;
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);
  return cons(question, correctAnswer);
};

export default () => startGame(cons(condition, getPair));

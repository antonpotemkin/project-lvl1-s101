import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';

const getRandomNumber = max => Math.floor(Math.random() * max);
const condition = 'Find the greatest common divisor of given numbers.\n';
const operations = ['+', '-', '*'];

const getPair = () => {
  const firstNumber = getRandomNumber(40);
  const secondNumber = getRandomNumber(10);
  const operation = operations[getRandomNumber(3)];
  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`;
  switch (operation) {
    case '+':
      return cons(question, firstNumber + secondNumber);
    case '-':
      return cons(question, firstNumber - secondNumber);
    default:
      return cons(question, firstNumber * secondNumber);
  }
};

export default () => startGame(cons(condition, getPair));

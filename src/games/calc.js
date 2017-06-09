import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Find the greatest common divisor of given numbers.';
const operations = ['+', '-', '*'];

const getPuzzle = () => {
  const firstNumber = getRandomNumber(40);
  const secondNumber = getRandomNumber(10);
  const operation = operations[getRandomNumber(3)];
  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`;
  switch (operation) {
    case '+': {
      const answer = firstNumber + secondNumber;
      return cons(question, `${answer}`);
    }
    case '-': {
      const answer = firstNumber - secondNumber;
      return cons(question, `${answer}`);
    }
    default: {
      const answer = firstNumber * secondNumber;
      return cons(question, `${answer}`);
    }
  }
};

export default () => startGame(cons(condition, getPuzzle));

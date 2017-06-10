import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Find the greatest common divisor of given numbers.';
const operations = ['+', '-', '*'];
const maxFirstNumber = 40;
const maxSecondNumber = 10;

const getPuzzle = () => {
  const firstNumber = getRandomNumber(maxFirstNumber);
  const secondNumber = getRandomNumber(maxSecondNumber);
  const operation = operations[getRandomNumber(operations.length)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
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

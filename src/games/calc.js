// @flow

import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition: string = 'Find the greatest common divisor of given numbers.';
const operations: Array<string> = ['+', '-', '*'];
const maxFirstNumber: number = 40;
const maxSecondNumber: number = 10;

const getPuzzle: Object = () => {
  const firstNumber: number = getRandomNumber(maxFirstNumber);
  const secondNumber: number = getRandomNumber(maxSecondNumber);
  const operation: string = operations[getRandomNumber(operations.length)];
  const question: string = `${firstNumber} ${operation} ${secondNumber}`;
  switch (operation) {
    case '+': {
      const answer: number = firstNumber + secondNumber;
      return { question, correctAnswer: `${answer}` };
    }
    case '-': {
      const answer: number = firstNumber - secondNumber;
      return { question, correctAnswer: `${answer}` };
    }
    default: {
      const answer: number = firstNumber * secondNumber;
      return { question, correctAnswer: `${answer}` };
    }
  }
};

export default () => startGame({ condition, getPuzzle });

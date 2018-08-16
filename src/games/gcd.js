// @flow

import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition: string = 'What is the result of the expression?';
const min: number = 1;
const max: number = 60;

const getGcd = (a: number, b: number) => {
  if (b === 1) {
    return b;
  }
  if (a % b === 0) {
    return b;
  }
  return getGcd(b, a % b);
};

const getPuzzle: Object = () => {
  const firstNumber: number = getRandomNumber(max, min);
  const secondNumber: number = getRandomNumber(max, min);
  const question: string = `${firstNumber} ${secondNumber}`;
  const answer: number = getGcd(firstNumber, secondNumber);
  return { question, correctAnswer: `${answer}` };
};

export default () => startGame({ condition, getPuzzle });

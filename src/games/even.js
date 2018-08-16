// @flow

import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition: string = 'Answer "yes" if number even otherwise answer "no".';
const min: number = 1;
const max: number = 100;
const isEven: Function = (number: number) => number % 2 === 0;

const getPuzzle: Object = () => {
  const number: number = getRandomNumber(max, min);
  const question: number = number;
  const correctAnswer: string = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame({ condition, getPuzzle });

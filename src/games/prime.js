// @flow

import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition: string = 'Answer "yes" if number prime otherwise answer "no".';
const max: number = 100;

const isPrime: Function = (number) => {
  if (number <= 1) {
    return false;
  }

  const iter = (div) => {
    if (div > number / 2) {
      return true;
    }
    if (number % div === 0) {
      return false;
    }
    return iter(div + 1);
  };
  const div = 2;
  return iter(div);
};

const getPuzzle: Object = () => {
  const number: number = getRandomNumber(max);
  const question: number = number;
  const correctAnswer: string = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame({ condition, getPuzzle });

// @flow
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition: string = 'Balance the given number.';
const max: number = 5000;

const iter: Function = (acc: string, sum: number, count: number) => {
  if (count === 0) {
    return acc;
  }
  const number: number = (sum - (sum % count)) / count;
  return iter(acc + number, sum - number, count - 1);
};

const getBalance: Function = (number: number) => {
  const array: Array<string> = `${number}`.split('');
  // const length = array.length;
  // error Use object destructuring prefer-destructuring
  const { length } = array;
  const sum: number = array.reduce((acc, value) => acc + Number(value), 0);
  return iter('', sum, length);
};

const getPuzzle: Object = () => {
  const number: number = getRandomNumber(max);
  const question: number = number;
  const correctAnswer: number = getBalance(number);
  return { question, correctAnswer };
};

export default () => startGame({ condition, getPuzzle });

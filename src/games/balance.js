import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';

const condition = 'Balance the given number.\n';

const iter = (acc, sum, count) => {
  if (count === 0) {
    return acc;
  }
  const number = (sum - (sum % count)) / count;
  return iter(acc + number, sum - number, count - 1);
};

const getBalance = (number) => {
  const array = `${number}`.split('');
  const length = array.length;
  const sum = array.reduce((acc, value) => acc + Number(value), 0);
  return iter('', sum, length);
};

const getPuzzle = (getRandomNumber) => {
  const number = getRandomNumber(5000);
  const question = `Question: ${number}`;
  const answer = getBalance(number);
  return cons(question, `${answer}`);
};

export default () => startGame(cons(condition, getPuzzle));

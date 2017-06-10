import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Answer "yes" if number prime otherwise answer "no".';

const iter = (number, step) => {
  if (step > number / 2) {
    return true;
  }
  if (number % step === 0) {
    return false;
  }
  return iter(number, step + 1);
};

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  return iter(number, 2);
};

const getPuzzle = () => {
  const number = getRandomNumber(100);
  const question = `Question: ${number}`;
  return cons(question, isPrime(number) ? 'yes' : 'no');
};

export default () => startGame(cons(condition, getPuzzle));

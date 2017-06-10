import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Answer "yes" if number prime otherwise answer "no".';
const max = 100;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const iter = (step) => {
    if (step > number / 2) {
      return true;
    }
    if (number % step === 0) {
      return false;
    }
    return iter(step + 1);
  };

  return iter(2);
};

const getPuzzle = () => {
  const number = getRandomNumber(max);
  const question = number;
  return cons(question, isPrime(number) ? 'yes' : 'no');
};

export default () => startGame(cons(condition, getPuzzle));

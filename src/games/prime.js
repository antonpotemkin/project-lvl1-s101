import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Answer "yes" if number prime otherwise answer "no".';
const max = 100;

const isPrime = (number) => {
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

const getPuzzle = () => {
  const number = getRandomNumber(max);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame({ condition, getPuzzle });

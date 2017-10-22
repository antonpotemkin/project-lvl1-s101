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
      return { question, correctAnswer: `${answer}` };
    }
    case '-': {
      const answer = firstNumber - secondNumber;
      return { question, correctAnswer: `${answer}` };
    }
    default: {
      const answer = firstNumber * secondNumber;
      return { question, correctAnswer: `${answer}` };
    }
  }
};

export default () => startGame({ condition, getPuzzle });

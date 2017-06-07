import { cons } from 'hexlet-pairs';

const getRandomNumber = max => Math.floor(Math.random() * max);

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const getCondition = (gameName) => {
  switch (gameName) {
    case 'even':
      return 'Answer "yes" if number even otherwise answer "no".\n';
    case 'calc':
      return 'What is the result of the expression?\n';
    default:
      return '\n';
  }
};

export const getQuestion = (gameName) => {
  switch (gameName) {
    case 'even': {
      const question = getRandomNumber(100);
      const correctAnswer = isEven(question);
      return cons(question, correctAnswer);
    }
    default: {
      const firstNumber = getRandomNumber(40);
      const secondNumber = getRandomNumber(10);
      const operations = ['+', '-', '*'];
      const operation = operations[getRandomNumber(3)];
      const question = `${firstNumber} ${operation} ${secondNumber}`;
      switch (operation) {
        case '+':
          return cons(question, firstNumber + secondNumber);
        case '-':
          return cons(question, firstNumber - secondNumber);
        default:
          return cons(question, firstNumber * secondNumber);
      }
    }
  }
};

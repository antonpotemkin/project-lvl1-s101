import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';

const getRandom = max => Math.floor(Math.random() * max);

export const getCondition = (gameName) => {
  switch (gameName) {
    case 'even':
      return 'Answer "yes" if number even otherwise answer "no".\n';
    default:
      return 'What is the result of the expression?\n';
  }
};
export const getText = str => readlineSync.question(str);

export const writeText = str => console.log(str);

export const getQuestion = (gameName) => {
  switch (gameName) {
    case 'even': {
      const question = getRandom(100);
      const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
      return cons(question, correctAnswer);
    }
    default: {
      const first = getRandom(40);
      const second = getRandom(10);
      const operations = ['+', '-', '*'];
      const operation = operations[getRandom(3)];
      const question = `${first} ${operation} ${second}`;
      switch (operation) {
        case '+':
          return cons(question, first + second);
        case '-':
          return cons(question, first - second);
        default:
          return cons(question, first * second);
      }
    }
  }
};

import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';

const getRandomNumber = max => Math.floor(Math.random() * max);

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionPair = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isEven(question);
  return cons(question, correctAnswer);
};

export default () => {
  const condition = 'Answer "yes" if number even otherwise answer "no".\n';
  const gameRule = cons(questionPair(), cons(questionPair(), cons(questionPair())));
  return startGame(cons(condition, gameRule));
};

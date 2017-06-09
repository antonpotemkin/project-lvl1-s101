import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const progressionLength = 10;

const getPuzzle = () => {
  const firstElement = getRandomNumber(20);
  const step = getRandomNumber(5) + 1;
  const progressionArray = [firstElement];
  while (progressionArray.length <= progressionLength) {
    progressionArray.push(firstElement + (step * progressionArray.length));
  }
  const indexOfAnswer = getRandomNumber(10);
  const answer = progressionArray[indexOfAnswer];
  progressionArray[indexOfAnswer] = '..';
  const progression = progressionArray.reduce((acc, element) => `${acc}${element} `, '');
  const question = `What number is missing in this progression?\n${progression}`;
  return cons(question, `${answer}`);
};

export default () => startGame(cons(condition, getPuzzle));

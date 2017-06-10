import { cons } from 'hexlet-pairs';
import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'What number is missing in this progression?';
const progressionLength = 10;

const getPuzzle = () => {
  const firstElement = getRandomNumber(20);
  const step = getRandomNumber(5) + 1;
  const progression = [firstElement];
  while (progression.length <= progressionLength) {
    progression.push(firstElement + (step * progression.length));
  }
  const indexOfAnswer = getRandomNumber(10);
  const answer = progression[indexOfAnswer];
  progression[indexOfAnswer] = '..';
  const question = progression.reduce((acc, element) => `${acc}${element} `, '');
  return cons(question, `${answer}`);
};

export default () => startGame(cons(condition, getPuzzle));

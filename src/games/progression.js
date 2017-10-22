import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition = 'What number is missing in this progression?';
const progressionLength = 10;
const max = 20;
const maxStep = 5;
const minStep = 1;

const generateProgression = () => {
  const firstElement = getRandomNumber(max);
  const step = getRandomNumber(maxStep, minStep);
  const progression = [firstElement];
  while (progression.length <= progressionLength) {
    progression.push(firstElement + (step * progression.length));
  }
  return progression;
};

const getPuzzle = () => {
  const progression = generateProgression();
  const indexOfAnswer = getRandomNumber(progression.length);
  const answer = progression[indexOfAnswer];
  progression[indexOfAnswer] = '..';
  const question = progression.reduce((acc, element) => `${acc}${element} `, '');
  return { question, correctAnswer: `${answer}` };
};

export default () => startGame({ condition, getPuzzle });

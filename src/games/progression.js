// @flow

import startGame from '../gameProcess';
import getRandomNumber from '../randomGenerator';

const condition: string = 'What number is missing in this progression?';
const progressionLength: number = 10;
const max: number = 20;
const maxStep: number = 5;
const minStep: number = 1;

const generateProgression: Function = () => {
  const firstElement: number = getRandomNumber(max);
  const step: number = getRandomNumber(maxStep, minStep);
  const progression: Array<string> = [`${firstElement}`];
  while (progression.length <= progressionLength) {
    const element: number = firstElement + (step * progression.length);
    progression.push(`${element}`);
  }
  return progression;
};

const getPuzzle: Object = () => {
  const progression: Array<string> = generateProgression();
  const indexOfAnswer: number = getRandomNumber(progression.length);
  const answer: string = progression[indexOfAnswer];
  progression[indexOfAnswer] = '..';
  const question: string = progression.reduce((acc, element) => `${acc}${element} `, '');
  return { question, correctAnswer: answer };
};

export default () => startGame({ condition, getPuzzle });

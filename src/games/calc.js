import { welcome, iter, exit } from './game';

export default () => {
  const gameName = 'calc';
  const name = welcome(gameName);
  const isWin = iter(gameName, 3);
  exit(isWin, name);
};

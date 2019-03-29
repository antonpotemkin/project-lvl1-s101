// @flow

export default (max: number,
  min: number = 0): number => Math.floor((Math.random() * (max - min)) + min);

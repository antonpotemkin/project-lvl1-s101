import readlineSync from 'readline-sync';

const getText = str => readlineSync.question(str);

const writeText = str => console.log(str);

const getRandom = max => Math.floor(Math.random() * max);

export default () => {
  writeText('Welcome to the Brain Games!');
  writeText('Answer "yes" if number even otherwise answer "no".\n');
  const name = getText('May I have your name? ');
  writeText(`Hello, ${name}!\n`);
  const gameRound = 3;
  for (let i = 0; i < gameRound; i += 1) {
    const number = getRandom(100);
    writeText(`Question: ${number}`);
    const answer = getText('Your answer: ');
    const even = number % 2 === 0 ? 'yes' : 'no';
    if (answer !== even) {
      writeText(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.`);
      writeText(`Let's try again, ${name}!`);
      return;
    }
    writeText('Correct!');
  }
  writeText(`Congratulations, ${name}!`);
};

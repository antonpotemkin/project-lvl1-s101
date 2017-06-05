import readlineSync from 'readline-sync';

export default () => {
	const name = readlineSync.question('\nMay I have your name? ');
	console.log(`Hello, ${name}!`);
};

install:
	npm install

start:
	npm run babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

lint:
	npm run eslint -- src

install: install-deps install-flow-typed

install-deps:
	npm install

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

check-types:
	npm run flow

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npm run eslint -- src

even:
	npm run babel-node -- src/bin/brain-even.js

calc:
	npm run babel-node -- src/bin/brain-calc.js

gcd:
	npm run babel-node -- src/bin/brain-gcd.js

balance:
	npm run babel-node -- src/bin/brain-balance.js

progression:
	npm run babel-node -- src/bin/brain-progression.js

prime:
	npm run babel-node -- src/bin/brain-prime.js

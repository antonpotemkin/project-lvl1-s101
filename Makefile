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
	npx babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint -- src

even:
	npx babel-node -- src/bin/brain-even.js

calc:
	npx babel-node -- src/bin/brain-calc.js

gcd:
	npx babel-node -- src/bin/brain-gcd.js

balance:
	npx babel-node -- src/bin/brain-balance.js

progression:
	npx babel-node -- src/bin/brain-progression.js

prime:
	npx babel-node -- src/bin/brain-prime.js

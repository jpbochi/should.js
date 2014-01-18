TESTS=$(shell find test -name *.test.js)

test:
	@./node_modules/.bin/mocha --ui exports --recursive $(TESTS)

browser:
	@browserify lib/browser.js -s Should --dg false -o should.js
	@browserify test/browser.js --dg false -o should.test.js

phantom: browser
	@./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

.PHONY: test browser

# ExpressJS & CasperJS Starter Kit

![alt text](https://github.com/dschinkel/express-casper-starterkit/blob/master/public/images/successful-test-run.png "Example Test Results")

This is a node.js project running [mocha-casperjs](https://github.com/nathanboktae/mocha-casperjs) and vanilla 
[express.js](expressjs.com).  For the tests are done via [mocha.js](https://mochajs.org/), and [chai.js](http://chaijs.com/) (expect).  There is no need to require
modules in your tests as mocha-casperjs resolves those for you at runtime automatically.

If you want to know how to wire up tests using casperjs over node.js
this project serves as an example of how to get mocha-casperjs up and running quickly and some example tests.

Be aware that "Bare Minimum" for this project means:

- there is no task automation built-in
- there is no process management or error-handling built-in
- there is no templating system being utilized

##  How to run

I'll add [gulp](http://gulpjs.com/) tasks for this soon, but for now it's manual running the test script.

###**How to setup**:

- Install [PhantomJS](http://phantomjs.org/)
- Double-check that phantom is indeed installed by running ````phantomjs -v````
- Clone down the repo
- Run ````npm install````

###**How to run tests**:

- to run the tests ````npm test````
- to kill the express server ````killall node````
- So after each test run, to re-run the tests, kill the node process then run ````npm test```` again
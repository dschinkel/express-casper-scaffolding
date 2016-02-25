# ExpressJS & CasperJS Starter Kit

This is a node.js project running [mocha-casperjs](https://github.com/nathanboktae/mocha-casperjs) and vanilla 
[express.js](expressjs.com).  

If you want to know how to wire up tests using casperjs over node.js
this project serves as an example of how to get mocha-casperjs up and running quickly and some example tests.

Be aware that "Bare Minimum" for this project means:

- there is no task automation built-in,
- there is no process management or error-handling built-in
- there is no templating system being utilized

##  How to run

I'll add [gulp](http://gulpjs.com/) tasks for this soon, but for now it's manual running the test script.

####_Please Note_: [pull request 85](https://github.com/nathanboktae/mocha-casperjs/pull/85)
 
There is a currently bug that I have submitted a fix for [mocha-casperjs](https://github.com/nathanboktae/mocha-casperjs).  
    That bug is in .\node_modules\mocha-casperjs\bin\cli.js

So until Nathan who administrates mocha-casperjs gets that change in, you'll need to apply the fix below.
  
**the fix**:
in   .\node_modules\mocha-casperjs\bin\cli.js, replace the line ````cliOptions = cli.parse(phantom.args),```` with cliOptions = ````cli.parse(require('system').args.slice(1)),````


###**How to setup**:

- Install [PhantomJS](http://phantomjs.org/)
- Double-check that phantom is indeed installed by running ````phantomjs -v````
- Clone down the repo
- Run ````npm install````
- Apply "the fix" above
   
###**How to run tests**:

- to run the tests ````npm test````
- to kill the express server - ````killall node````
- So after each test run, to re-run the tests, kill the node process first (step 5) then run ````npm test````
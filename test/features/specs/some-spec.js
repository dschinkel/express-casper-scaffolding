
"use strict";

var phantomPage = null;

describe('Feature: List Items', function() {
    before(function () {
        casper.start('http://localhost:4000');
        phantomPage = this;
    });

    describe('Scenario 1: No items are listed', function () {
        it('When I go to the main landing page', function () {
            casper.then(function () {
                expect(phantomPage).to.be.a('object');
            });
        });

        it('Then I should see that there are no items listed', function () {
            casper.then(function () {
                expect(this.fetchText('h3')).to.equal('No items found');
            });
        });
    });
});

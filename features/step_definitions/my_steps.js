var myStepDefinitionsWrapper = function () {
    this.World = require("../support/world.js").World; // overwrite default World constructor

    this.Given(/^I am on my app$/, function (callback) {
        callback.pending();
    });

    this.When(/^I open the controller$/, function (callback) {
        callback.pending();
    });

    this.Then(/^the name should be "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;
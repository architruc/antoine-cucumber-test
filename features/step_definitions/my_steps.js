var myStepDefinitionsWrapper = function () {
    this.World = require("../support/world.js").World; // overwrite default World constructor

    this.Given(/^I am on my app$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;
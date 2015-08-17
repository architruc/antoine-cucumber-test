/**
 * Created by ory-lamballe.antoine on 7/22/2015.
 */
// features/support/world.js
var zombie = require('zombie');




function World(callback) {
    var world = this;

    var browser = new zombie();
    //browser.open('test');
    // TODO replace baidu.com by a real web app url.
    // We could try to use it to load some libraries, like angular.
    // 'http://www.baidu.com'
    //var indexPath = __dirname + '\\..\\..\\public\\index.html';
    var indexPath = 'http://localhost:4000/spec-runner.html';
    browser.visit(indexPath, function(callbackParam) {
        GLOBAL.window = browser.window;
        GLOBAL.document = browser.window.document;

        try {
            //var angular = require('../../public/bower_components/angular');
            //console.log("window.angular:", window.angular);

            // fails to initialize angular in index.js:
            //    require('./angular');
            //    module.exports = angular;
            // angular global variable is not defined.
            // possible reason: global variables are not put into window variable, or the contrary... anyway, the
            // angular global variable is not set properly with this usage of zombie.
            // searching "zombiejs angular cucumber" on google (or variants) give almost no result.

            var angularMocks = require('../../public/bower_components/angular-mocks');

            //console.log("World - window.inject:", window.inject);                     // undefined
            //console.log("World - angular.mock.inject:", window.angular.mock.inject);  // undefined

            // inject is undefined. angular-mocks define them only if jasmine and mocka are already imported.
            // conclusion: cucumberjs (matching specs, not with wrappers like jasmine) is only suitable
            // for end-to-end tests with AngularJS.
            // Unit tests requires to inject angular modules, which does not seem to be possible, or too hard to use.



            world.browser = browser; // this.browser will be available in step definitions
            world.visit = world.browser.visit;
        } catch (e) {
            console.error(e.stack || e);
        }

        callback(); // tell Cucumber we're finished and to use 'this' as the world instance
    });
}
module.exports.World = World;
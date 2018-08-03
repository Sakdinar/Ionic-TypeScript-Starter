
import * as gulp from "gulp";
import { GulpPlugins } from "../gulp-types";
import { TaskFunc } from "orchestrator";

import * as del from "del";

/**
 * Removes the www/lib directory.
 */
module.exports = function(gulp: gulp.Gulp, plugins: GulpPlugins): TaskFunc {

    return function(cb) {

        del([
            "www/lib"
        ]).then(function () {
            cb();
        });
    };
};
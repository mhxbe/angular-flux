var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: 'src',
        livereload: true,
        port: 8040
    });
});

gulp.task('default', ['connect']);

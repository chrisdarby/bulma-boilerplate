var gulp = require('gulp');
var sass = require('gulp-sass');

//sass
gulp.task('sass', function () {
    gulp.src(['source/sass/*.sass'])
        .pipe(sass())
        .pipe(gulp.dest('assets/css/'));
});

//js
gulp.task('js', function () {
    gulp.src(['source/js/*.js'])
        .pipe(gulp.dest('assets/js/'));
});

// Default task
gulp.task('default', function () {
	gulp.start('sass');
	gulp.start('js');
});
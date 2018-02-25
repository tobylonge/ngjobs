var gulp = require('gulp');
var sass = require('gulp-sass');

//sass
gulp.task('sass', function () {
    gulp.src(['scss/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('css/'));
});

// Default task
gulp.task('sass:watch', function () {
    gulp.watch('./scss/*.scss', ['sass']);
});
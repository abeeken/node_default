var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('views', function() {
    return gulp.src('src/views/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./public'))
});
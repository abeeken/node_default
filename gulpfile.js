var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('views', function() {
    return gulp.src('src/views/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./public'))
});

gulp.task('sass', function(){
    return gulp.src('src/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
});

gulp.task('minicss', function(){
    return gulp.src('public/css/style.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/css'))
});

//gulp.task('build', gulp.series('clean', 'sass', 'minicss', 'makedist'), function(){});
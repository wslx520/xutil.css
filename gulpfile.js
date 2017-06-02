'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

let src = './scss';
let dest = './';

gulp.task('sass', function() {
    return gulp.src(`${src}/*.scss`)
        .pipe(sass({ 
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest(dest));
});

gulp.task('sass-min', function() {
    return gulp.src(`${src}/xutil.scss`)
        .pipe(sass({ 
            outputStyle: 'compressed'
        }).on('error', sass.logError))
		.pipe(rename(path => {
			path.basename += '.min';
		}))
        .pipe(gulp.dest(dest));
});

gulp.task('default', ['sass'], function() {
    gulp.watch(`${src}/*.scss`, ['sass']);
});

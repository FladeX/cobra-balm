var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');

gulp.task('less', function() {
	gulp.src('assets/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('coffee', function() {
	gulp.src('assets/coffee/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('concat-css', function() {
	gulp.src(['assets/css/reset.css', 'assets/css/fonts.css', 'assets/css/style.css'])
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css'))
});

gulp.task('concat-js', function() {
	gulp.src('assets/js/*.js')
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('js'))
});

gulp.task('default', ['less', 'coffee', 'concat-css', 'concat-js'], function() {
	gulp.watch('assets/less/*.less', ['less']);
	gulp.watch('assets/coffee/*.coffee', ['coffee']);
	gulp.watch('assets/css/*.css', ['concat-css']);
	gulp.watch('assets/js/*.js', ['concat-js']);
});

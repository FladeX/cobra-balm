var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('less', function() {
	gulp.src('assets/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('concat-css', function() {
	gulp.src(['assets/css/reset.css', 'assets/css/fonts.css', 'assets/css/style.css'])
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css'))
});

gulp.task('default', function() {
	gulp.watch('assets/less/*.less', function(event) {
		gulp.run('less');
	})

	gulp.watch('assets/css/*.css', function(event) {
		gulp.run('concat-css');
	})
});

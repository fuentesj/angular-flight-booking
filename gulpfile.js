var gulp 	= require('gulp');
var tslint = require('gulp-tslint');

gulp.task('lint:ts', function() {
	return gulp
		.src("src/app/**/*.ts")
		.pipe(tslint({
			formatter: "prose"
		}))
		.pipe(tslint.report())
});

gulp.task('watch', function() {
	gulp.watch("src/**/*.ts", ['lint:ts']);
})

gulp.task('default', ['lint:ts']);
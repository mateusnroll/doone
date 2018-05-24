const gulp    = require('gulp')
const sass    = require('gulp-sass')
const babel   = require('gulp-babel')
const nodemon = require('gulp-nodemon')
const watch   = require('gulp-watch')

gulp.task('dev', ['watch-sass', 'watch-js', 'nodemon'])

gulp.task('nodemon', () => {
	nodemon({
		exec: 'node --inspect',
		script: 'index.js',
		ext: 'js pug',
		env: { 'NODE_ENV': 'development' }
	})
})

gulp.task('watch-sass', () => {
	return watch('./app/styles/**/*.scss', () => { gulp.start('sass') })
})

gulp.task('sass', () => {
	return gulp.src('./app/styles/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build'))
})

gulp.task('watch-js', () => {
	return watch('./app/javascript/**/*.js', () => { gulp.start('js') })
})

gulp.task('js', () => {
	return gulp.src('./app/javascript/main.js')
		.pipe(babel())
		.pipe(gulp.dest('./build'))
})

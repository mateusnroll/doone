const gulp       = require('gulp')
const sass       = require('gulp-sass')
const babel      = require('gulp-babel')
const nodemon    = require('gulp-nodemon')
const watch      = require('gulp-watch')
const browserify = require('browserify')
const babelify   = require('babelify')
const source     = require('vinyl-source-stream')
const buffer     = require('vinyl-buffer')
const uglify     = require('gulp-uglify-es').default
const sourcemaps = require('gulp-sourcemaps')

gulp.task('dev', ['watch-sass', 'watch-js', 'watch-images', 'nodemon'])

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
	const b = browserify({
		entries: './app/javascript/main.js',
		debug: true
	});

	const babelifyConfig = {
		presets: ['@babel/preset-env']
	}

	return b
		.transform(babelify.configure(babelifyConfig))
		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./build'));
})

gulp.task('watch-images', () => {
	return watch('./app/images/**/*', () => { gulp.start('copy-images') })
})

gulp.task('copy-images', () => {
	return gulp
		.src('./app/images/**/*.svg')
		.pipe(gulp.dest('./build/images/'))
})

'use strict';

const gulp = require('gulp'),
	sass = require('gulp-dart-scss'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	minifyJs = require('gulp-uglify'),
	minifyCss = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	browserSync = require('browser-sync').create(),
	ts = require('gulp-typescript');
reload = browserSync.reload;

// # npm install --save-dev gulp gulp-dart-scss gulp-concat gulp-rename gulp-uglify gulp-clean-css gulp-autoprefixer
// gulp-plumber gulp-notify gulp-typescript typescript browser-sync

// # Process App CSS Files
gulp.task('styles', () => {
	return buildStyles([], 'public/path/to/dist', 'app');
});

// # Process App JS Files
gulp.task('scripts', () => {
	return buildScripts([], 'public/path/to/dist', 'app');
});

// # Process Polyfills
gulp.task('polyfills', () => {
	return buildScripts([], 'public/path/to/compiled', 'polyfills', false);
});

// # Copy defined assets
gulp.task('copy', () => {
	return copyFiles([]);
});

// # Browser sync task
gulp.task('browser-sync', () => {
	browserSync.init({
		proxy: assets().url,
		injectChanges: true,
		files: ['./public/path/to/dist/*.*', './path/to/views/**/*.*'],
	});
	gulp.watch('./path/to/views/**/*.*').on('change', reload);
	gulp.watch('./public/path/to/dist/*.js').on('change', reload);
});

// # Watch Files For Changes
gulp.task('watch', () => {
	gulp.watch('assets.json', gulp.series('asset-reload', 'build'));
	gulp.watch('./public/path/to/js/*.js', gulp.series('scripts'));
	gulp.watch('./public/path/to/scss/**/*.scss', gulp.series('styles'));
	gulp.watch('./resources/views/**/*.*');
});

// # Task Groups

gulp.task('build-public', gulp.parallel('styles', 'scripts'));
gulp.task('build', gulp.series('copy', 'build-public', 'polyfills'));
gulp.task('default', gulp.parallel('build', 'watch', 'browser-sync'));

// # Build Functions
function buildStyles(files, path, name) {
	return gulp
		.src(files)
		.pipe(plumber({ errorHandler: errorAlert }))
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(concat(name + '.css'))
		.pipe(gulp.dest(path))
		.pipe(browserSync.stream())
		.pipe(minifyCss())
		.pipe(rename(name + '.min.css'))
		.pipe(gulp.dest(path))
		.pipe(browserSync.stream());
}

function transpile() {
	const project = ts.createProject('tsconfig.json');

	return project
		.src()
		.pipe(project())
		.js.pipe(plumber({ errorHandler: errorAlert }))
		.pipe(gulp.dest('public/assets/js'));
}

function buildScripts(files, path, name, useBabel = true) {
	const project = ts.createProject('tsconfig.json');

	let pipe = project
		.src()
		.pipe(project)
		.pipe(plumber({ errorHandler: errorAlert }));
.pipe(concat(name + '.js'))
		.pipe(gulp.dest(path))
		.pipe(rename(name + '.min.js'))
		.pipe(gulp.dest(path));
}

function copyFiles(files) {
	let ret;

	for (let i = 0; i < files.length; i++) {
		ret = gulp.src(files[i][0]).pipe(gulp.dest(files[i][1]));
	}

	return ret;
}

// # Capture errors and send to console
function errorAlert(error) {
	notify.onError({
		title: 'Error: ' + error.message,
		message: error.fileName + '\n' + 'Line ' + error.lineNumber,
	})(error);
	console.log('Error: ' + error.toString());
	this.emit('end');
}

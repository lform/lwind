'use strict';

const gulp = require('gulp'),
	sass = require('gulp-dart-scss'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	minifyJs = require('gulp-terser'),
	minifyCss = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	browserSync = require('browser-sync').create(),
	ts = require('gulp-typescript'),
	postcss = require('gulp-postcss'),
	reload = browserSync.reload;

const distPath = `${assets().public_path}/dist`;
const url = assets().url;

// # Process App CSS Files
gulp.task('styles:site', () =>
	buildTailwind(assets().collections.tailwind, distPath, 'app')
);

gulp.task('styles:editor', () =>
	buildTailwind(assets().collections.editor, distPath, 'editor')
);

gulp.task('styles', gulp.parallel('styles:site', 'styles:editor'));

// # Process App JS Files
gulp.task('scripts:transpile', () => transpile());

gulp.task('scripts:compile', () => {
	return buildScripts(assets().collections.scripts, distPath, 'app');
});

gulp.task('scripts', gulp.series('scripts:transpile', 'scripts:compile'));

// # Process Polyfills
gulp.task('polyfills', () => {
	return buildScripts(assets().collections.polyfills, distPath, 'polyfills');
});

// # Copy defined assets
gulp.task('copy', () => {
	return copyFiles(assets().collections.copy);
});

// # Browser sync task
gulp.task('browser-sync', () => {
	browserSync.init({
		proxy: url,
		injectChanges: true,
		files: [`${distPath}/*.*`, './resources/views/**/*.*'],
	});
	gulp.watch('./resources/views/**/*.*').on('change', reload);
	gulp.watch(`${distPath}/*.js`).on('change', reload);
});

// # Watch Files For Changes
gulp.task('watch', () => {
	gulp.watch('./public/assets/js/*.ts', gulp.series('scripts'));
	gulp.watch('./public/assets/scss/**/*.scss', gulp.series('styles'));
	gulp.watch('./public/assets/tailwind/**/*.pcss', gulp.series('styles'));
	gulp.watch('./resources/views/**/*.*');
});

// # Task Groups
gulp.task(
	'build',
	gulp.series('copy', gulp.parallel('styles', 'scripts', 'polyfills'))
);
gulp.task('default', gulp.parallel('build', 'watch', 'browser-sync'));

// # Build Functions
function buildStyles(files, path, name) {
	return gulp
		.src(files)
		.pipe(plumber({ errorHandler: errorAlert }))
		.pipe(
			sass({
				includePaths: ['./public/assets/scss', './node_modules'],
			})
		)
		.pipe(autoprefixer())
		.pipe(concat(name + '.css'))
		.pipe(gulp.dest(path))
		.pipe(browserSync.stream())
		.pipe(minifyCss())
		.pipe(rename(name + '.min.css'))
		.pipe(gulp.dest(path))
		.pipe(browserSync.stream());
}

function buildTailwind(files, path, name) {
	return gulp
		.src(files)
		.pipe(plumber({ errorHandler: errorAlert }))
		.pipe(postcss())
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

function buildScripts(files, path, name) {
	return gulp
		.src(files, { allowEmpty: true })
		.pipe(plumber({ errorHandler: errorAlert }))
		.pipe(concat(name + '.js'))
		.pipe(gulp.dest(path))
		.pipe(minifyJs())
		.pipe(rename(name + '.min.js'))
		.pipe(gulp.dest(path));
}

function copyFiles(fileList) {
	let pipe;

	for (let file of fileList) {
		pipe = gulp.src(file[0]).pipe(gulp.dest(file[1]));
	}

	return pipe || new Promise((resolve) => resolve());
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

// # Read Assets file
function assets() {
	return require('./assets');
}

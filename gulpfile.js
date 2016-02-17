var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sequence = require('gulp-sequence');
var jshint = require('gulp-jshint');
var shell = require('shelljs');
var TaikuApp = require('electron-connect').server.create();

var CURRENT_ENVIRONMENT = 'development';


gulp.task('watch', function() {
  TaikuApp.start();

  // create a child process for webpack --watch
  shell.exec('webpack --watch', {
    async: true
  });

  // reload when files are changed
  gulp.watch([
    './build/TaiKu.bundled.js',
    './_index.html',
    './src/public/css/**'
  ], TaikuApp.reload);

  // reload when styles are changed
  /*gulp.watch([
    './src/public/less/**'
  ], ['less']);*/
});

gulp.task('compile', function(){
  return gulp.src('src/**/*.{js,jsx}')
    .pipe($.babel({
      stage: 0
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('linter:src', function() {
  return gulp
    .src([
      './src/modules/**/*.js',
      './src/models/**/*.js',
      './src/views/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', function(callback) {
  CURRENT_ENVIRONMENT = 'development';
  sequence(
    'linter:src'
    //'less',
    //'html',
    //'env',
    //'webpack'
  )(callback);
});
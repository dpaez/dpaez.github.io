/**
 * dk_spot gulpfile
 */

/** gulp **/
var gulp = require( 'gulp' );

/** gulp plugins **/
var jade = require( 'gulp-jade' );
var stylus = require( 'gulp-stylus' );
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');


/* extra */
var nib = require( 'nib' );
var opn = require('opn');

/* paths */
var paths = {
  JADE    : './tpl/*.jade',
  STYL    : './css/**/*.styl',
  CSSALL  : './css/**/*.css',
  CSSDEST : './css/',
  JSALL   : './js/**/*.js',
  JSSRC   : './js/src/*.js',
  JSAPP   : './public/app.js',
  CSSAPP  : './public/app.css',
  PUBLIC  : './public/'
}

/** gulp tasks **/
gulp.task( 'jade', function() {
  var YOUR_LOCALS = {};

  gulp.src( paths.JADE )
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe( gulp.dest('.') );
});

gulp.task( 'stylus', function () {
  gulp.src( paths.STYL )
    .pipe( stylus({use: [nib()]}) )
    .pipe( gulp.dest(paths.CSSDEST) );
});

gulp.task('connect', ['build'], function(done) {
  connect.server({
    root: '.',
    livereload: true
  });

  opn('http://localhost:8080', done);
});


gulp.task('concatJS', function() {
  gulp.src( [paths.JSSRC, './js/main.js'] )
    .pipe( concat('app.js') )
    .pipe( gulp.dest(paths.PUBLIC) )
});

gulp.task('concatCSS', function () {
  gulp.src( ['./css/main.css', './style.css'] )
    .pipe( concatCss('app.css') )
    .pipe( gulp.dest(paths.PUBLIC) );
});

gulp.task('compressJS', function() {
  gulp.src( paths.JSAPP )
    .pipe( uglify('app.min.js', {
      mangle: false,
      output: {
        beautify: true
      }
    }))
    .pipe( gulp.dest(paths.PUBLIC) )
});

gulp.task('compressCSS', function() {
  gulp.src( paths.CSSAPP )
    .pipe( minifyCSS() )
    .pipe( gulp.dest(paths.PUBLIC) )
});

// $ gulp connect

// $ gulp watch
gulp.task('watch', function() {
  gulp.watch(paths.JADE, ['jade']);
  gulp.watch(paths.STYL, ['stylus']);
  gulp.watch(paths.JSALL, ['concatJS']);
  gulp.watch(paths.CSSALL, ['concatCSS']);
});

gulp.task( 'build', ['jade', 'stylus', 'production'] );
gulp.task( 'concatALL', ['concatJS', 'concatCSS'] );
gulp.task( 'compressALL', [ 'compressJS', 'compressCSS'] );
gulp.task( 'production', ['concatALL', 'compressALL'] );
gulp.task( 'style', ['stylus'] );
gulp.task( 'template', ['jade'] );
gulp.task( 'serve', ['connect', 'watch'] );
gulp.task( 'default', ['build']);
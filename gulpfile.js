/**
 * dk_spot gulpfile
 */

/** gulp **/
var gulp = require( 'gulp' );

/** gulp plugins **/
var jade = require( 'gulp-jade' );
var stylus = require( 'gulp-stylus' );
var connect = require('gulp-connect');

/* extra */
var nib = require( 'nib' );
var opn = require('opn');

/* paths */
var paths = {
  JADE : './tpl/*.jade',
  STYL : './css/**/*.styl',
  CSS  : './css/'
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
    .pipe( gulp.dest(paths.CSS) );
});

gulp.task('connect', ['build'], function(done) {
  connect.server({
    root: '.',
    livereload: true
  });

  opn('http://localhost:8080', done);
});


// $ gulp connect

// $ gulp watch
gulp.task('watch', function() {
  gulp.watch(paths.JADE, ['jade']);
  gulp.watch(paths.STYL, ['stylus']);
});

gulp.task( 'build', ['jade', 'stylus']);
gulp.task( 'style', ['stylus'] );
gulp.task( 'template', ['jade'] );
gulp.task( 'serve', ['connect', 'watch'] );
gulp.task( 'default', ['build']);
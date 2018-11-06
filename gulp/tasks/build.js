import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import {paths} from '../paths';
import * as utils from '../utils';
import runSequence from 'run-sequence';

gulp.task('build', (done) => {
  utils.log('Building project');
  const buildTasks = ['clean', 'create-dist', 'create-min-dist'];
  buildTasks.push(done);
  runSequence(...buildTasks);
});

gulp.task('create-dist', () => {
  gulp.src(`${paths.src}/*.js`)
      .pipe(concat('lib.js'))
      .pipe(gulp.dest(`${paths.build}/`))
});

gulp.task('create-min-dist', () => {
  gulp.src(`${paths.src}/*.js`)
      .pipe(concat('lib.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(`${paths.build}/`))
});
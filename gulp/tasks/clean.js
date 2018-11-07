import gulp from 'gulp';
import {clean} from '../utils';
import {paths} from '../paths';

gulp.task('clean-build', () => {
  return clean([paths.build]);
});

gulp.task('clean-demo', () => {
  return clean([`${paths.demo}/lib.js`]);
});

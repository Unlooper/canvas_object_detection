import gulp from 'gulp';
import {clean} from '../utils';
import {paths} from '../paths';

gulp.task('clean', () => {
  return clean([paths.build]);
});
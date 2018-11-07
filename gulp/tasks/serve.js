import gulp from 'gulp';
import browserSync from 'browser-sync';
import {paths} from '../paths';

const localConfig = {
  browserSyncOptions: {
    baseDir: "./",
    server: 'demo',
    notify: false,
    port: 8080,
    reloadDelay: 1000,
    open: true,
    ghostMode: false,
    ui: {
      port: 8081
    }
  }
};

gulp.task('js-watch', ['build'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('serve', () => {
  browserSync.create();
  browserSync.init(localConfig.browserSyncOptions);
  gulp.watch([`${paths.src}/*.js`, `${paths.demo}/*.html`, `${paths.demo}/*.css`], ['js-watch']);
});
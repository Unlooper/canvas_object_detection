import gulp from 'gulp';
import browserSync from 'browser-sync';

const localConfig = {
  browserSyncOptions: {
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

gulp.task('serve', () => {
  browserSync(localConfig.browserSyncOptions);
});
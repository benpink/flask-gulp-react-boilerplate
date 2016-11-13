import del from 'del';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import runSequence from 'run-sequence';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import webpack from 'webpack-stream';

const dirs = {
  src: './src',
  dest: './static'
};

let webpackConfigPath = './webpack.dev.config.js';

if (process.env.NODE_ENV === 'production') {
  webpackConfigPath = './webpack.prod.config.js';
}

// Delete dest dir
gulp.task('clean', () => {
  return del(dirs.dest);
});

// Image optimization
gulp.task('images', () => {
  return gulp.src(`${dirs.src}/images/*`)
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest(`${dirs.dest}/images`));
});

// CSS compilation
gulp.task('sass', () => {
  return gulp.src(`${dirs.src}/sass/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(`${dirs.dest}/css`));
});

gulp.task('jsx', () => {
  return gulp.src(`${dirs.src}/js/index.jsx`)
    .pipe(webpack(require(webpackConfigPath)))
    .pipe(gulp.dest(`${dirs.dest}/js`));
});

gulp.task('lint', () => {
  return gulp.src(['src/**/*.jsx', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Watch tasks
gulp.task('watch', () => {
  gulp.watch(`${dirs.src}/images/*`, ['images']);
  gulp.watch(`${dirs.src}/**/*.scss`, ['sass']);
  gulp.watch(`${dirs.src}/**/*.jsx`, ['jsx']);
});

// gulp default
// builds js/css/images
gulp.task('default', ['lint'], () => {
  runSequence('clean', ['images', 'sass', 'jsx']);
});

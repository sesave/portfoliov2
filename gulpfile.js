var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
function style() {
  return gulp
    .src("./dist/scss/**/*.scss")
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest(`./dist/css`))
    .pipe(browserSync.stream());
}
function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch('./dist/scss/**/*.scss',style);
  gulp.watch('./dist/*.html').on('change',browserSync.reload);
  gulp.watch('./dist/js/**/*.js').on('change',browserSync.reload);
}
exports.style = style;
exports.watch = watch;
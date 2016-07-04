var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

gulp.task('pug', function(){
  return gulp.src(['./src/**/*.pug'])
  .pipe(pug())
  .pipe(gulp.dest('./build/'))
  .pipe(livereload());
});

gulp.task('less', function(){
  return gulp.src(['./src/**/*.less'])
  .pipe(less())
  .pipe(gulp.dest('./build/'))
  .pipe(livereload());
});

gulp.task('js', function(){
  return gulp.src(['./src/**/*.js'])
  .pipe(gulp.dest('./build/'))
  .pipe(livereload());
});

gulp.task('livereload-listen', function(){
  livereload.listen();
});

gulp.task('watch', function(){
  gulp.watch('./src/**/*.pug', ['pug']);
  gulp.watch('./src/**/*.less', ['less']);
  gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('default', ['pug', 'less', 'js', 'livereload-listen', 'watch']);
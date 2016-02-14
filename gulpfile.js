var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


gulp.task('sass', function(){
  gulp.src(['dev/scss/main.scss'])
    .pipe(sass({
      outputStyle: 'compact'
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function(){
  gulp.src(['dev/js/*.js'])
    //.pipe(uglify({
    //  outSourceMap: false
    //}))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('images', function(){
  gulp.src(['dev/images/*'])
    //.pipe((imagemin({ optimizationLevel: 7, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./public/images'));
});

gulp.task('watch', function(){
  gulp.watch('dev/**/*.js', ['scripts']);
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/images/*', ['images']);
});

gulp.task('default',
  ['sass', 'scripts', 'images', 'watch']
);
var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    minifyCSS  = require('gulp-minify-css'),
    uglify     = require('gulp-uglify'),
    rename     = require("gulp-rename");
    sass       = require('gulp-sass');

gulp.task('styles', function () {
    gulp.src('./public/stylesheets/scss/**/*.scss') 
        .pipe(sass())
        .pipe(gulp.dest('./public/stylesheets/'));
});
gulp.task('concat', ['styles'], function() {
    return gulp.src([
                      './public/stylesheets/*.css',
                    ])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./public/stylesheets/build/'));
});

gulp.task('minify-css',['concat'], function() {
    return gulp.src('./public/stylesheets/build/all.css')
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./public/stylesheets/build/'));
});

gulp.task('_watch', function(){
  var logEvent = function(event, task) {
    console.log('File ' + event.path + ' was ' + event.type + ', running ' + task + ' ...');
  };

  // watch css
  gulp
    .watch(['public/stylesheets/scss/'+'/*.scss'], ['styles'])
    .on('change', function(event) { logEvent(event, 'styles') });
  gulp
    .watch(['public/stylesheets/*.css'],['concat'])
    .on('change', event => logEvent(event, 'styles'));

});
gulp.task('watch',['styles','concat','minify-css','_watch']);
gulp.task('default',['styles','concat','minify-css']);

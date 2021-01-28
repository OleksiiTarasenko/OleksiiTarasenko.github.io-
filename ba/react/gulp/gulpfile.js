const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();


 
gulp.task('autoprefixer', function(cb) {
    return gulp.src('app/scss/**/*.scss')
        .pipe(autoprefixer({
            cascade: false,
                 }))
        .pipe(gulp.dest('dist'));
    cb();
});
    

gulp.task('sass', function(cb){
    return gulp.src('dist/scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({
        stream: true
      }));
      cb();
  });
  gulp.task('useref', function(cb){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cssnano()))
       .pipe(gulp.dest('dist'));
      cb();
  });
  gulp.task('images', function(){
    return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
  });

  gulp.task('browserSync', function(cb) {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
    cb();
  })

  gulp.task('watch',  function(cb){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
    cb();
      }) 

 


  gulp.task('default',  gulp.series('sass','autoprefixer','useref' , 'images', 'browserSync','watch')
  )
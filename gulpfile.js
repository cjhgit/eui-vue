const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const minify = require('gulp-clean-css')

const SRC = './src/components'

gulp.task('theme:style', function () {
  return gulp.src([SRC + '/*/theme.less'])
      .pipe(concat('theme.less'))
      .pipe(gulp.dest('./less'))
})

gulp.task('theme:var', function () {
  return gulp.src([SRC + '/*/var.less'])
      .pipe(concat('theme-vars.less'))
      .pipe(gulp.dest('./less'))
})

gulp.task('theme:less', function () {
  return gulp.src([SRC + '/styles/colors.less', SRC + '/styles/mixins.less', SRC + '/styles/vars.less'])
      .pipe(gulp.dest('./less'))
})

gulp.task('theme', ['theme:var', 'theme:style', 'theme:less'], function () {
  return gulp.src(SRC + '/styles/themes/*.less')
             .pipe(less())
             .pipe(rename({
               dirname: '',
               prefix: 'theme-',
               extname: '.css'
             }))
             .pipe(gulp.dest('./dist'))
             .pipe(minify())
             .pipe(rename({
               suffix: '.min'
             }))
             .pipe(gulp.dest('./dist'))
})

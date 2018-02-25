var gulp = require('gulp');
var sass = require('gulp-sass')
var path = require('path')
var fileinclude = require('gulp-file-include')
var autoprefixer = require('gulp-autoprefixer')
var plumber = require('gulp-plumber')

var paths = {
  static: path.join(__dirname, 'src/static/'),
  assets: path.join(__dirname, 'src/assets/'),
  pages: {
    sass: path.join(__dirname, 'src/scss/'),
    html: path.join(__dirname, 'src/html/')
  },
  build: path.join(__dirname, 'build')
}

gulp.task('build-sass', function () {
  console.log('Building sass')
  return gulp.src(paths.pages.sass + '/main.scss')
    .pipe(plumber(function (err) {
      console.log('Build Sass Error')
      console.log(err)
      this.emit('end')
    }))
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./build/assets/css/'))
})

gulp.task('build-html', function () {
  console.log('Building html')
  gulp.src(paths.pages.html + '*.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./build'))
})

gulp.task('copy-assets', function () {
  console.log('Copying assets')
  gulp.src([paths.assets + '**/*'])
    .pipe(gulp.dest('./build/assets'))
})

gulp.task('copy-static', function () {
  console.log('Copying static files')
  gulp.src([paths.static + '**/*'])
    .pipe(gulp.dest('./build'))
})

gulp.task('init', function () {
  gulp.watch(paths.pages.sass + '**/*.scss', ['build-sass'])
  gulp.watch(paths.pages.html + '**/*.html', ['build-html'])
  gulp.watch(paths.assets + '**/*.*', {cwd:'./'}, ['copy-assets'])
})

gulp.task('default', ['build-sass', 'build-html', 'copy-assets', 'copy-static'])

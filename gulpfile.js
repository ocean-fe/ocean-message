var gulp = require('gulp');
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');
// ES6转化为ES5
gulp.task("toes5", function () {
  return gulp.src(["index.js","message.js"])// ES6 源码存放的路径
    .pipe(babel({
      presets: ['@babel/env']
  })) 
    .pipe(gulp.dest("ES5dist")); //转换成 ES5 存放的路径
});

gulp.task('compress', function () {
 return gulp.src(['ES5dist/index.js','ES5dist/message.js'])
          .pipe(uglify())
          .pipe(gulp.dest('gulp/dist'))
});

gulp.task('default', gulp.series('toes5','compress'));

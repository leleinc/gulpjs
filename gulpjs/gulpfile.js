//包含gulp   
var gulp = require('gulp');

//包含我们的插件   

var lint = require('gulp-jshint');
//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//lint task  

// gulp.task('lint', function() {
//     gulp.src('./js/*.js')
//         .pipe(lint())
//         .pipe(lint.reporter('default'));
// });

//编译sass  

// gulp.task('sass', function() {
//     gulp.src('./scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./css'));
// });

//拼接、简化JS文件   

gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

//默认任务   
gulp.task('default', function() {
    gulp.run('scripts');

    //监视我们JS文件的变化   
    gulp.watch('./js/*.js', function() {
        gulp.run('lint', 'scripts');
    });

    //监视scss文件的变化   
    // gulp.watch('./scss/*.scss', function() {
    //     gulp.run('sass');
    // });
});
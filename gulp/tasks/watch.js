var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


//this uses the gulp-watch plugin
gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        browserSync.reload();
    });


    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });


});

//dependencies inside the []!!!! - completes the tasks inside the bracket first before doing the cssInject!
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});
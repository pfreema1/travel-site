var gulp = require('gulp');
var postcss = require('gulp-postcss');
//import autoprefixer
var autoprefixer = require('autoprefixer');
//import post css simple vars
var cssvars = require('postcss-simple-vars');
//import post css nesting
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');


gulp.task('styles', function() {

    //include return because gulp.src is asynchronous
    //here this merely copies styles.css to the temp folder
    //return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));


    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log("***************ERROR****************");
            console.log(errorInfo.toString());
            console.log("*************************************");
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));


    console.log("hello from the gulpfile!");
});
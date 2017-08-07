const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

//Copy dev folder to final folder
gulp.task('copy', () => {
    gulp.src('src/**/*')
        .pipe(gulp.dest('build'));
});

//Minify the CSS
gulp.task('concat-css', () => {
    gulp.src('build/assets/**/*.css')
        .pipe(concat("assets/css/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/'));
});

//Delete the build folder before pushing updates
gulp.task('delete', () => {
    del(['build/**']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});

//Keep a default task
gulp.task('default', ['copy', 'concat-css']);

//Watch for file changes
gulp.task('watch', () => {
    gulp.watch('src/**/*', ['copy']);
    gulp.watch('build/assets/**/*.css', ['concat-css']);
});
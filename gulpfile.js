const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

gulp.task('copy', () => {
    gulp.src('src/**/*')
        .pipe(gulp.dest('build'));
});

gulp.task('concat-css', () => {
    gulp.src('build/assets/**/*.css')
        .pipe(concat("assets/css/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/'));
});

gulp.task('delete', () => {
    del(['build/**']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});

gulp.task('default', ['copy', 'concat-css']);

gulp.task('watch', () => {
    gulp.watch('src/**/*', ['copy']);
    gulp.watch('build/assets/**/*.css', ['concat-css']);
});
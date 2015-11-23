var eslint     = require('gulp-eslint'),
    gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    server     = require('gulp-server-livereload');

gulp.task('lint', function() {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('sass', function() {
    return gulp.src('./node_modules/materialize-css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.js', ['lint']);
});

gulp.task('serve', function() {
    gulp.src('.')
        .pipe(server({
            defaultFile: 'src/index.html',
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['lint', 'watch'], function() {
    // This will only run if the lint task is successful...
});
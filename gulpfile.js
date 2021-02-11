const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const rigger = require('gulp-rigger');
const watch = require('gulp-watch');
const sourcemap = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const config = {

    server: {

        baseDir: "./dist"

    },

    tunnel: false,

    host: 'localhost',

    port: 3333

};

var path = {
    build: { // Куда складывать готовые файлы после сборки
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { // Откуда брать исходники
        html: 'app/*.html',
        js: 'app/js/**/*.js',
        css: 'app/css/*.css',
        img: 'app/img/*.*',
        fonts: 'app/fonts/**/*.*',
        details: 'app/details/*.html',
        imgMin: 'app/img/*.png',
    },
    watch: { // За изменениями каких файлов мы хотим наблюдать
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        css: 'app/css/*.css',
        img: 'app/img/**.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './dist'
};

gulp.task('html:build', async function () {
    gulp.src(path.src.html) // Выберем файлы по нужному пути
        .pipe(rigger()) // Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) // Переместим их в папку build
        .pipe(browserSync.stream());
});

gulp.task('html:det', async function () {
    gulp.src(path.src.details) // Выберем файлы по нужному пути

         // Переместим их в папку build
        .pipe(browserSync.stream());
});


gulp.task('css:build', async function () {
    gulp.src(path.src.css) // Выберем файлы по нужному пути
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: false
        })) // Прогоним через autoprefixer
        .pipe(gulp.dest(path.build.css)) // Переместим их в папку build
        .pipe(browserSync.stream());
});
gulp.task('js:build', async function () {
    gulp.src(path.src.js) // Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemap.write())
        .pipe(gulp.dest(path.build.js)) // Переместим их в папку build
        .pipe(browserSync.stream());
});

gulp.task('img:build', function () {
    return    gulp.src(path.src.img) // Выберем файлы по нужному пути
        .pipe(gulp.dest(path.build.img))// Переместим их в папку build
        .pipe(imagemin())
        .pipe(browserSync.stream());
});


gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts) // Выберем файлы по нужному пути
        .pipe(gulp.dest(path.build.fonts)) // Переместим их в папку build
        .pipe(browserSync.stream());
});

gulp.task('watch', async function() {

    browserSync.init(config);

    gulp.watch(path.src.css, gulp.series('css:build')).on('change', browserSync.reload);
    gulp.watch(path.src.img, gulp.series('img:build')).on('change', browserSync.reload);
    gulp.watch(path.src.fonts, gulp.series('fonts:build')).on('change', browserSync.reload);

    gulp.watch(path.src.details, gulp.series('html:det')).on('change', gulp.task('html:build'));
    gulp.watch(path.src.js, gulp.series('js:build')).on('change', browserSync.reload);

    gulp.watch(path.src.html,  gulp.series('html:build')).on('change', browserSync.reload);

});

gulp.task('default', gulp.parallel('html:build', 'css:build', 'js:build', 'fonts:build', 'html:det', 'watch'));

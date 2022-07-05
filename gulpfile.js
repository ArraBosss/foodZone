const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const del = require('del');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

const htmlInclude = () => {
    return src([
        'app/html/pages/*.html'
]) 
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file',
    }))
    .pipe(dest('app')) 
    .pipe(browserSync.stream());
  };

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    });
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src([          
            'app/js/tabs.js',
            'app/js/parallax.js',
            'app/js/select.js',
            'app/js/phoneinput.js',
            'node_modules/swiper/swiper-bundle.min.js',
            'app/js/slider.js',
            'app/js/main.js'  
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

function svgSprites() {
    return src('app/images/icons/*.svg')
        .pipe(cheerio({
            run: ($) => {
                $("[fill]").removeAttr("fill");
                $("[stroke]").removeAttr("stroke");
                $("[style]").removeAttr("style");
            },
            parserOptions: { xmlMode: true },
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: '../sprite.svg',
                    },
                },
            })
        )
        .pipe(dest('app/images'));
}

function cleanDist() {
    return del('dist');
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/**/*.html']).on('change', browserSync.reload);
    watch(['app/images/icons/*.svg'], svgSprites);
    watch(['app/images/sprite.svg*']).on('change', () => {
        browserSync.reload("*");
    });
    watch(['app/html/**/*.html'], htmlInclude);
}



exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.svgSprites = svgSprites;
exports.htmlInclude = htmlInclude;
exports.browsersync = browsersync;



exports.default = parallel(htmlInclude, svgSprites, styles, scripts, browsersync, watching);
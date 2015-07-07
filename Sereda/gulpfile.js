var gulp = require('gulp');

var gutil = require('gulp-util');
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
.pipe(plugins.svg2png())

gulp.task('svgSprite', function () {

    return gulp.src(paths.sprite.src)
        .pipe(plugins.svgo())
        .pipe(plugins.svgSprite({
            "mode": {
                "css": {
                    "spacing": {
                        "padding": 5
                    },
                    "dest": "./",
                    "layout": "diagonal",
                    "sprite": "img/sprite.svg",
                    "bust": false,
                    "render": {
                        "scss": {
                            "dest": "css/src/_sprite.scss",
                            "template": "build/tpl/sprite-template.scss"
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest(basePaths.dest));

});

gulp.task('pngSprite', ['svgSprite'], function() {
    return gulp.src(basePaths.dest + paths.sprite.svg)
        .pipe(plugins.svg2png())
        .pipe(gulp.dest(paths.images.dest));
});

gulp.task('sprite', ['pngSprite']);
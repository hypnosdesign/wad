// init gulp
const gulp        = require('gulp'),
      maps        = require('gulp-sourcemaps'),
      concat      = require('gulp-concat'),
      imagemin    = require('gulp-imagemin'),
      stylus      = require('gulp-stylus'),
      beautify    = require('gulp-beautify'),
      uglify      = require('gulp-uglify'),
      plumber     = require('gulp-plumber'),
      pug         = require('gulp-pug'),
      prefix      = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create(),
      reload      = browserSync.reload,

      when        = require('gulp-if'),
      argv        = require('yargs').argv,
      del         = require('del'),
      typographic = require('typographic');

/***********************
 * BROWSER SYNC
 **********************/
gulp.task('browser-sync', () => {
    return browserSync.init({
        server: { baseDir: "./app" },
        browser: 'google chrome canary',
        host: "localhost",
        open: true,
        notify: false,
        port: 3000
    });
});

// Directory Paths

const dir = {

  app: {
    base:  './app',
    css:   './app' + '/css',
    img:   './app' + '/img',
    js:    './app' + '/js'
  },

  src: {
    base:  './src',
    styl:  './src' + '/stylus',
    img:   './src' + '/images',
    js:    './src' + '/js',
    views: './src' + '/views'
  }

}


/***********************
 * TASKS
 **********************/

// HTML

gulp.task('html', ()=>{
  return gulp.src(dir.src.views + '/**/*.pug')
    .pipe(plumber())
    .pipe( when(argv.production,
      pug({pretty:false}),
      pug({pretty: true})
      )
    )
    .pipe(gulp.dest(dir.app.base))
      .pipe(browserSync.reload({stream: true}))
});

// stylus

gulp.task('stylus', ()=> {
  
  return gulp.src(dir.src.styl + '/app.styl')
    .pipe(plumber())
    .pipe(maps.init({loadMaps: true}))
    .pipe( when(argv.production,
      stylus({lineos: false, compress: true}),
      stylus({linenos: true})
      )
    )
    .pipe(prefix())
    .pipe(maps.write('.'))
    .pipe(gulp.dest(dir.app.css))
      .pipe(browserSync.reload({stream: true}))
})

// JS

gulp.task('js', ()=> {
  return gulp.src([
    //'./src/js/libs/jquery.js',
    './src/js/libs/p5/p5.js',
    './src/js/libs/p5/p5.dom.js',
    //'./src/js/libs/p5/p5.sound.js',
    './src/js/app.js'
    ])
    .pipe(plumber())
    .pipe(maps.init({loadMaps: true}))
    .pipe(concat('app.js'))
    .pipe( when(argv.production,
      uglify(),
      beautify()
      )
    )
    .pipe(maps.write('.'))
    .pipe(gulp.dest(dir.app.js))
      .pipe(browserSync.reload({stream: true}))
})

// images

gulp.task('img-min', () => {
  return gulp.src(dir.src.img + '/**/*')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(dir.app.img))
      .pipe(browserSync.reload({stream: true}))
})

// delete maps

gulp.task('clean-maps', ['html', 'stylus', 'js','img-min'] ,()=>{

    return del([
      dir.app.base + '/**/*.map',
      !dir.app.base + '/**'
    ])
  }
)


// watch

gulp.task('watch', ()=> {
  gulp.watch(dir.src.views + '/**/*.pug', ['html']);
  gulp.watch(dir.src.styl + '/**/*.styl', ['stylus']);
  gulp.watch(dir.src.js + '/**/*.js', ['js']);
  gulp.watch(dir.src.img + '/**/*', ['img-min']);
})


// default

if(argv.production){
  gulp.task('default', ['browser-sync','clean-maps'])
} else {
  gulp.task('default', ['html', 'stylus', 'js','img-min','browser-sync','watch'])
}
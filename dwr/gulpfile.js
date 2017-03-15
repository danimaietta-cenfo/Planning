var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//Synchronize the browser with the app folder
gulp.task('browserSync', function(){
   browserSync.init({
     server: {
       baseDir: 'WebContent'
     }
   })
});

// Actualize the scss, html and js files
gulp.task('watch', ['browserSync'], function(){
   gulp.watch('WebContent/*.html', browserSync.reload);
   //gulp.watch('WebContent/js/*.js');
});

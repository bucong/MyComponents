var gulp=require('gulp');
var less=require('gulp-less');
var concat=require('gulp-concat');
var minifyCss=require('gulp-minify-css');
var rename=require('gulp-rename');

//编译less
gulp.task('less',function(){
    return gulp.src(['./www/less/*.less'])
        .pipe(less())//合并
        .pipe(gulp.dest('./www/css'));//合并路径
});

//合并css文件
gulp.task('concat-minify-rename-css',['less'],function(){
    gulp.src('./www/css/*.css')
        .pipe(concat('main.css'))//合并后的文件名
        .pipe(gulp.dest('./www/css-dist'))//合并后的路径
        .pipe(minifyCss())
        .pipe(rename({suffix:'.min'}))//后缀名添加min表示压缩文件
        .pipe(gulp.dest('./www/css-dist'));
});

gulp.task('build-css',['concat-minify-rename-css']);
//自动化改变，监听less文件
gulp.task('watch-css',function(){
    gulp.watch('./www/less/*.less',function(){
        gulp.start('less');//只编译less
        //gulp.start('build-css');//编译less并压缩css文件
    })
});


//先安装全局gulp
//	cnpm install gulp -g
//安装包
//	cnpm init
//	cnpm install gulp --save
//less编译
//	cnpm install gulp-less --save
//css合并
//	cnpm install gulp-concat --save
//css压缩
//	cnpm install gulp-minify-css --save
//css改名
//	cnpm install gulp-rename --save
//
//执行gulp功能
//	在同级新建www文件夹，里面添加less文件夹，写入若干个less文件
//	运行git，输入gulp watch-css
//	（1）全部功能
//	gulp watch-css
//	（2）只编译less文件，不合并压缩，相当于koala的功能
//	gulp watch-css
//	修改gulp.start('build-css')为gulp.start('less');
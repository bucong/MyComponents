$(function(){
    //基于jquery使用：需要全屏放大的图片添加 class="show-big-img"
    $('.show-big-img').click(function(){
        let src = $(this).attr('src');
        let str = `<div class="big-img" style="position: fixed;top: 0;left: 0;z-index: 1000;width: 100%;height: 100%;background: rgba(0,0,0,.6);">
            <img src="${src}" style="position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin: auto;max-width: 100%;" alt="">
        </div>`;
        $('body').append(str);
    });
    $('body').on('click','.big-img',function(){
        $(this).hide();
    })
});
;
(function() {
    //1.默认隐藏返回顶部
    $('.gotop').hide()
        //注册滚动事件
    $(window).scroll(function() {
            let top = $('html').scrollTop()
            if (top > 200) {
                //滚动快了不会没有显示 stop()
                $('.gotop').stop().fadeIn()
            } else {
                $('.gotop').stop().fadeOut()

            }
        })
        // 2.点击返回顶部操作
    $('.gotop').click(function() {
        $('html').animate({
            scrollTop: 0
        })
    })

    //3.点击展开/收起右侧盒子
    $('.suggest').click(function() {
            $('.sugform').slideDown()
        })
        //点击关闭 关闭盒子
    $('.close').click(function() {
        $('.sugform').slideUp()
    })



    //自动轮播效果
    //拿到最后一张图片 返回的是jquery对象 所以用$开头
    function autoPlay() {
        let $last = $('.wblist').last()
        let wbdesc = $('.wbdesc')

        //放到父元素的开头
        wbdesc.prepend($last)
            //把图片向上移动到$last的高度  outerHeight(true)是带margin的高度
        let height = $last.outerHeight(true)
            //往上走是-height
        wbdesc.css('top', -height)
            //添加动画延迟 因为不是立即播放的  改变的属性就是-height 往下移动所以是0
        wbdesc.delay(2000).animate({
            top: 0
        }, function() {
            autoPlay()
        })
    }
    autoPlay()
})()
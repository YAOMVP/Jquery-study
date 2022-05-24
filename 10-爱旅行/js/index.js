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
        // 2.点击返回顶部
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

})()
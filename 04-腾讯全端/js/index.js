// 自调用函数(自执行函数)
;
//顶部高亮
(function() {
    $(window).scroll(function() {
        let top = $('html').scrollTop()
        if (top === 0) {
            $('.header').removeClass('scrolled')
        } else {
            $('.header').addClass('scrolled')
        }
    })

    //页面>200 返回顶部小方块显示
    $(window).scroll(function() {
            let top = $('html').scrollTop()
            if (top > 200) {
                // $('.gotop').css('display', 'block')  //改成动画效果 show(一定要加时间)显示 hide(一定要加时间)隐藏
                $('.gotop').show(1000)
            } else {
                // $('.gotop').css('display', 'none')
                $('.gotop').hide(1000)
            }
        })
        //点击小方块返回顶部
    $('.gotop').click(function() {
        // $('html').scrollTop(0)
        //添加动画效果
        $('html').animate({
            scrollTop: 0
        })
    })
})()
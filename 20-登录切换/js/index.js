(function() {
    //点击a添加/移除高亮
    $('.label').click(function() {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        //对应的显示图片也相应的更改
        //😊设置了自定义属性
        let id = $(this).attr('data-label')
        $(id).css('display', 'block')
        $(id).siblings().css('display', 'none')
    })

    //安全切换
    $('.icon').click(function() {
        let isActive = $(this).hasClass('active')
        if (isActive === false) {
            $(this).addClass('active')
            $(this).siblings().removeClass('active')

            //对应的显示图片也相应的更改
            //😊设置了自定义属性
            let id = $(this).attr('data-label')
            $(id).css('display', 'block')
            $(id).siblings().css('display', 'none')
        } else {
            $('.label').last().trigger('click')
        }
    })
})()
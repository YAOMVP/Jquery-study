(function() {
    //设置初始字数为0
    $('.words span').text(0)

    //没有字数发送按钮禁用
    $('.publish_btn').addClass('disabled')

    //添加高亮效果
    $('.input-box textarea').on('focus', function() {
            $(this).parent().addClass('actived')
        })
        //移除高亮效果
    $('.input-box textarea').on('blur', function() {
        $(this).parent().removeClass('actived')
    })

    //字数统计
    $('.input-box textarea').on('input', function() {
        let value = $(this).val()
        let length = value.length
        $('.words span').text(length)
            //有字数发送按钮启用状态 无字数发送按钮禁用状态
        if (length === 0) {
            $('.publish_btn').addClass('disabled')
        } else {
            $('.publish_btn').removeClass('disabled')
        }
    })
})()
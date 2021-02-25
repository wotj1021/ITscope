var g = ''
var k = ''
    $('.menu > li').on('click', function(){
        $('.sub_menu').stop().slideUp(300)
        g = $(this).index() + 1
        if(k == g){
            $(this).find('.sub_menu').stop().slideUp(300)
            k = 0
        } else {
            $(this).find('.sub_menu').stop().slideDown(300)
            k = g
        }
    })
$(function(){
    $('.mainvisual').slidesjs({
        width: 976, height: 617,
        play: {auto: true, effect: "fade"},
        navigation: false,
        pagination: {effect: true},
        effect: {fade: {speed: 400}}
      })
})
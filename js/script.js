$(function(){
    $('.thumbs-item').mouseover(function(){
        $(this).find('.thumbs-item-title').css({
            color: '#444'
        });
        $(this).find('.thumbs-item-cover').css({
            background: 'linear-gradient(rgba(153,129,64,0.8),rgba(153,129,64,0.8)),url(img/thumb.jpg) no-repeat'
        });
    });

    $('.thumbs-item').mouseout(function(){
        $(this).find('.thumbs-item-title').css({
            color: '#9B8440'
        });

        $(this).find('.thumbs-item-cover').css({
            background: 'url(img/thumb.jpg) no-repeat'
        });
    });

    $(".fancybox").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none'
    });
});

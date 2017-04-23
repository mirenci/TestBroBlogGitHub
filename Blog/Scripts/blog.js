$(function () {
    var article = $('.article div');
    //var articleContent = $('.articleWrapperAnchor div p');
    //var author = $('.author');

    article.hover(function () {
        // on mousein, change the background color
        $(this).css('background-color', '#b9be9c');
        //$(this).children('.articleContent').css('color', 'white');
        //author.css('color', 'white');
        //console.log($(this).children('.articleContent'));
    }, function () {
        // on mouseout, reset the background color
        $(this).css('background-color', 'white');
        //$(this).children('p').css('color', '#3d3f34');
        //author.css('color', '#b4bcc2');
        });

    
});
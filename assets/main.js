jQuery(document).ready(function ($) {

    $('nav li a').click(function(e){
        e.preventDefault();
        let articleID = $(this).attr('href');
        let article = $(articleID);
        let articleTop = article.offset().top;

        $("html, body").animate({ scrollTop: articleTop }), 3000;
    });

    $('.backToTop').click(function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1500);
    });
});

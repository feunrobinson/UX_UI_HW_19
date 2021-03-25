//jQuery Smooth Scroll
$('.navigation a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash= this.hash;

       $('html, body').animate({
           scrollTop: $(hash).offset().top
       }, 800
    );
    }
});
//logo click
$('.logo').on('click', function(e){
    $("html,body").animate({'scrollTop':0}, 2000)
});
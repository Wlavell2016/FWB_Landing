$('#purpose').on("click", function(event){
    $('#purpose1').addClass('active1')
    $('#vision1').removeClass('active1')
    $('#goal1').removeClass('active1')
    $('.introbox').fadeIn(2000)
    $('.introbox2_2').css('display', 'none')
    $('.introbox3_2').css('display', 'none')
})

 $('#vision').on("click", function(event){
     $('#vision1').addClass('active1')
     $('#purpose1').removeClass('active1')
     $('#goal1').removeClass('active1')
     $('.introbox2_2').fadeIn(2000)
     $('.introbox').css('display', 'none')
     $('.introbox3_2').css('display', 'none')
})

$('#goal').on("click", function(event){
    $('#goal1').addClass('active1')
    $('#purpose1').removeClass('active1')
    $('#vision1').removeClass('active1')
    $('.introbox3_2').fadeIn(2000)
    $('.introbox2_2').css('display', 'none')
    $('.introbox').css('display', 'none')
})

// programme

$('#strat1').on("click", function(event){
    $('#strat1').addClass('active1')
    $('#object1').removeClass('active1')
    $('#outcome1').removeClass('active1')
    $('.box1').fadeIn(2000)
    $('.box2').css('display', 'none')
    $('.box3').css('display', 'none')
})

 $('#object1').on("click", function(event){
     $('#object1').addClass('active1')
     $('#outcome1').removeClass('active1')
     $('#strat1').removeClass('active1')
     $('.box2').fadeIn(2000)
     $('.box1').css('display', 'none')
     $('.box3').css('display', 'none')
})

$('#outcome1').on("click", function(event){
    $('#outcome1').addClass('active1')
    $('#object1').removeClass('active1')
    $('#strat1').removeClass('active1')
    $('.box3').fadeIn(2000)
    $('.box1').css('display', 'none')
    $('.box2').css('display', 'none')
})

// js for about page
$('.text1_1').on("click", function(event){
    $('.introbox').fadeIn(1000).css('display', 'flex')
    $('.introbox3').css('display', 'none')
    $('.introbox2').css('display', 'none')
})

 $('.text2_2').on("click", function(event){
     $('.introbox2').fadeIn(1000).css('display', 'flex')
     $('.introbox3').css('display', 'none')
     $('.introbox').css('display', 'none')
})

$('.text3_3').on("click", function(event){
    $('.introbox3').fadeIn(1000).css('display', 'flex')
    $('.introbox').css('display', 'none')
    $('.introbox2').css('display', 'none')
})

// js for about page testimonials
$('#testimonial_button_1').on("click", function(event){
    $('#testimonial_button_1').addClass('about_active')
    $('#testimonial_button_2').removeClass('about_active')
    $('#testimonial_button_3').removeClass('about_active')
    $('#testimonial_button_4').removeClass('about_active')
    $('.card1').fadeIn(1000)
    $('.card2').css('display', 'none')
    $('.card3').css('display', 'none')
    $('.card4').css('display', 'none')
})

 $('#testimonial_button_2').on("click", function(event){
     console.log('fired')
     $('#testimonial_button_2').addClass('about_actives')
     $('#testimonial_button_1').removeClass('about_active')
     $('#testimonial_button_3').removeClass('about_active')
     $('#testimonial_button_4').removeClass('about_active')
     $('.card2').fadeIn(1000)
     $('.card1').css('display', 'none')
     $('.card3').css('display', 'none')
     $('.card4').css('display', 'none')
})

$('#testimonial_button_3').on("click", function(event){
    $('#testimonial_button_3').addClass('about_actives')
    $('#testimonial_button_2').removeClass('about_actives')
    $('#testimonial_button_1').removeClass('about_actives')
    $('#testimonial_button_4').removeClass('about_actives')
    $('.card3').fadeIn(1000)
    $('.card2').css('display', 'none')
    $('.card1').css('display', 'none')
    $('.card4').css('display', 'none')

})

$('#testimonial_button_4').on("click", function(event){
    $('#testimonial_button_4').addClass('about_active2')
    $('#testimonial_button_2').removeClass('about_active2')
    $('#testimonial_button_3').removeClass('about_active2')
    $('#testimonial_button_1').removeClass('about_active2')
    $('.card4').fadeIn(1000)
    $('.card2').css('display', 'none')
    $('.card3').css('display', 'none')
    $('.card1').css('display', 'none')

})

$('.navbar-toggler-icon').on("click", function(event){
    console.log('fired')
    $('#navbarNavDropdown').css('background-color','#373944');
});

$('.form').submit(function() {
    $('.form_row').css('display', 'none');
    $('.form_submitted').css('display', 'flex');
});

// for updating nav bar color
var viewportHeight = $(window).height();
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > viewportHeight) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo/Logo_no_text.png').css('width', '61px').css('height', '71px')
            } else if (window.matchMedia("(min-width: 768px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo/Logo_no_text.png').css('width', '61px').css('height', '71px')
            } else if (window.matchMedia("(min-width: 300px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo/Logo_no_text.png').css('width', '51px').css('height', '61px')
            } else {
                console.log('ok')
            }
        } else {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo/Logo.png').css('width', '111px').css('height', '121px')
            } else if (window.matchMedia("(min-width: 768px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo/Logo.png').css('width', '111px').css('height', '121px')

            } else if (window.matchMedia("(min-width: 300px)").matches) {
                $(".navbar").removeClass("nav3");
                $('a.navbar-brand img').attr('src', 'images/logo/Logo.png').css('width', '71px').css('height', '81px')

            } else {
                console.log('ok')
            }
        }
    })
})

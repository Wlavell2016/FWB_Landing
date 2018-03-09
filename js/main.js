$('#purpose').on("click", function(event){
    $('#purpose1').addClass('active')
    $('#vision1').removeClass('active')
    $('#goal1').removeClass('active')
    $('.introbox').fadeIn(2000)
    $('.introbox2_2').css('display', 'none')
    $('.introbox3_2').css('display', 'none')
})

 $('#vision').on("click", function(event){
     $('#vision1').addClass('active')
     $('#purpose1').removeClass('active')
     $('#goal1').removeClass('active')
     $('.introbox2_2').fadeIn(2000)
     $('.introbox').css('display', 'none')
     $('.introbox3_2').css('display', 'none')
})

$('#goal').on("click", function(event){
    $('#goal1').addClass('active')
    $('#purpose1').removeClass('active')
    $('#vision1').removeClass('active')
    $('.introbox3_2').fadeIn(2000)
    $('.introbox2_2').css('display', 'none')
    $('.introbox').css('display', 'none')
    // $('.photo2').css('backgroundImage','url(images/people/hugging.jpg)');
})

// js for about page
$('#text_1').on("click", function(event){
    $('#text_1').addClass('about_active')
    $('#text_2').removeClass('about_active')
    $('#text_3').removeClass('about_active')
    $('.intro_row_content1').fadeIn(2000)
    $('.intro_row_content2').css('display', 'none')
    $('.intro_row_content3').css('display', 'none')
    $('.introbox').css('background-image','url(images/objects/recon.jpg)')
})

 $('#text_2').on("click", function(event){
     console.log('fired')
     $('#text_2').addClass('about_active')
     $('#text_1').removeClass('about_active')
     $('#text_3').removeClass('about_active')
     $('.intro_row_content2').fadeIn(2000)
     $('.intro_row_content1').css('display', 'none')
     $('.intro_row_content3').css('display', 'none')
     $('.introbox').css('background-image','url(images/objects/dress.jpg)')
})

$('#text_3').on("click", function(event){
    $('#text_3').addClass('about_active')
    $('#text_1').removeClass('about_active')
    $('#text_2').removeClass('about_active')
    $('.intro_row_content3').fadeIn(2000)
    $('.intro_row_content2').css('display', 'none')
    $('.intro_row_content1').css('display', 'none')
    $('.introbox').css('background-image','url(images/objects/flowers.jpg)')
console.log("fired")
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

// for updating nav bar color
var viewportHeight = $(window).height();
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > viewportHeight) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo/Logo_no_text.png').css('width', '91px').css('height', '101px')
            } else if (window.matchMedia("(min-width: 768px)").matches) {
                $(".navbar").addClass('nav3')
                $('a.navbar-brand img').attr('src', 'images/logo/Logo_no_text.png').css('width', '91px').css('height', '91px')
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
                $('a.navbar-brand img').attr('src', 'images/logo/Logo.png').css('width', '81px').css('height', '91px')

            } else {
                console.log('ok')
            }
        }
    })
})

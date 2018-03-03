$('#purpose').on("click", function(event){
    $('#purpose1').addClass('active')
    $('#vision1').removeClass('active')
    $('#goal1').removeClass('active')
    $('.photo2').css('backgroundImage','url(images/top_photos/childrenpowwow1.jpg)');
    $('#image3').css('backgroundImage','url(images/top_photos/smilingBaby.jpg)');
    $('#image2').css('backgroundImage','url(images/top_photos/drumming.jpg)');
    $('#image1').css('backgroundImage','url(images/actions/dancing.jpg)');
    $('#image1').css('backgroundImage','url(images/actions/dancing.jpg)');
    $('.purpose_text').css('display', 'block')
    $('.vision_text').css('display', 'none')
    $('.goal_text').css('display', 'none')
})

 $('#vision').on("click", function(event){
     $('#vision1').addClass('active')
     $('#purpose1').removeClass('active')
     $('#goal1').removeClass('active')
     $('.photo2').css('backgroundImage','url(images/top_photos/smudging.jpg)');
     $('#image1').css('backgroundImage','url(images/people/smiling_dancer.jpg)');
     $('#image2').css('backgroundImage','url(images/places/fire.jpg)');
     $('#image3').css('backgroundImage','url(images/people/motherdaughter1.jpg)');
     $('.vision_text').css('display', 'block')
     $('.purpose_text').css('display', 'none')
     $('.goal_text').css('display', 'none')
})

$('#goal').on("click", function(event){
    $('#goal1').addClass('active')
    $('#purpose1').removeClass('active')
    $('#vision1').removeClass('active')
    $('.photo2').css('backgroundImage','url(images/people/hugging.jpg)');
    $('#image1').css('backgroundImage','url(images/people/dancing_elders.jpg)');
    $('#image2').css('backgroundImage','url(images/people/community.jpg)');
    $('#image3').css('backgroundImage','url(images/top_photos/stones.jpg)');
    $('.goal_text').css('display', 'block')
    $('.vision_text').css('display', 'none')
    $('.purpose_text').css('display', 'none')
console.log("fired")
})

// js for about page
$('#text_1').on("click", function(event){
    $('#text_1').addClass('about_active')
    $('#text_2').removeClass('about_active')
    $('#text_3').removeClass('about_active')
    $('.intro_row_content1').css('display', 'flex')
    $('.intro_row_content2').css('display', 'none')
    $('.intro_row_content3').css('display', 'none')
    $('.introbox').css('background-image','url(images/objects/recon.jpg)')

})

 $('#text_2').on("click", function(event){
     console.log('fired')
     $('#text_2').addClass('about_active')
     $('#text_1').removeClass('about_active')
     $('#text_3').removeClass('about_active')
     $('.intro_row_content2').css('display', 'flex')
     $('.intro_row_content1').css('display', 'none')
     $('.intro_row_content3').css('display', 'none')
     $('.introbox').css('background-image','url(images/objects/dress.jpg)')
})

$('#text_3').on("click", function(event){
    $('#text_3').addClass('about_active')
    $('#text_1').removeClass('about_active')
    $('#text_2').removeClass('about_active')
    $('.intro_row_content3').css('display', 'flex')
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
    $('.testimonal1').css('display', 'flex')
    $('.testimonal2').css('display', 'none')
    $('.testimonal3').css('display', 'none')
    $('.testimonal4').css('display', 'none')

})

 $('#testimonial_button_2').on("click", function(event){
     console.log('fired')
     $('#testimonial_button_2').addClass('about_actives')
     $('#testimonial_button_1').removeClass('about_actives')
     $('#testimonial_button_3').removeClass('about_actives')
     $('#testimonial_button_4').removeClass('about_actives')
     $('.testimonal2').css('display', 'flex')
     $('.testimonal1').css('display', 'none')
     $('.testimonal3').css('display', 'none')
     $('.testimonal4').css('display', 'none')
})

$('#testimonial_button_3').on("click", function(event){
    $('#testimonial_button_3').addClass('about_actives')
    $('#testimonial_button_2').removeClass('about_actives')
    $('#testimonial_button_1').removeClass('about_actives')
    $('#testimonial_button_4').removeClass('about_actives')
    $('.testimonal3').css('display', 'flex')
    $('.testimonal1').css('display', 'none')
    $('.testimonal2').css('display', 'none')
    $('.testimonal4').css('display', 'none')
console.log("fired")
})

$('#testimonial_button_4').on("click", function(event){
    $('#testimonial_button_4').addClass('about_active2')
    $('#testimonial_button_2').removeClass('about_active2')
    $('#testimonial_button_3').removeClass('about_active2')
    $('#testimonial_button_1').removeClass('about_active2')
    $('.testimonal4').css('display', 'flex')
    $('.testimonal1').css('display', 'none')
    $('.testimonal3').css('display', 'none')
    $('.testimonal2').css('display', 'none')
})
$('.navbar-toggler-icon').on("click", function(event){
    console.log('fired')
    $('#navbarNavDropdown').css('background-color','#373944');
});

// for updating nav bar color
var viewportHeight = $(window).height();
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > viewportHeight) {
          $(".navbar").addClass('nav3')
           // $('a.navbar-brand img').attr('src','images/logo/Logo_no_text.png').css('width','6.93vw').css('height','10.625vh')
           // $('a.navbar-brand img').attr('src','images/logo/Logo_no_text.png').css('width', '91px').css('height','101px')
	  }
	  else{
          $(".navbar").removeClass("nav3");
          // $('a.navbar-brand img').attr('src','images/logo/Logo.png').css('width', '91px').css('height','101px')
          // $('a.navbar-brand img').attr('src','images/logo/Logo.png').css('width', '111px').css('height','121px')
          // $('a.navbar-brand img').attr('src','images/logo/Logo.png').css('width', '121','height','121')
	  }
  })
})

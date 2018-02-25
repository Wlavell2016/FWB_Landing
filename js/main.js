$('#purpose').on("click", function(event){
    $('#purpose1').addClass('active')
    $('#vision1').removeClass('active')
    $('#goal1').removeClass('active')
    $('.photo2').css('backgroundImage','url(images/top_photos/childrenpowwow1.jpg)');
    $('#image3').css('backgroundImage','url(images/top_photos/smilingBaby.jpg)');
    $('#image2').css('backgroundImage','url(images/top_photos/drumming.jpg)');
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
    $('.about_photo2').css('backgroundImage','url(images/objects/dress.jpg)');
    $('.about_text_1').css('display', 'flex')
    $('.about_text_2').css('display', 'none')
    $('.about_text_3').css('display', 'none')
})

 $('#text_2').on("click", function(event){
     console.log('fired')
     $('#text_2').addClass('about_active')
     $('#text_1').removeClass('about_active')
     $('#text_3').removeClass('about_active')
     $('.about_photo2').css('backgroundImage','url(images/objects/recon.jpg)');
     $('.about_text_2').css('display', 'flex')
     $('.about_text_1').css('display', 'none')
     $('.about_text_3').css('display', 'none')
})

$('#text_3').on("click", function(event){
    $('#text_3').addClass('about_active')
    $('#text_1').removeClass('about_active')
    $('#text_2').removeClass('about_active')
    $('.about_photo2').css('backgroundImage','url(images/people/flowers.jpg)');
    $('.about_text_3').css('display', 'flex')
    $('.about_text_2').css('display', 'none')
    $('.about_text_1').css('display', 'none')
console.log("fired")
})

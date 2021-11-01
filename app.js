$(document).ready(function(){
    $('.image-link').magnificPopup({type:'image'});

    $('.link-foto-2').magnificPopup({
        type: 'image'
    })

    $('.video-play').magnificPopup({
        type: 'iframe'
    })
});

$(document).ready(function(){
    $('image-link').fotorama({
        type:'image'
    })

    $('link-foto-2').fotorama({
        type: 'image'
    })
})
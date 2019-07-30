$( document ).ready(function() {
    $('.trigger-modal').on('click', function(){
        console.log('ehllo')
        $('.modal').addClass('modal--visible');
    })

    $('.modal__close').on('click', function(){
        $('.modal').removeClass('modal--visible');
    })
});
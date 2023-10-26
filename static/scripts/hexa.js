let hexa = document.querySelector('.hexa');
let rotacion = 0;
$(document).ready(function(){
    $('.izquierda').click(function(){
        rotacion = rotacion -45;
        $(hexa).css('transform', 'rotateY('+rotacion+'deg)');
    })
    $('.derecha').click(function(){
        rotacion = rotacion +45;
        $(hexa).css('transform', 'rotateY('+rotacion+'deg)');
    })

    //$('.arriba').click(function(){
    //    $(hexa).css('transform', 'rotateX(-45deg)');
    //})
    //$('.abajo').click(function(){
    //    $(hexa).css('transform', 'rotateX(45deg)');
    //})


    // $('.izquierda').mouseleave(function(){
    //     $(hexa).css('transform', 'rotateY(0deg)');
    // })
    // $('.derecha').mouseleave(function(){
    //     $(hexa).css('transform', 'rotateY(0deg)');
    // })
//
    //
    //
    //$('.arriba').mouseleave(function(){
    //    $(hexa).css('transform', 'rotate3d(1,1,0,0deg)');
    //})
    //$('.abajo').mouseleave(function(){
    //    $(hexa).css('transform', 'rotate3d(1,1,0,0deg)');
    //})

})

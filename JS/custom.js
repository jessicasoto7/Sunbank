$(document).ready(function(){

    var checkScrollBar = function(){
      $('.navbar').css({
        backgroundColor: $(this).scrollTop() > 1 ?
          'rgb(225, 173, 1)' : 'transparent'
      })

      $('.dropdown-menu').css({
        backgroundColor: $(this).scrollTop() > 1 ?
          'rgb(225, 173, 1)' : 'transparent'
      })
    }
    $(window).on('load resize scroll', checkScrollBar)
    });
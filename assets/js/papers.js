//=require ./lib/jqueryui
//=require_tree ./lib
//=require_tree ./paper

$(function(){
  $(window).scroll(function(){
      $('.leftpart').css({
          'left': -1 * $(this).scrollLeft(),
          'top': Math.max(0,50-$(this).scrollTop())
      });
  });
});
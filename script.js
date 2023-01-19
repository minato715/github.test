new Swiper('.swiper', {
  // Optional parameters
  speed:600,
  width:274,
  spaceBetween: 20,
  loopedSlides: 6,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
    clickable: true,
  },

  breakpoints: {
    768: {
     width: 400,
     spaceBetween: 40,
    }
  }
});

$(function() {
  $( '.accordion__q' ).on('click', function() {
   $(this).next().slideToggle();
   $(this).children('.accordion__icon').toggleClass('is-open');
  })
});


$(function() {
  //drawerjs
  $( '.drawer' ).drawer()

$('.drawer-menu a[href]').on('click' , function(event) {
  $('.drawer-hamburger').trigger('click');
});

// smoothscroll
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight();
  let speed = 500;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate(
    {
      scrollTop: position - $( '#js-header' ).outerHeight()
    },
    speed
  );
  return false;
});


//wowjs
new WOW().init();


 //googleform
 let $form = $( '#js-form' )
 $form.submit(function (e) {
   $.ajax({
     url: $form.attr('action'),
     data: $form.serialize(),
     type: "POST",
     dataType: "xml",
     statusCode: {
       0: function () {
         //送信に成功した時の処理
         $form.slideUp()
         $( '#js-success' ).slideDown()
       },
       200: function () {
         //送信に失敗した時の処理
         $form.slideUp()
         $( '#js-error' ).slideDown()
       }
     }
   });

   return false;
   });


})

/*======================================
pageTop
======================================*/
$(window).scroll(
  function () {
    // ページの一番上から100pxスクロールしたら表示
    // 100を150にする150pxとなる
   if ($(window).scrollTop() > 100) {
     // .fadeInで表示300は表示されるまでの時間大きくなればゆっくり
        $('.js_pageTop_move').fadeIn(300);
   } else {
        $('.js_pageTop_move').fadeOut(300);
   }
});

$(function(){
  $( '.js_pageTop_move' ).click(
    function()
    {
      // [id:move-page-top]をクリックしたら起こる処理
      $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
    }
  ) ;
})

/*======================================
swiper
======================================*/
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});

/*======================================
drawer
======================================*/
$(function() {
 $('.js_drawer_toggle').on('click', function () {
  $(this).toggleClass('open');
  $('.bl_gnav_list').toggleClass('open');
  $('.js_drawer_icons').toggleClass('open');
  $('.js_drawer_layer').toggleClass('open');
  $('.js_drawer_close').toggleClass('open');
  $('body').toggleClass('open');
 });
});

/*======================================
ページ内リンク
======================================*/
$(function(){
  $('a[href^="#"]').click(function(){

    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".ly_header").innerHeight(); 

    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");

    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);

  // ページのトップを基準にターゲットの位置を取得
    // let position = jQuery(target).offset().top;

  // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;

  // ターゲットの位置までspeedの速度で移動
  $( 'html,body' ).animate( {scrollTop:position} , 'slow' ) ;
  });
  return false;
});

/*======================================
ページ内リンクのクリックイベント
======================================*/
$(function(){
  jQuery('.bl_gnav_item a').click(function(){
  jQuery('.bl_gnav_item a').removeClass('bl_gnav_item__underRed');
  jQuery(this).addClass('bl_gnav_item__underRed');
  return false;
  });
});

/*======================================
Q&Aアコーディオン
======================================*/
$(function(){
  jQuery('.bl_qa_que').click(
    function(){
      jQuery(this).next().slideToggle();
      jQuery(this).children('.js_qa_icon').toggleClass( 'js_qa_open');
    });
});

/*======================================
モーダル
======================================*/
$(function(){
  $('.js_modal_open').on('click',function(){
      $('.js_modal').fadeIn();
      return false;
  });

  $('.js_modal_close').on('click',function(){
      $('.js_modal').fadeOut();
      return false;
  });
  
  $('.js_modal_toggle').on('click',function(){
    $(this).toggleClass('open');
    $('body').toggleClass('open');
});
});
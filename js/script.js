$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });
});

$(function() {
  // 変数にクラスを入れる
  var btn = $('.page-top');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });

  // //スクロールしてトップへ戻る
  // btn.on('click',function () {
  //   $('body,html').animate({
  //     scrollTop: 0
  //   });
  // });
});


//   // ページトップフェードアウト
// window.onscroll = function () {
//   var check = window.pageYOffset ;       //現在のスクロール地点 
//   var docHeight = $(document).height();   //ドキュメントの高さ
//   var dispHeight = $(window).height();    //表示領域の高さ

//   if(check > docHeight-dispHeight-50){   //フッターからの距離です
//       $('.page-top').fadeOut(300);	//300 はフェードアウトの速度です。調整可

//   }else{
//       $('.page-top').fadeIn(300);	//300 はフェードインの速度です。調整可
//   }
// };

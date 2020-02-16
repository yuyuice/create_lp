//slickの設定を記述する！
//この書き方で、htmlの読み込みが完了してから処理が実行されるようにこれで囲む。
$(function(){
  //スライドに使用する要素を指定するためにセレクタにslideshowを指定する。
  //プラグインで提供されているメソッド（slick）を使って、スライドショーの設定をしている。
  $('.slideshow').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
});
//imgを入れる。
var img = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];

//countというvariableに0というvalueをあげる。
count = 0;
imgTimer();

function imgTimer() {
  //arrayの5個目（４つ目）になったら、０になる。
  if(count == img.length) count = 0;
  //htmlのnameのtravelを取って、
  //そのelementのsrcっていうattribute（src）のvalue（img1とかimg2とか）を次のものに変える。
  document.travel.src = img[count];
  count++;
  //1秒後に、imgTimer()をcallしてる。
  setTimeout("imgTimer()", 1000);
}
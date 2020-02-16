let album = [
  { src: 'img/なみかアメリカ前.jpg', msg: 'ハーブ園' },
  { src: 'img/好きなパン.JPG', msg: '２' },
  { src: 'img/ベルリン.jpg', msg: '３' },
  { src: 'img/デンマーク　スマホ_170704_0235.jpg', msg: '４' },
  { src: 'img/大学.jpg', msg: '５' },
];

let mainImage = document.createElement('img');
mainImage.setAttribute('src,', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainImage.innerHTML = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

//サムネイル画像の表示
//要素を取得している
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++); {
  let thumbImage = document.createElement('img')
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbImage.insertBefore(thumbFlame, null);
};

//クリックした画像をメインにする
//クリックイベントに登録しているこれ
thumbFlame.addEventListener('click', function (event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});

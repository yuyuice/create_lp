function multiplication(a, b) {
  //リターンの後に書いていることをリターンしている。
  return a * b;
}

function submitMultiplication () {
  //ボタンを押す。計算したやつを取って、答えをspanに入れる。
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const multi = multiplication(num1, num2);

  //spanに入れる
  const answer = document.getElementById("result");
  //answer(spanタグ)の中に、multi（答え）を入れる。
  answer.innerHTML = multi;
  //これで、formの処理をここで終わってという命令を書く。
  return false;
}

//おまけ。指数計算。掛け算を利用する。
function square (a) {
  //multiplicationの答えをsameに出す。
  const same = multiplication(a, a);
  console.log(same);
  return same;
}

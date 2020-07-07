let counterOutput = document.getElementById("counterOutput");

// 加算
let plusButton = document.getElementById("plusButton");
  //arrow function
let onClickPlusButton = () => {
  counterOutput.value++;
};
plusButton.addEventListener("click", onClickPlusButton);

// 引き算
let minusButton = document.getElementById("minusButton");
let onClickMinusButton = () => {
  if (counterOutput.value >= 1) {
     // カウント数が1以上のときだけ減算する
    counterOutput.value--;
  }
};
minusButton.addEventListener("click", onClickMinusButton);

// リセットボタン
let resetButton = document.getElementById("resetButton");
let onClickResetButton = () => {
  counterOutput.value = 0;
};
resetButton.addEventListener("click", onClickResetButton);
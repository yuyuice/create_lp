let counterOutput = document.getElementById("counterOutput");

//加算機能
let plusButton = document.getElementById("plusButton");
let onClickPlusButton = () => {
  counterOutput.value++;
};
plusButton.addEventListener('click', onClickPlusButton);

//引き算
let minusButton = document.getElementById("minusButton");
let onClickMinusButton = () => {
  if (counterOutput.value >= 1) {
    //カウント数が1以上のときだけ引き算
    counterOutput.value--;
  }
};
minusButton,addEventListener('click', onClickMinusButton);

//リセットボタン
let resetButton = document.getElementById("resetButton");
let onClickResetButton = () => {
  counterOutput.value = 0;
};
resetButton.addEventListener('click', onClickResetButton);

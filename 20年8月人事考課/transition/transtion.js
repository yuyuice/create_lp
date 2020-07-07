
//getElementはarrayだから、全部のクラスnameが反応する。
const boxes = document.getElementsByClassName("box");
//arrayで分かったboxの数＝lengthのこと。最期のelementになる前のconditionをsettingしとく。
for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  box.addEventListener('click', () => {

    //classListのcontainsっていうfunctionでactiveクラスを探す。このfunctionのreturnはtrue/false
    if (box.classList.contains("active")) {
      box.classList.remove("active")
    }else{
    //boxっていうクラスのリストに、新しいclassをaddする。
    box.classList.add("active");
    }
  });
}

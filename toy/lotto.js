const randomNum = () => {
  const array = [];
  while (array.length < 6) {
    const num = parseInt(Math.floor(Math.random() * 45 + 1));

    if (array.indexOf(num) === -1) {
      array.push(num);
    }
  }
  array.sort((a, b) => a - b);

  const randomColor1 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  const randomColor2 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  const randomColor3 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  const randomColor4 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  const randomColor5 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  const randomColor6 = "#" + Math.round(Math.random() * 0xffffff).toString(16);

  document.getElementById("num1").innerHTML = array[0];
  document.getElementById("num2").innerHTML = array[1];
  document.getElementById("num3").innerHTML = array[2];
  document.getElementById("num4").innerHTML = array[3];
  document.getElementById("num5").innerHTML = array[4];
  document.getElementById("num6").innerHTML = array[5];

  document.getElementById("num1").style.color = randomColor1;
  document.getElementById("num2").style.color = randomColor2;
  document.getElementById("num3").style.color = randomColor3;
  document.getElementById("num4").style.color = randomColor4;
  document.getElementById("num5").style.color = randomColor5;
  document.getElementById("num6").style.color = randomColor6;
};

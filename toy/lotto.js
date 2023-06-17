const randomNum = () => {
  const array = [];
  const colorName = [];

  while (array.length < 6) {
    const num = parseInt(Math.floor(Math.random() * 45 + 1));

    if (array.indexOf(num) === -1) {
      array.push(num);
    }

    const randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);

    if (colorName.indexOf(randomColor) === -1) {
      colorName.push(randomColor);
    }
  }
  array.sort((a, b) => a - b);

  document.getElementById("num1").innerHTML = array[0];
  document.getElementById("num2").innerHTML = array[1];
  document.getElementById("num3").innerHTML = array[2];
  document.getElementById("num4").innerHTML = array[3];
  document.getElementById("num5").innerHTML = array[4];
  document.getElementById("num6").innerHTML = array[5];

  document.getElementById("num1").style.color = colorName[0];
  document.getElementById("num2").style.color = colorName[1];
  document.getElementById("num3").style.color = colorName[2];
  document.getElementById("num4").style.color = colorName[3];
  document.getElementById("num5").style.color = colorName[4];
  document.getElementById("num6").style.color = colorName[5];
};

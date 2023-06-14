const num = () => {
  const numberResult = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    "0"
  );
  const randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);

  document.getElementById("funtion").innerText = numberResult;
  document.getElementById("funtion").style.color = randomColor;
  //return numberResult;
};

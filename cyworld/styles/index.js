const menuhome = () => {
  document.getElementById("contentframe").setAttribute("src", "home.html");
  document.getElementById("menuhome").style =
    "color:black; background-color: white;";
  document.getElementById("menujukebox").style =
    "color:white; background-color: #298eb5;";
  document.getElementById("menugame").style =
    "color:white; background-color: #298eb5;";
};

const menujukebox = () => {
  document.getElementById("contentframe").setAttribute("src", "jukebox.html");
  document.getElementById("menujukebox").style =
    "color:black; background-color: white;";
  document.getElementById("menuhome").style =
    "color:white; background-color: #298eb5;";
  document.getElementById("menugame").style =
    "color:white; background-color: #298eb5;";
};

const menugame = () => {
  document.getElementById("contentframe").setAttribute("src", "game.html");
  document.getElementById("menugame").style =
    "color:black; background-color: white;";
  document.getElementById("menujukebox").style =
    "color:white; background-color: #298eb5;";
  document.getElementById("menuhome").style =
    "color:white; background-color: #298eb5;";
};

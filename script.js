var x = 0;
function calculate() {
  if(x == 0) {
    document.getElementById("hi").src = "https://media1.tenor.com/images/7fdf8192ea03730d839f48f942112021/tenor.gif?itemid=16070760";
  }
  if(x == 1) {
    document.getElementById("hi").src = "";
  }
  x = 1 - x;
}

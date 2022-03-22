let expr=prompt(`цвет?`)
switch (expr) {
    case "красный":
      document.getElementsByClassName('red')[0].style.background = "red";
        document.getElementsByClassName('gif')[0].style.display = "none";
           document.getElementsByClassName('utka')[0].style.display = "none";
            document.getElementsByClassName('ready')[0].style.display = "none";
            document.getElementsByClassName('go')[0].style.display = "none";
    alert("стоп");
    break;
  case "желтый":
  document.getElementsByClassName('yellow')[0].style.background = "yellow";
   document.getElementsByClassName('gif')[0].style.display = "none";
      document.getElementsByClassName('utka')[0].style.display = "none";
         document.getElementsByClassName('img')[0].style.display = "none";

   alert("готовься");
    break;
  case "зеленый":
  document.getElementsByClassName('green')[0].style.background= "green";
   document.getElementsByClassName('img')[0].style.display = "none";
      document.getElementsByClassName('utka')[0].style.display = "none";
       document.getElementsByClassName('ready')[0].style.display = "none";
       document.getElementsByClassName('stop')[0].style.display = "none";
   alert("едь");
    break;
  default:
       document.getElementsByClassName('gif')[0].style.display = "none";
        document.getElementsByClassName('img')[0].style.display = "none"
           document.getElementsByClassName('svetofor')[0].style.display = "none";
         document.getElementsByClassName('ready')[0].style.display = "none";
    alert(`такого цвета не существует`)
}
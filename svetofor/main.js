let expr=prompt(`цвет пример:red`)
switch (expr) {
    case "red":
      document.getElementsByClassName('red')[0].style.background = "red";
        document.getElementsByClassName('gif')[0].style.display = "none";
           document.getElementsByClassName('utka')[0].style.display = "none";
            document.getElementsByClassName('ready')[0].style.display = "none";
            document.getElementsByClassName('go')[0].style.display = "none";
    alert("стоп");
    break;
  case "yellow":
  document.getElementsByClassName('yellow')[0].style.background = "yellow";
   document.getElementsByClassName('gif')[0].style.display = "none";
      document.getElementsByClassName('utka')[0].style.display = "none";
         document.getElementsByClassName('img')[0].style.display = "none";

   alert("готовься");
    break;
  case "green":
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
const num=document.querySelector("#number");
const plus =document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");


let schyotchik = 0;

plus.onclick = function() {
    schyotchik++;
    num.innerHTML=schyotchik;
}
minus.onclick = function() {
    schyotchik--;
    if (schyotchik <1){
        schyotchik=0;
    }
    num.innerHTML=schyotchik;

}
reset.onclick = function() {
    schyotchik = 0;
    num.innerHTML=schyotchik;
}
const J = ' J';
const a = ' a';
const l = ' l';
const i = ' i';
const L = ' l';
const all = a.concat(J, l, a, L)
console.log(all);
const obj = {
    key:  "1",
    key2: "2",
    key3: "3",
    key4: "4",
    key5: "5"
}
const obj2 = {
    ...obj,
    key6: "6",
    key7: "7",
    key8: "8"
}
console.log(obj2); 

const list = [];

const name = document.querySelector("#name")
const knopka = document.querySelector("#knopka")

function render() {
    const MainDiv = document.createElement('div');
    MainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        MainDiv.append(divList);
    }

    const form = document.querySelector(".inner");

    document.querySelector(".list").remove();
    form.append(MainDiv)

}
knopka.onclick = function() {
    const obj = {
        id: list.length,
        text: name.value+" Привет друг"
    }
    this.append(list);
    list.push(obj);
    render()
}
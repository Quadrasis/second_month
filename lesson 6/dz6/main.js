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

const getFullName = () => {
  return "First_name: " + user.first_name + "\n" + "Last_name: " + user.last_name;
    return 'First_name:'
}
const user = {
    first_name: 'Jack',
    last_name: 'Barbaro'
}
getFullName()
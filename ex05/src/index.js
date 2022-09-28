let foo = 12, boo = 45;
function main(foo, boo) {
// Only change code below this line
let [a, b] = [foo, boo];
foo = b;
boo = a;
// Only change code above this line
return {foo, boo}
}
console.log(main(foo, boo));
module.exports = main;

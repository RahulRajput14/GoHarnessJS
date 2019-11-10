A(); //calls A
function A() { // prints a, calls b
console.log("A");
B();
};

function B() { // declares b, prints b, calls c
console.log("B");
C();
};

function C() { // declares c (prints c)
console.log("C");
D()
}

function D() { // declares d, prints d, calls E
console.log("D");
E();
}

function E() { // declares e,prints e, calls f
console.log("E");
F();
}

function F() { // declares f, prints f, calls G  ??? f cap?
console.log("F");
G();
};

function G() { // declares g, prints g, calls h
console.log("G");
H();
  
function H() {
console.log("H");
I();
};
}
  
function I() {
console.log("I"); // declares I, prints I, calls J 
J();
J();
}
  
 // declares j, prints j, calls k
function J() {
console.log("J");
};

 
function printRest() {
  var rest = "KLMNOPQRSTUVWXYZ".split("");
  var len = rest.length;
for (var i=0; i < len; i++) {
console.log(rest[i]);
}
}
printRest()
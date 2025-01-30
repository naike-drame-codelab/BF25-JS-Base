// en JS, on a une conversion implicite en boolean
let string = "toto";

// if(string !== undefined || string !== null || string !== 0 string !== '' || string !== NaN)
if (!string) {
  console.log("La chaîne est vide.");
} else {
  console.log("La chaîne n'est pas vide");
}

// les éléments falsy en JavaScript

!!false; // inverse de l'inverse de faux = faux
!!""; // false
!!0;
!!-0;
!!0n;
!!null;
!!undefined;
!!document.all;
NaN;

// les éléments truthy en JS = tout ce qui n'est pas falsy
!!42;
true;
{
}
[];
new Date();
Infinity / -Infinity;
"Della" / "false";

"use strict";

// closure qui va s'appeler tout de suite après
(() => {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }

  for (let j = 1000000; j < 1001000; i++) {
    console.log(j);
  }
})();

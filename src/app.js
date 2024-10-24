/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function frase(partesfrase) {
    return partesfrase[Math.floor(Math.random() * partesfrase.length)];
  }

  let genaratorAI = document.querySelector("#datos");
  genaratorAI.innerHTML =
    frase(who) + " " + frase(action) + " " + frase(what) + " " + frase(when);
};
// // const frase = partesfrase => {
//   let construyendo = "";
//   construyendo = partesfrase[Math.floor(Math.random()) * partesfrase.length];

// //   return construyendo;
//      };

// for (let i = 0; i <= 100; i++)  {
//     if (i === 51) {
//         break
//     }
//     console.log(i);
// }



// let a = 0;

// while (a <= 100){
//     console.log("Hello Guys");
//     a++
// } 




let nimadirga = document.getElementById("title")
    // nimadirga.remove()
    nimadirga.textContent= "Bugun"
console.log(nimadirga);


let yozuv = document.getElementsByClassName("byclass")
    // yozuv.remove()
    yozuv.textContent = "Kecha"
console.log(yozuv);


let h3 = document.getElementsByTagName("h3")
    // h3.remove()
    h3.textContent = "erta"
console.log(h3);

let selec = document.querySelector(".byclass")
    // selec.remove()
    selec.textContent = "Ininga"
console.log(selec);

function printResult(name, number) {

    if (number < 10) {
        for (let i = number; i > 0; i--) {
            console.log(name);
        }
    } else {
        for (let j = 0; j < 3; j++) {
            console.log("Too High");
        }
    }
}

printResult("Femi", 5);

let str = "ikeja electric";

for (let n = 0; n < str.length; n++) {
    console.log(str[n]);
}
printResult("ikeja electric", 500);

// ghfhkgjhklk


function revPrint() {
    let stn = "ikeja electric";
    let stnew = "";
    for (let b = stn.length - 1; b >= 0; b--) {
        stnew += stn[b];
    }
    console.log(stnew);
}
revPrint();

let two = document.querySelector("#two");
console.log($('#now').value.length);

let names = "Alozie Victor";

let newVic = "";

two.addEventListener("click", function () {
    // this.classList.toggle("two");

    for (let i = names.length - 1; i >= 0; i--) {
        newVic += names[i];
    }
    console.log(newVic);
    this.innerHTML = newVic;
});


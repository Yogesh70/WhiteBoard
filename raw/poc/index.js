// // to create an element
// let pTag = document.createElement("p");
// // set text
// pTag.innerText = "Dynamically generated text from Js";

// // find an element
// let bodyNode = document.querySelector("body");
// // to append a node
// bodyNode.appendChild(pTag);

// let ul = document.querySelector("ul");
// ul.innerHTML = `<li>First Item</li>
// <li>Second Item</li>
// <li>Third Item</li>
// <li>Forth Item</li>
// `;
// //styling
// ul.style.backgroundColor = "red";

let itemBox = document.querySelector("#item");
let submitBtn = document.querySelector("#click");
let ul = document.querySelector("ul");
// To add eventListener
submitBtn.addEventListener("click", function () {
    // alert("Submitbtn clicked");
    if (itemBox.value) {
        let val = itemBox.value;
        let li = document.createElement("li");
        li.innerText = val;
        ul.appendChild(li);
        itemBox.value = "";
    } else {
        alert("Input some data");
    }
})


"use strict";

// let heads = document.getElementsByTagName("h1")

// for (const item of heads) {
//     console.log(item);
// }

// let elem = document.getElementById("header");

// let elem =document.getElementsByClassName("header");


// let elem =document.querySelector("#header");

// let elem=document.querySelectorAll("#header")


// let elem = document.querySelector("#products .card-item2 h1:nth-child(2)")

// elem.innerHTML ="Aqsin"
// console.log(elem.innerText);


// let element = document.querySelector("#products .card-item1 h1")

// // element.style.color="red";
// // element.style.backgroundColor="gray";

// // element.className ="test"

// element.classList.add("active");

// element.classList.remove("header");


// let button = document.querySelector("#products .switch")

// button.onclick = function(){

//     alert("Clicked1")
// }

// button.onclick = function(){

//     alert("Clicked2")
// }

// button.addEventListener("click",function(){
//     alert("clicked1")
// })

// button.addEventListener("click",function(event){
//     // this.style.backgroundColor = "red";

//     event.target.style.backgroundColor = "red";
// })



let btnOn = document.querySelector("#products .buttons .on");

let btnOff = document.querySelector("#products .buttons .off");

let body = document.querySelector("body");

let icon = document.querySelector("#products .icon i");


// btnOn.addEventListener("click",function(){
//     body.style.backgroundColor = "white";
//     icon.style.color = "yellow";
// })

// btnOff.addEventListener("click",function(){
//     body.style.backgroundColor = "black";
//     icon.style.color = "gray";
// })






// icon.addEventListener("click", function () {

//         if (!this.classList.contains("active-icon") && !body.classList.contains("active-body")) {   
//             this.classList.add("active-icon");                                                       
//             body.classList.add("activeedirik-body");                                                
//         } else {
//             this.classList.remove("active-icon");                                                   
//             body.classList.remove("active-body");
//         }

// })



// icon.addEventListener("mouseout",function(){
//     this.classList.remove("active-icon");                                                    
//     body.classList.remove("active-body");
// })

// icon.addEventListener("mouseover",function(){
//     this.classList.add("active-icon");                                                   
//     body.classList.add("active-body");
// })



let btn = document.querySelector("#products button");
let input = document.querySelector("#products input");
// let header = document.querySelector("#products h1")
let ul = document.querySelector("#products ul")


// btn.addEventListener("click", function () {
//     let inputValue = input.value;
//     header.innerText = inputValue
//     input.value = "";

// })






// btn.addEventListener("click", function () {
//     if (input.value == " ") {
//         alert("Dont empty");
//         return;
//     }

//     let items = document.querySelectorAll("li");

//     for (const item of items) {
//         if (item.innerText == input.value) {
//             alert("Already exist");
//             input.value = "";
//             return;
//         }

//     }

//     let li = document.createElement("li");
//     li.className = "list-group-item mt-2";
//     li.innerText = input.value;

//     ul.append(li);
//     input.value = "";



// })




// Homework




btn.addEventListener("click", function () {
    if (input.value == "") {
        alert("Dont empty");
        return;
    }

    let items = document.querySelectorAll("li");

    for (const item of items) {
        if (item.innerText == input.value) {
            alert("Already exist");
            input.value = "";
            return;
        }

    }

    let li = document.createElement("li");
    li.className = "list-group-item mt-2";
    li.innerText = input.value;

    ul.append(li);
    input.value = "";


    let itemsLi = document.querySelectorAll("#products ul li");
    for (const item of itemsLi) {
        item.addEventListener("click", function () {
            this.remove();
        })
    }



})
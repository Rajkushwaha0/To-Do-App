let input = document.querySelector(".input");
let btn = document.querySelector(".add");
let ul = document.querySelector(".undoredlist");
let select = document.querySelector("select");

//adding items into li
btn.addEventListener("click", () => {
  let lis = document.createElement("li");

  let div1 = document.createElement("div");
  div1.classList.add("firstDiv");
  let divCircle = document.createElement("div");
  divCircle.classList.add("circle");
  let divAdd = document.createElement("div");
  divAdd.innerHTML = input.value;
  divAdd.classList.add("addValue");
  div1.appendChild(divCircle);
  div1.appendChild(divAdd);

  let color = [
    "#e83f6f",
    "#32936f",
    "#e83f6f",
    "#ffbf00",
    "#d19c1d",
    "#9be564",
    "#54577c",
  ];
  let rand = Math.floor(Math.random() * 7);
  console.log(rand);
  let selectedVaue = select.value;
  let p1 = document.createElement("p");
  p1.textContent = selectedVaue;
  p1.style.backgroundColor = color[rand];

  let divbtn = document.createElement("div");
  divbtn.classList.add("btndiv");
  let btn1 = document.createElement("button");
  btn1.innerText = "Completed ✔️";
  btn1.classList.add("completebtn");
  let btn2 = document.createElement("button");
  btn2.innerText = "❌";
  btn2.classList.add("deletebtn");
  divbtn.appendChild(p1);
  divbtn.appendChild(btn1);
  divbtn.appendChild(btn2);

  lis.appendChild(div1);
  lis.appendChild(divbtn);

  // console.log(selectedVaue);
  // lis.appendChild(div1);
  // lis.appendChild(btn2);
  if (input.value != "") {
    ul.appendChild(lis);
    input.value = "";
  }
});

//removing items from the list

ul.addEventListener("click", (event) => {
  let item = event.target.parentNode.parentNode;
  if (event.target.className == "deletebtn") {
    setTimeout(() => {
      item.remove();
    }, 1000);
    let arr = Array.from(event.target.parentNode.parentNode.children);
    let arr2 = Array.from(arr[0].children);
    arr2[1].innerHTML = "Better try next time";
    // console.log(event.target.parentNode);
  } else if (event.target.className == "completebtn") {
    let modal = document.querySelector(".modal");
    let overlay = document.querySelector(".overlay");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    setTimeout(() => {
      modal.classList.remove("active");
      overlay.classList.remove("overlayactive");
      item.remove();
    }, 3000);
  }
});

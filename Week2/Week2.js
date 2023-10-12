const imgDiv = document.querySelectorAll(".div__img");
const imgDiv2 = document.querySelectorAll(".div__pImg");
const img = document.getElementById("pImg");

let id = 1;

const overlay = document.querySelector(".div__overlay--container");

const quantity = document.getElementById("quantity");

const cart = document.querySelector(".div__cart");

imgDiv[0].lastElementChild.style.display = "flex";

console.log(imgDiv);
imgDiv.forEach((div) => {
  div.addEventListener("click", () => {
    imgDiv.forEach((otherDiv) => {
      if (otherDiv.id === div.id && otherDiv.classList.contains("div__pImg")) {
        overlay.style.display = "flex";
        otherDiv.lastElementChild.style.display = "flex";
        const imgSrc = div.firstElementChild.src.replace("-thumbnail", "");
        img.src = imgSrc;
        id = otherDiv.id;
      } else {
        otherDiv.lastElementChild.style.display = "none";
      }
    });
  });
});

function increase() {
  const currentNumber = parseInt(quantity.innerText);
  const newNumber = currentNumber + 1;
  quantity.innerText = newNumber;
}

function decrease() {
  const currentNumber = parseInt(quantity.innerText);
  if (currentNumber > 0) {
    const newNumber = currentNumber - 1;
    quantity.innerText = newNumber;
  }
}

function addToCart() {
  const currentNumber = parseInt(quantity.innerText);
  const price = document.getElementById("price").innerText.replace("$", "");
  const cartQuantity = document.getElementById("quant");
  const total = document.getElementById("total");

  const empty = document.querySelector(".div__empty");
  const item = document.querySelector(".div__cart-body");
  const cartQuant = document.getElementById("cart-quant");

  if (currentNumber > 0) {
    cartQuantity.innerText = currentNumber;
    total.innerText = "$" + currentNumber * parseInt(price) + ".00";
    cartQuant.innerText = currentNumber;
    cartQuant.style.display = "flex";
    console.log(price);
    empty.style.display = "none";
    item.style.display = "flex";
  }
}

function next() {
  let newId = 0;
  if (id !== 4) {
    newId = parseInt(id) + 1;
    const imgDivTmp = document.getElementById(newId);
    imgDiv2.forEach((div) => {
      if (parseInt(div.id) === newId) {
        div.lastElementChild.style.display = "flex";
        const imgSrc = imgDivTmp.firstElementChild.src.replace(
          "-thumbnail",
          ""
        );
        img.src = imgSrc;
      } else {
        div.lastElementChild.style.display = "none";
      }
    });

    id = newId;
  }
}

function mobileNext() {
  let newId = 0;
  const imgMobile = document.querySelector(".div__image--container");
  if (id !== 4) {
    newId = parseInt(id) + 1;
    const imgDivTmp = document.getElementById(newId);
    imgDiv.forEach((div) => {
      if (parseInt(div.id) === newId) {
        const imgSrc = imgDivTmp.firstElementChild.src.replace(
          "-thumbnail",
          ""
        );
        imgMobile.firstElementChild.src = imgSrc;
      }
    });
    id = newId;
  }
}

function mobilePrevious() {
  let newId = 0;
  const imgMobile = document.querySelector(".div__image--container");
  if (id !== 1) {
    newId = parseInt(id) - 1;
    const imgDivTmp = document.getElementById(newId);
    imgDiv.forEach((div) => {
      if (parseInt(div.id) === newId) {
        const imgSrc = imgDivTmp.firstElementChild.src.replace(
          "-thumbnail",
          ""
        );
        imgMobile.firstElementChild.src = imgSrc;
      }
    });
    id = newId;
  }
}

function previous() {
  let newId = 0;
  if (id !== 1) {
    newId = parseInt(id) - 1;
    const imgDivTmp = document.getElementById(newId);
    imgDiv2.forEach((div) => {
      if (parseInt(div.id) === newId) {
        div.lastElementChild.style.display = "flex";
        const imgSrc = imgDivTmp.firstElementChild.src.replace(
          "-thumbnail",
          ""
        );
        img.src = imgSrc;
      } else {
        div.lastElementChild.style.display = "none";
      }
    });

    id = newId;
  }
}

function displayCart() {
  cart.style.display = "flex";
}

function closeCart(event) {
  if (!event.target.classList.contains("none-select")) {
    cart.style.display = "none";
  }
}

function closeOverlay() {
  const imgDivTmp = document.getElementById(id);
  imgDivTmp.lastElementChild.style.display = "flex";
  const imgTmp = document.getElementById("img");
  const imgSrc = imgDivTmp.firstElementChild.src.replace("-thumbnail", "");
  imgTmp.src = imgSrc;
  overlay.style.display = "none";
}

document.addEventListener("mousedown", (e) => {
  closeCart(e);
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

function menuClick() {
  nav.classList.toggle("slide-in");
}

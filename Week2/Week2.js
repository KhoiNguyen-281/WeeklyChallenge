// const imgDiv = document.querySelectorAll(".div__img");

// imgDiv.addEventListener("click", () => {
//   imgDiv.lastElementChild.style.display = "flex";
// });

const imgDiv = document.querySelectorAll(".div__img");
const img = document.getElementById("img");

imgDiv[0].lastElementChild.style.display = "flex";

imgDiv.forEach((div) => {
  div.addEventListener("click", () => {
    div.lastElementChild.style.display = "flex";
    const imgSrc = div.firstElementChild.src.replace("-thumbnail", "");
    img.src = imgSrc;

    // if (div.id === "1") {
    //   img.src = "./EcommerceProduct/images/image-product-1.jpg";
    // } else if (div.id === "2") {
    //   img.src = "./EcommerceProduct/images/image-product-2.jpg";
    // } else if (div.id === "3") {
    //   img.src = "./EcommerceProduct/images/image-product-3.jpg";
    // } else {
    //   img.src = "./EcommerceProduct/images/image-product-4.jpg";
    // }

    imgDiv.forEach((otherDiv) => {
      if (otherDiv !== div) {
        otherDiv.lastElementChild.style.display = "none";
      }
    });
  });
});

console.log(imgDiv[0].id);

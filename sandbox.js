// document.addEventListener('DOMContentLoaded', () => {
//     // Example of adding products to the display
//     const productDisplay = document.querySelector('.product-display');
//     const products = [
//         { name: 'Fascinator', price: 20 },
//         { name: 'Balloons', price: 10 },
//         // Add more products as needed
//     ];

//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p><button>Add to Cart</button>`;
//         productDisplay.appendChild(productDiv);
//     });

//     // Add event listeners for buttons, cart management, etc.
// });






// loging pop up

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

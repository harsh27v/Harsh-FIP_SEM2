console.log("JS Connected");

document.addEventListener("DOMContentLoaded", function () {
const buttons = document.querySelectorAll(".learn-btn");
const modal = document.getElementById("product-modal");
const closeBtn = document.getElementById("close-modal");

const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");

const products = {
    orange: {
        title: "Orange Fizz",
        text: "Bright citrus soda with bold refreshing taste."
    },

    lemon: {
        title: "Fresh Lemon",
        text: "Cool lemon soda with zesty flavour."
    },

    blueberry: {
        title: "Blueberry Burst",
        text: "Sweet berry soda with fizzy delight."
    }
};

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const product = this.dataset.product;

        console.log("Button Clicked:", product);
        title.textContent = products[product].title;
        text.textContent = products[product].text;
        modal.classList.remove("hidden");
        console.log("Modal Open");
    });
});

if(closeBtn){
closeBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
    console.log("Modal Close");
});
}
});
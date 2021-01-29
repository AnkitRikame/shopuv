import cart from "./cart.js";
const ret = localStorage.getItem("id");

window.addEventListener("load", () => {
    carous_disp(ret);
});


let input_quant = document.querySelector(".quantity");

input_quant.addEventListener("input", Incr)
function Incr(e){
    let qty = document.getElementById("qty");
    qty.textContent = input_quant.value
    console.log(qty)
};

// function 1 :
function carous_disp(ret) {
    const filt = cart.find((i) => {
        if (i.id == ret) {
            return i;
        }
    })

    showCheckout(filt);
}


function showCheckout(filt){
    let ch1 = document.querySelector("#ch1");
    ch1.innerHTML = filt.title

    let ch1_img = document.querySelector("#ch1_img");
    ch1_img.src = filt.img

    let cart_subtotal = document.querySelector("#cart_subtotal");
    cart_subtotal.innerHTML = filt.price

    let ord_total = document.querySelector("#ord_total");
    let reg = filt.price.replace(/[^\w\s]/gi, '')
    ord_total.innerHTML = `₹${parseInt(reg) + 150}`

    // let shipping_handling = document.querySelector("#shipping_handling");
    // shipping_handling.innerHTML = filt.price

    // let ord_total = document.querySelector("#ord_total");
    // ord_total.innerHTML = filt.price
}


import cart from "./cart.js";
const ret = localStorage.getItem("id");

let prod_detail_show;

window.addEventListener("load", () => {
    prod_detail_show = document.querySelector(".prod_detail_show");
    carous_disp(ret);
});

// function 1 :
function carous_disp(ret) {
    const filt = cart.find((i) => {
        if (i.id == ret) {
            return i;
        }
    })
    showList(filt);
}

function showList(filt){
    let cart_image = document.querySelector("#p_img");
    cart_image.src = filt.img

    let prod_name = document.querySelector("#prod_name");
    prod_name.innerHTML = filt.title

    let prod_price = document.querySelector("#prod_price");
    prod_price.innerHTML = filt.price


    let sub_total = document.querySelector("#sub_total");
    sub_total.innerHTML = filt.price

    let tot_price = document.querySelector("#tot_price");
    let reg = filt.price.replace(/[^\w\s]/gi, '')
    tot_price.innerHTML = `${parseInt(reg) + 150}`
}


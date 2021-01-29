import cart from "./cart.js";

// localStorage.setItem("cart_inc",0);


window.addEventListener("DOMContentLoaded", () => {
    renderProducts(cart); 
    afterRend();
});

 
// ..........  Add to cart starts here .........................
function renderProducts(cart) {
    // ....... dynamic cart starts here ...................
    const total_product = cart.map((item) => {
        return `<div class="col-md-3 col-6 shop_images1">
    <div class="image-container image_clicked" data-prodid="${item.id}">
    <a href="shopping_cart_details4.html"><img src="${item.img}" alt="image not found" class="image" style="width:100%" height="100%"></a>
        <div class="middle add_to_cart">
   
        <p class="text" id="btn1" data-toggle="modal" data-target="#modalAbandonedCart"><a style="color: white;">Add to Cart</a>
        </p>
    </div>
        
    </div>
    <a href="shopping_cart_details4.html" style="color: black !important;"><h5 class="product_name image_clicked" data-prodid="${item.id}" style="font-weight: bold;padding-top: 10px;">${item.title}</h5></a>
    <a href="shopping_cart_details4.html" style="color: #f3b239 !important;"><h6 class="image_clicked" data-prodid="${item.id}"><span style="font-weight: normal;font-size: 1em;">${item.price}/-</h6></a>
</div>`
    }).join('');

    const shopping_product1 = document.querySelector(".shopping_product1");
    shopping_product1.innerHTML = total_product;
    // return total_product;

    let image_clicked1 = document.querySelectorAll(".image_clicked");
    image_clicked1.forEach((e) => {
        e.addEventListener('click', (e) => {
            let prod_id = e.currentTarget.dataset.prodid;
            localStorage.setItem("id", prod_id);
        });
    })
}



// add to cart
function afterRend() {
    let cart_items = document.querySelectorAll(".text");
    cart_items.forEach((e) => { 
        e.addEventListener('click', () => {
            addtoCart(e);
        });
    })
}
// 

// script for add to cart clicked .....
function addtoCart(e) {

    const cart_inc = localStorage.getItem("cart_inc");
    let crt = document.getElementById("crt");
    // let conv_crt = parseInt(crt.innerText);
    
    let conv_crt = parseInt(cart_inc);
    conv_crt = conv_crt+1;
    crt.innerText = conv_crt;
    localStorage.setItem("cart_inc",conv_crt);
}
// 
// ....... dynamic cart ends here ...........................
import cart from "./cart.js";


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
    <h5 class="product_name" style="font-weight: bold;padding-top: 10px;">${item.title}</h5>
    <h6><span style="font-weight: normal;font-size: 1em;">${item.price}</h6>
</div>`
    }).join('');
    const shopping_product1 = document.querySelector(".shopping_product1");
    shopping_product1.innerHTML = total_product;
    // return total_product;
}


function afterRend() {


    let cart_items = document.querySelectorAll(".text");
    cart_items.forEach((e) => {
        e.addEventListener('click', () => {
            addtoCart(e);
        });
    })

    function addtoCart(e) {
        let crt = document.getElementById("crt");
        let conv_crt = parseInt(crt.innerText);


        conv_crt += 1;
        crt.innerText = conv_crt;
        // console.log(crt.innerText);
        // carous_disp(prod_id);
    }


    let image_clicked1 = document.querySelectorAll(".image_clicked");
    image_clicked1.forEach((e) => {
        e.addEventListener('click', (e) => {
            // console.log("aaaaaaa");
            // imagesClicked(e);
            let prod_id = e.currentTarget.dataset.prodid;
            localStorage.setItem("id", prod_id);
        });
    })

    // function imagesClicked(e) {
    // }
}


function carous_disp(id) {

    const filt = cart.filter((i) => {
            if (cart.id === id) {
                return i;
            }
        })
        // console.log("aabbbjaoj");


    //     const total_product1 = cart.map((item) => {

    //                 return `<div id="custCarousel" class="carousel slide" data-ride="carousel">
    //             <!-- slides -->
    //             <div class="carousel-inner in-image" style="height: auto;">
    //                 <div class="carousel-item active">
    //                     <img src="./images/idp2.jpg" class="" alt="">
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img src="./images/idp3.jpg" class="" alt="">
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img src="./images/idp4.jpg" class="" alt="">
    //                 </div>

    //                 <div class="carousel-item">
    //                     <img src="./images/idp1.jpg" class="" alt="">
    //                 </div>
    //                 <div class="carousel-item">
    //                     <img src="./images/idp5.jpg" class="" alt="">
    //                 </div>
    //             </div>


    //             <a class="carousel-control-prev" data-target="#custCarousel" data-slide="prev">
    //                 <span style="background-color: black !important;" class="carousel-control-prev-icon"></span></a>
    //             <a class="carousel-control-next" data-target="#custCarousel" data-slide="next">
    //                 <span style="background-color: black !important" ; class="carousel-control-next-icon"></span> </a>


    //             <!-- Thumbnails -->
    //             <ol class="carousel-indicators list-inline" style="height: auto;">
    //                 <li class="list-inline-item active">
    //                     <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel">
    //                         <img src="images/idp2.jpg" class="img-fluid"></a>
    //                 </li>
    //                 <li class="list-inline-item">
    //                     <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="images/idp3.jpg" class="img-fluid">
    //                     </a>
    //                 </li>
    //                 <li class="list-inline-item">
    //                     <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="images/idp4.jpg" class="img-fluid">
    //                     </a>
    //                 </li>
    //                 <li class="list-inline-item">
    //                     <a id="carousel-selector-3" data-slide-to="3" data-target="#custCarousel"> <img src="images/idp1.jpg" class="img-fluid">
    //                     </a>
    //                 </li>
    //                 <li class="list-inline-item">
    //                     <a id="carousel-selector-4" data-slide-to="4" data-target="#custCarousel"> <img src="images/idp5.jpg" class="img-fluid">
    //                     </a>
    //                 </li>
    //             </ol>
    //         </div>
    //     })
}
// ....... dynamic cart ends here ...........................
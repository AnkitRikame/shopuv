import cart from "./cart.js";
const ret = localStorage.getItem("id");

let prod_detail_show;
window.addEventListener("load", () => {
    prod_detail_show = document.querySelector(".prod_detail_show");
    carous_disp(ret);
});


// $(document).ready( function () {
//     prodTab(filt);
// });

// $(document).ready(function () {
// }
// show filters


// function 1 :
function carous_disp(ret) {
    const filt = cart.find((i) => {
        if (i.id == ret) {
            return i;
        }
    })
    feed_value(filt);
    prodDetails(filt);
    // prod_info(filt);
    prodTab(filt);
}

function feed_value(filt) {

    // let [carous_images] = filt;
    // console.log(filt,"avhvjhajbkanlkamkmalk");

    let feedval = filt.carous_images.map((b) => {

        return `<div class="carousel-item">
                    <img src="${b}" class="" alt="image not found">
                </div>`
    }).join('');


    let thumb_img = filt.carous_images.map((c,i) => {
        return `<li class="list-inline-item">
                    <a id="carousel-selector-${i}" class="selected" data-slide-to="${i}" data-target="#custCarousel">
                        <img src="${c}" class="img-fluid" alt="image not found"></a>
                </li>`
    }).join('');



    const feedval1 = `<div id="custCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner in-image" id="inside_img" style="height: auto;">
                            ${feedval}
                        </div>
                    <a class="carousel-control-prev" data-target="#custCarousel" data-slide="prev">
                        <span style="background-color: black !important;" class="carousel-control-prev-icon"></span></a>
                    <a class="carousel-control-next" data-target="#custCarousel" data-slide="next">
                        <span style="background-color: black !important"; class="carousel-control-next-icon"></span> </a>

                    <ol class="carousel-indicators list-inline" id="inside_img2" style="height: auto;">
                        
                    ${thumb_img}

                    </ol>
                </div>`

                prod_detail_show.innerHTML = feedval1;
                showCarous();   
}

// showCarous images with thumbnails ......................
function showCarous(){
    document.querySelector("#inside_img").firstElementChild.classList.add("active");
    document.querySelector("#inside_img2").firstElementChild.classList.add("active");
}

// product details js here .................................
function prodDetails(filt){
    let js_proddet = document.querySelector(".js_proddet");
    let prod_info = document.querySelector(".prod_info");
    let drp = document.querySelector(".drp");

    
    // const [title,price] = filt;
    
        const tit = `<div class="product_description_det" style="display:flex;width: 100% !important;">
                    <h4 style="font-family: Open Sans, sans-serif; font-size: 1.8em;font-weight: bold;">
                        ${filt.title}</h4>
                    <p style="font-size:1.2em;font-family:Open Sans,sans-serif;margin-left:31%;color: black;font-weight: bold;">
                        SHARE
                    </p>
                <p class="col-md-1 col-1 sharethis-inline-share-buttons" style="z-index:1;"></p>
        </div>
        <p style="font-weight:bold;font-size: 1.5em;">
            <span style="font-weight:bold;color: black;font-size: 0.9em;">₹</span>${filt.price}
        </p>`
    js_proddet.innerHTML = tit;
    const prod_para = `${filt.description}`
    prod_info.innerHTML = prod_para

    let quant = filt.option.map((d) => {
        return `<option value="100ml">${d}</option>`
    }).join('');
    drp.innerHTML = quant
}

// 

function prodTab(filt){
    let nav_home = document.querySelector("#nav-home");
    let nav_home_p = document.getElementById("nav-home-p");
    let nav_profile = document.querySelector("#nav-profile");
    let nav_contact = document.querySelector("#nav-contact");

    nav_home.innerHTML = filt.tabs.pd
    nav_profile.innerHTML = filt.tabs.ingdet
    nav_contact.innerHTML = filt.tabs.how_to_use
}



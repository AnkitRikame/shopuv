const cart_inc = localStorage.getItem("cart_inc");

let Navbar = `<nav class="navbar navbar-expand-lg navbar-dark default-color fixed-top">
       
<a href="index.html" id="uvlogo"><img class="logo_dark" href="index.html" src="./images/ultrav_logo.png" alt="UltraV" width="140px";/></a>

<!-- Mobile Cart -->
<div id="mob_cart" style="margin-top: 1px;margin-left: 3px;">
    
</div>
        
<!-- <a class="nav-link" id="cart-icon-mob" href="cart.html"><img src="images/shp_icon.png" style="width: 25px;height: 25px;"/>
    <span class="" style="font-size: 20px;color: white;"><sup id="crt">0</sup></span>
</a> -->
<!-- Mobile cart ends -->

<!-- <li class="nav-item cart_icon">
     <a class="nav-link" href="cart.html"><img src="images/shp_icon.png" style="width: 25px;height: 25px;"/>
        <span class="" style="font-size: 20px;color: white;"><sup id="crt">0</sup></span>
     </a>
</li> -->

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>


<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ml-auto">
        <li class="nav-item active">    
            <a class="nav-link" href="./index.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./brandstory.html">Brand Story</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./idebenone.html">Idebenone</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://idebenoneampoule.com/">Idebenone Ampoule</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./shop.html">Shop</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact Us</a>
        </li>
    </ul>

    <ul class="navbar-nav nav-flex-icons">
        <!-- search_box -->
        <li class="nav-item">
            <div class="search-box">
                <input class="search-txt" type="text" name="" value="" placeholder="Search here..." style="font-weight: 700;" />
                <a class="search-btn" href="#">
                    <i class="fa fa-search" style="color: black;"></i>
                </a>
            </div>
        </li>

        <!-- Desktop shopping_cart -->

        <div id ="desk_cart" style="margin-top: 10px;margin-left: 3px;" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">

        </div>

        <div class="dropdown1 cart-dropdown">
            <div class="dropdown-menu dropdown-menu-right drop_right">
                <div class="dropdown-cart-products">
                    <div class="product" style="display:flex;">
                        <div class="product-cart-details" style="font-size:0.9em">
                             <p class="product-title">
                                Idebenone Ampoule
                             </p>

                            <a href="product.html" class="product-image">
                                <img src="./images/idp2.jpg" width="20%" alt="product" style="border:1px solid black;">
                            </a>

                            <span class="cart-product-info">
                                <span class="cart-product-qty">1</span> x ₹4590/-
                            </span>
                            
                        </div><!-- End .product-cart-details -->

                        <a href="#" class="btn-close" title="Remove Product"><i class="fas fa-times" style="color:#f3b239"></i></a>
                    </div><!-- End .product -->     
                </div><!-- End .cart-product -->
                <hr>
                
                <div class="dropdown-cart-products">
                    <div class="product" style="display:flex;">
                        <div class="product-cart-details" style="font-size:0.9em">
                            <p class="product-title">
                               Aqua Shine Sheet Mask
                            </p>

                                <a href="product.html" class="product-image">
                                    <img src="./images/uv1.jpg" width="20%" alt="product" style="border:0.5px solid black;">
                                </a>
                                <span class="cart-product-info">
                                    <span class="cart-product-qty">1</span> x ₹4590/-
                                </span>
                                
                        </div><!-- End .product-cart-details -->
                        <a href="#" class="btn-close" title="Remove Product"><i class="fas fa-times" style="color:#f3b239"></i></a>
                    </div><!-- End .product -->
                    <hr>
                </div><!-- End .cart-product -->
                <div class="dropdown-cart-total">
                    <span>Total</span>
                    <span class="cart-total-price" style="font-size:0.9em">₹4590/-</span>
                </div><!-- End .dropdown-cart-total -->

                <div class="dropdown-cart mt-2 mb-2">
                    <a href="cart.html" class="btn btn-warning" style="color:white">View Cart</a>
                    <a href="checkout.html" class="btn btn-warning"><span style="color:white;">Checkout</span></a>
                </div><!-- End .dropdown-cart-total -->
            </div>
        </div><!-- End .dropdown-menu -->
  

        <!-- <li class="nav-item cart_icon">
            <a class="nav-link" href="cart.html"><img src="images/shp_icon.png" style="width: 25px;height: 25px;"/>
                <span class="" style="font-size: 20px;color: white;"><sup id="crt">0</sup></span>
            </a>
        </li> -->

        <!-- user_account -->
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="images/user_acc_logo.png" style="width: 30px; height: 30px;filter: invert(1);">
            </a>

            <!-- Log in and Sign Up button  -->
            <div class="dropdown-menu dropdown-menu-right" style="background-color: white;" aria-labelledby="navbarDropdownMenuLink-333">
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal1" style="color: black !important;font-weight: bold;"><i class="fas fa-sign-in-alt" style="padding-right: 20px;"></i>Log in</a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal2" style="color: black !important;font-weight: bold;"><i class="fas fa-user-plus" style="padding-right: 20px;"></i>Sign Up</a>
            </div>
        </li>
    </ul>
</div>  

<div class="search-box-mob search_mob" id="search_field">
    <input class="search-txt-mob" type="text" name="" value="" placeholder="Search here..." style="font-weight: 700;" />
    <a class="search-btn" href="#" style="text-decoration: none;">
        <i class="fa fa-search" style="color: black;"></i>
    </a>
</div>
</nav>
`


// func call ..........
window.addEventListener("DOMContentLoaded", () => {
    cartInc();
    // afterRend();
    getHeight();
    
});


// window.addEventListener("DOMContentLoaded", () => {
   
    let navbar_js = document.getElementById("navbar_js")
    navbar_js.innerHTML = Navbar
// });


// Navbar relared script 



let mob_cart = document.querySelector("#mob_cart");
let desk_cart = document.querySelector("#desk_cart");

// add to cart icon is here ........

function cartInc(){
    let crt_html = `
                <a class="nav-link" id="" href="cart.html"><img src="images/shp_icon.png" style="width: 25px;height: 25px;"/>
                <span class="" style="font-size: 20px;color: white;"><sup id="crt">0</sup></span>
                </a>
        `

        // screen.width is less than 500 it will show
    if(screen.width < 500){
        mob_cart.innerHTML = crt_html
        desk_cart.innerHTML = ""
    }

    // screen.width is greater than 500 it will show in the desktop ...
    
    else{
        mob_cart.innerHTML = ""
        desk_cart.innerHTML = crt_html
    }
}


// 
function getHeight(){
    let navsticky = document.querySelector(".navbar");
    let contentsection = document.querySelector(".content_section");
    
    let getheight = navsticky.offsetHeight
    contentsection.style.marginTop = getheight + "px"
    console.log(getheight)
}
// 

// window on scroll function .......... 
     window.onscroll = function() {
            // scrollFunction();
            hideSearch();
            // hideSearch1();
        };

        var search_field = document.getElementById("search_field");
        // hide the search field

        function hideSearch(){
            if(screen.width < 700){
                    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                        search_field.style.display = "none";
                    } else {
                        search_field.style.display = "block";
            }
        }
    }
// 



 


    
   
   



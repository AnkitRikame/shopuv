let Footer = `<footer class="container-fluid">
<div class="footer_style row">
    <div class="about col-md-4">
        <a href="index.html" target="_blank"><img src="./images/ultrav_logo.png" style="height:70px;width:150px;margin-left: -15px;" /></a>

        <h3 style="font-weight: 600">About Us</h3>
        <p style="text-align: left;line-height: 35px;">
            Ultra V Cosmetics is cosmeceutical brand that manufactures highly functional cosmetics based on patented technology and many years of clinical experience.
        </p>
    </div>

    <!-- Support -->
    <div class="support col-md-4">
        <h3 style="font-weight: 600">SUPPORT</h3>
        <ul class="list-unstyled" style="line-height:35px;">
            <li><a class="" href="privacy.html">Privacy Policy</a></li>
            <li><a class="" href="shippandret.html">Shipping & Return</a></li>
            <li><a class="" href="terms.html">Terms & Conditions</a></li>
            <li><a class="" href="contact.html">Contact Us</a></li>
            <!-- <li><a class="" href="#">Refund Policy</a></li> -->
            <hr class="vl">
        </ul>
    </div>

    <!-- Newsletter -->
    <div class="newsletter col-md-4">
        <h3 style="font-weight: 600">NEWSLETTER</h3>
        <form class="form-inline">
            <input class="" style="padding: 7px 10px; max-width:80%; border-radius: 1px;" type="text" placeholder="Email Address" aria-label="Search"/>
            <a href="contact.html"><button class="sign_up">OK</button></a>
        </form>
        <p style="font-size:1.1em; margin-top: 50px;font-weight: 600;letter-spacing: 2px;">FOLLOW US</p>
        
        <a href="https://www.facebook.com/UltraVIndia/" style="color: white"><img src="images/fblogo.png" style="width: 27px; height:27px;filter: invert(1);margin: 5px;" /></a>
        <a href="https://www.youtube.com/channel/UCgsMw2Y2ncob9GhzLFneeJA" style="color: white"><img src="images/youtube.png" style="width: 28px; height:28px;filter: invert(1);margin: 5px;"/></a>
        <a href="https://wa.me/917400449788" style="color: white"><img src="images/whatsapp_logo.png" style="width: 23px; height:23px;filter: invert(1);margin: 5px;" /></a>
        <a href="https://www.instagram.com/ultravindia/" style="color: white"><img src="images/instagram_logo.png" style="width: 23px; height:23px;filter: invert(1);margin: 5px;" /></a>
        <hr class="vl2">
    </div>
</div>
<p class="copyright" style="text-align: center; color: white; font-size:13px;"> © Copyright 2021 | All Rights Reserved.</p>
</footer>
`





// window.addEventListener("DOMContentLoaded", () => {
   
    let footer_js = document.getElementById("footer_js")
    footer_js.innerHTML = Footer
// });
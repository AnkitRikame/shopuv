
    //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
        hideSearch();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    
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


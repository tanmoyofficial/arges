//Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});



//To Top button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', function () {
    scrollFunction();
});

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Mobile Menu
let mobileMenu = document.getElementById('mobile-menu');
let closeBtn = document.getElementById('btn-close');
let menuTriggerBtn = document.getElementById('toggle-menu');

menuTriggerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('slide-in');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('slide-in');
})


// When the user scrolls the page, execute myFunction

window.addEventListener('scroll', () => {
    myFunction();
});

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}




//Number Counter
// number count for stats, using jQuery animate

$('.counting').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({
        countNum: $this.text()
    }).animate({
            countNum: countTo
        },

        {

            duration: 3000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });


});

//Partner Logo Slick slider
$('.partner-logos').slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
});


//Our Letest News Slick Slider
$(document).ready(function () {
    $(".our-latest-news .container .row .col-md-4").slice(0, 3).show();
    if ($(".our-latest-news .container .row .col-md-4:hidden").length != 0) {
        $("#load").show();
    }
    jQuery("#load").on("click", function (e) {
        e.preventDefault();
        jQuery(".our-latest-news .container .row .col-md-4:hidden").slice(0, 3).slideDown();
        if (jQuery(".our-latest-news .container .row .col-md-4:hidden").length == 0) {
            jQuery("#load").text("No More to view").hide("slow");
        }
    });
})

// clints-review slick slider
$('.clints-review').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    
    responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});



// Our service slick slider
$('.our-service .contents').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

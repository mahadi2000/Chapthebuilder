
function toggleMenu() {
  const menu = document.getElementById("res_menu")
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function toggleResMenu() {
  const resmenu = document.getElementById("res_dropdown")
  if (resmenu.style.display === "none") {
    resmenu.style.display = "block";
  } else {
    resmenu.style.display = "none";
  }
}

// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function () {
  $('.center').slick({
    centerMode: true,
    autoplay: false,
    arrows: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });
});
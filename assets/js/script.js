var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'cvrLGJYd1Lo', 
    playerVars: {
        'autoplay': 0,
        'controls': 1,
        'rel': 0,
        'showinfo': 0
    }
    });
}
document.getElementById('play-button').addEventListener('click', function (event) {
    event.preventDefault();
    player.playVideo();
});


//modal
var images = document.querySelectorAll(".myImg");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

images.forEach(function (img) {
    img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    };
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};



// mouseover
function animateBox() {
    var box = document.getElementById('myBoxx');
    box.style.backgroundColor = 'red';
    
    setTimeout(function() {
    box.style.backgroundColor = 'white';
    }, 1000); 
    }


//keypress
function addKeypressListener() {
    var textElement = document.getElementById('textHurry');
    textElement.addEventListener('keydown', changeTextColorr);
}

function removeKeypressListener() {
    var textElement = document.getElementById('textHurry');
    textElement.removeEventListener('keydown', changeTextColorr);
}

function changeTextColorr(event) {
    var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    var textElement = document.getElementById('textHurry');
    textElement.style.color = randomColor;
}


//animation
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('myNavbar');
    navbar.classList.add('fadeIn');
});


//animation 2
function addFadeInAnimationToFeatured() {
    var section = document.querySelector(".featured");
    
    if (section) {
        function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        }
    
        function check() {
        if (isElementInViewport(section)) {
            section.classList.add("fade-in", "fade-in-visible");
            window.removeEventListener("scroll", check);
        }
        }
    
        window.addEventListener("scroll", check);
        check();
    }
    }
    
    addFadeInAnimationToFeatured();
    

// animation 3
function addFadeInDownAnimationToFeatured() {
    var section = document.querySelector(".featured");
  
    if (section) {
      function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
  
      function check() {
        if (isElementInViewport(section)) {
          section.classList.add("fade-in-down", "fade-in-down-visible");
          window.removeEventListener("scroll", check);
        }
      }
  
      window.addEventListener("scroll", check);
      check();
    }
  }
  
  addFadeInDownAnimationToFeatured();


  //animation 4
  // Function to add fadeInRight animation
function addFadeInRightAnimationToFeatured() {
    var section = document.querySelector(".featured");
  
    if (section) {
      function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
  
      function check() {
        if (isElementInViewport(section)) {
          section.classList.add("fade-in-right", "fade-in-right-visible");
          window.removeEventListener("scroll", check);
        }
      }
  
      window.addEventListener("scroll", check);
      check();
    }
  }
  
  addFadeInRightAnimationToFeatured();
  
  


      
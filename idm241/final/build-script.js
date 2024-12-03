let isLiked = false; 

function toggleLike(event) {
    event.stopPropagation(); // Prevents the card click event from triggering
    isLiked = !isLiked;
    updateHeartIcon();
}

// Function to handle hover on the like button
function handleHover(isHovering) {
    const heartIcon = document.getElementById("heart-icon");

    if (isLiked) {
        // transition between active-filled and active-hover states
        heartIcon.style.opacity = .5; // Fade out
        setTimeout(() => {
            heartIcon.src = isHovering ? "images/active-hover.svg" : "images/active-filled.svg";
            heartIcon.style.opacity = 1; // Fade back in
        }, 150); // transition timing
    } else {
        // transition between default and hover states
        heartIcon.style.opacity = .5; 
        setTimeout(() => {
            heartIcon.src = isHovering ? "images/hover.svg" : "images/default.svg";
            heartIcon.style.opacity = 1;
        }, 150); 
    }
}

// Function to update the heart icon based on the like state
function updateHeartIcon() {
    const heartIcon = document.getElementById("heart-icon");

    // transition icon whether the button is liked or not
    heartIcon.style.opacity = .5; 
    setTimeout(() => {
        heartIcon.src = isLiked ? "images/active-filled.svg" : "images/default.svg";
        heartIcon.style.opacity = 1; 
    }, 150); 
}




// Function to open the "Request Tour" modal
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex"; 
    setTimeout(() => {
        modal.classList.add("show"); 
    }, 10); 
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show"); 

    modal.addEventListener('transitionend', function() {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none"; 
        }
    }, { once: true });
}



let currentImageIndex = 0;
let slides = document.querySelectorAll(".carousel-image");
let totalImages = slides.length;
let carouselWrapper = document.querySelector('.carousel-images-wrapper');

// Function to change the image based on direction
function changeImage(direction) {
    // Update the currentImageIndex to go left or right
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;

    // Move the carousel wrapper to the correct position
    carouselWrapper.style.transform = `translateX(-${currentImageIndex * 100}%)`;

    // Update the indicator active class
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentImageIndex) {
            indicator.classList.add('active');
        }
    });
}

// Event listener for the left and right buttons
document.querySelector('.carousel-btn.left').addEventListener('click', () => changeImage(-1));  // Move backward on left
document.querySelector('.carousel-btn.right').addEventListener('click', () => changeImage(1)); // Move forward on right

// Initialize: Ensure the first image is active on load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the first image's active state
    const firstImage = document.querySelector('.carousel-image');
    const indicators = document.querySelectorAll('.indicator');
    if (firstImage) {
        firstImage.classList.add('active');
        indicators[0].classList.add('active'); // Ensure the first indicator is active
    }
});



const dates = document.querySelectorAll('.date');

dates.forEach(date => {
    date.addEventListener('click', () => {
        // Toggle the active class on the clicked date
        date.classList.toggle('active');
    });

    let pressTimer;
    date.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            date.classList.add('hold');  // Add hold class when clicked and held
        }, 1);  // Hold duration (500ms)
    });

    date.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);  // Clear hold timer on mouse release
        date.classList.remove('hold');  // Remove hold class
    });

    date.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);  // Clear hold timer if mouse leaves button
        date.classList.remove('hold');  // Remove hold class
    });
});

function showLoadingAndRedirect() {
    document.getElementById('loading-spinner').style.display = 'flex';
    
    setTimeout(function() {
        window.open('https://www.zillow.com/homes/2171-Leland-Ave-Mountain-View,-CA-94040_rb/19509172_zpid/', '_blank');
        document.getElementById('loading-spinner').style.display = 'none'; 
    }, 1500); 
}

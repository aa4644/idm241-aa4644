// -----------------------------
// Like Button and Hover Effects
// -----------------------------
function toggleLike(event) {
    event.stopPropagation(); // Prevents the card click event from triggering

    const heartIcon = event.target; // Get the heart icon that was clicked
    const isLiked = heartIcon.classList.toggle('favorited'); // Toggle the 'favorited' class

    const newSrc = isLiked ? "images/active-filled.svg" : "images/default.svg";
    fadeAndSwapIcon(heartIcon, newSrc);
}

function handleHover(event, isHovering) {
    const heartIcon = event.target;

    if (heartIcon.tagName === 'IMG') {
        const isLiked = heartIcon.classList.contains('favorited');
        const nextSrc = isLiked
            ? (isHovering ? "images/active-hover.svg" : "images/active-filled.svg")
            : (isHovering ? "images/hover.svg" : "images/default.svg");

        fadeAndSwapIcon(heartIcon, nextSrc);
    }
}

function fadeAndSwapIcon(iconElement, newSrc) {
    iconElement.style.opacity = 0.5; 

    setTimeout(() => {
        iconElement.src = newSrc;
        iconElement.style.opacity = 1; 
    }, 400); 
}

// -----------------------------
// Modal Management
// -----------------------------
function openModal(button) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-property-image");
    const modalAddress = document.getElementById("modal-property-address");
    const modalInfo = document.getElementById("modal-property-info");


    const price = button.getAttribute('data-price');
    const info = button.getAttribute('data-info');
    const address = button.getAttribute('data-address');
    const image = button.getAttribute('data-image');


    modalImage.src = image;
    modalAddress.textContent = address;
    modalInfo.textContent = info;

    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");

    modal.addEventListener('transitionend', function () {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none";
        }
    }, { once: true });
}


// -----------------------------
// Carousel Functionality
// -----------------------------
document.querySelectorAll('.carousel-container').forEach((carousel) => {
    const slides = carousel.querySelectorAll('.carousel-image');
    const indicators = carousel.querySelectorAll('.indicator');
    const carouselWrapper = carousel.querySelector('.carousel-images-wrapper');

    let currentImageIndex = 0;
    const totalImages = slides.length;

    carousel.querySelector('.carousel-btn.left').addEventListener('click', (event) => {
        event.stopPropagation();
        changeImage(1);
    });

    carousel.querySelector('.carousel-btn.right').addEventListener('click', (event) => {
        event.stopPropagation();
        changeImage(-1);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (event) => {
            event.stopPropagation();
            changeImageToIndex(index);
        });
    });

    slides[0].classList.add('active');
    indicators[0].classList.add('active');

    function changeImage(direction) {
        currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
        updateCarousel();
    }

    function changeImageToIndex(index) {
        currentImageIndex = index;
        updateCarousel();
    }

    function updateCarousel() {
        carouselWrapper.style.transform = `translateX(-${currentImageIndex * 100}%)`;

        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentImageIndex);
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentImageIndex);
        });
    }
});

// -----------------------------
// Date Interactions
// -----------------------------
const dates = document.querySelectorAll('.date');

dates.forEach(date => {
    date.addEventListener('click', () => {
        date.classList.toggle('active');
    });

    let pressTimer;
    date.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            date.classList.add('hold');
        }, 500); 
    });

    date.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
        date.classList.remove('hold');
    });

    date.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
        date.classList.remove('hold');
    });
});

// -----------------------------
// Property Card Interactions
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
    const propertyCards = document.querySelectorAll('.property-card');

    propertyCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            showLoadingAndRedirect(index);
        });
    });
});

function showLoadingAndRedirect(cardIndex) {
    document.getElementById('loading-spinner').style.display = 'flex';

    const urls = [
        'https://www.zillow.com/homes/2171-Leland-Ave-Mountain-View,-CA-94040_rb/19509172_zpid/',
        'https://www.zillow.com/homedetails/8504-Dogwood-Dr-Coopersburg-PA-18036/9637850_zpid/',
        'https://www.zillow.com/homedetails/10105-Shinnecock-Hills-Dr-Austin-TX-78747/29515028_zpid/?'
    ];

    if (cardIndex >= 0 && cardIndex < urls.length) {
        setTimeout(() => {
            window.open(urls[cardIndex], '_blank');
            document.getElementById('loading-spinner').style.display = 'none';
        }, 1500);
    } else {
        console.error('Invalid card index');
    }
}


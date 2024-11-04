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

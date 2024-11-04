let isLiked = false; // Track whether the button is in the "liked" state

// Function to handle click on the like button
function toggleLike(event) {
    event.stopPropagation(); // Prevents the card click event from triggering
    isLiked = !isLiked;
    updateHeartIcon();
}

// Function to handle hover on the like button
function handleHover(isHovering) {
    const heartIcon = document.getElementById("heart-icon");

    if (isLiked) {
        // If the heart is "liked," show "active-hover" on hover, else show "active-filled"
        heartIcon.src = isHovering ? "images/active-hover.svg" : "images/active-filled.svg";
    } else {
        // If the heart is not "liked," show "hover" on hover, else show "default"
        heartIcon.src = isHovering ? "images/hover.svg" : "images/default.svg";
    }
    
}

// Function to update the heart icon based on the like state
function updateHeartIcon() {
    const heartIcon = document.getElementById("heart-icon");

    // Update icon based on whether the button is liked or not
    heartIcon.src = isLiked ? "images/active-filled.svg" : "images/default.svg";
}



// Function to open the "Request Tour" modal
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex"; // Set display to flex when opening
    setTimeout(() => {
        modal.classList.add("show"); // Add the class to show the modal with transition
    }, 10); // Slight delay to allow for display to take effect
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show"); // Remove the class to start fade-out transition

    // Wait for the transition to finish before setting display to none
    modal.addEventListener('transitionend', function() {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none"; // Hide the modal after transition
        }
    }, { once: true }); // Use once to ensure this event only runs once per close
}

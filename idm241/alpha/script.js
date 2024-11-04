document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    const heartIcon = document.getElementById('heartIcon');
    let isLiked = false;

    likeButton.addEventListener('click', () => {
        isLiked = !isLiked;

        if (isLiked) {
            heartIcon.src = 'assets/active_state.svg'; // Change to liked heart icon
            likeButton.classList.add('liked'); 
        } else {
            heartIcon.src = 'assets/default_state.svg'; // Change to not liked heart icon
            likeButton.classList.remove('liked'); 
        }
    });
});

// Open the modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let isLiked = false; // Track whether the button is in the "liked" state

// Function to handle click on the like button
function toggleLike(event) {
    event.stopPropagation(); // Prevents the card click event from triggering
    isLiked = !isLiked;
    updateHeartIcon();
}

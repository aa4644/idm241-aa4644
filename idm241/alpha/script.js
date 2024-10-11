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
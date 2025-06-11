// Basic interactivity
document.addEventListener('DOMContentLoaded', function () {
    // Play button toggle
    const playBtn = document.querySelector('.play-btn');
    playBtn.addEventListener('click', function () {
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-play');
        icon.classList.toggle('fa-pause');
    });

    // Card hover effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.03)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Like button toggle
    const likeBtn = document.querySelector('.player-like');
    likeBtn.addEventListener('click', function () {
        const icon = this.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        icon.style.color = icon.classList.contains('fas') ? '#1DB954' : '#b3b3b3';
    });

    // Navigation item active toggle
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

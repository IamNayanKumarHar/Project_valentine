document.addEventListener('DOMContentLoaded', () => {
    const trickyButton = document.getElementById('trickyButton');
    const clickableButton = document.querySelector('.clickable');

    trickyButton.addEventListener('mouseover', () => {
        const container = trickyButton.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = trickyButton.getBoundingClientRect();

        const randomX = Math.random() * (containerRect.width - buttonRect.width);
        const randomY = Math.random() * (containerRect.height - buttonRect.height);

        trickyButton.style.position = 'absolute';
        trickyButton.style.left = `${randomX}px`;
        trickyButton.style.top = `${randomY}px`;
    });

    clickableButton.addEventListener('click', () => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `<p>Yay! I'm so happy you said yes! 💖</p>`;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.style.animation = 'fadeIn 0.5s, popUp 0.5s';
        }, 10);
    });
});

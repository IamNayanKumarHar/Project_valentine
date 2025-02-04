document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const container = document.querySelector('.container');

    // Adjusted boundaries to prevent overlap with text
    const headerHeight = container.offsetTop + container.clientHeight;
    const safeZone = {
        top: headerHeight,
        bottom: window.innerHeight - noButton.clientHeight,
        left: 0,
        right: window.innerWidth - noButton.clientWidth
    };

    // Make 'No' Button Move Away Anywhere on the Page
    noButton.addEventListener('mouseover', () => {
        const randomX = Math.random() * (safeZone.right - safeZone.left) + safeZone.left;
        const randomY = Math.random() * (safeZone.bottom - safeZone.top) + safeZone.top;

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Show Popup on 'Yes' Button Click with Animation Effect
    yesButton.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });

    // Close Popup when Clicking the Close Icon
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Close Popup when Clicking Outside the Popup Content
    popup.addEventListener('click', (e) => {
        if (e.target.id === 'popup') {
            popup.classList.add('hidden');
        }
    });
});
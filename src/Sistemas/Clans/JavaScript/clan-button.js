document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.querySelector('.main-button');
    const contentButton = document.querySelector('.button-content');
    const setaButton = document.querySelector('.seta-button');

    if (mainButton && contentButton) {
        document.addEventListener('click', function() {
            contentButton.classList.toggle('active')
            setaButton.classList.toggle('active')
        });
    }
});
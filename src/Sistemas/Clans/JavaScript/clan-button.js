document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.querySelector('.main-button');
    const contentButton = document.querySelector('.clanlist-content');
    const setaButton = document.querySelector('.clanlist-seta');

    if (mainButton && contentButton) {
        document.addEventListener('click', function() {
            contentButton.classList.toggle('active')
            setaButton.classList.toggle('active')
        });
    }
});
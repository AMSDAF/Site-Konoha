document.addEventListener('DOMContentLoaded', function (){
    const rankButton = document.querySelector('#rank-button');
    const rankContent = document.querySelector('.rank-content');
    const rankSeta = document.querySelector('.rank-seta');

    if (rankButton && rankContent) {
        rankButton.addEventListener('click', function () {
            rankContent.classList.toggle('active');
            rankSeta.classList.toggle('active');
        })
    }
});
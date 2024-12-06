document.addEventListener('DOMContentLoaded', function () {
    const combatButton = document.querySelector('#combat-button');
    const combatContent = document.querySelector('.combat-content');
    const combatSeta = document.querySelector('.combat-seta');

    if (combatButton && combatContent) {
        combatButton.addEventListener('click', function () {
            combatContent.classList.toggle('active');
            combatSeta.classList.toggle('active');
        })
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const attributesButton = document.querySelector('#attributes-button');
    const attributesContent = document.querySelector('.attributes-content');
    const attributesSeta = document.querySelector('.attributes-seta');

    if (attributesButton && attributesContent) {
        attributesButton.addEventListener('click', function () {
            attributesContent.classList.toggle('active');
            attributesSeta.classList.toggle('active');
        })
    }
});

document.addEventListener('DOMContentLoaded', function (){
    const shiftsButton = document.querySelector('#shifts-button');
    const shiftsContent = document.querySelector('.shifts-content');
    const shiftsSeta = document.querySelector('.shifts-seta');

    if (shiftsButton && shiftsContent) {
        shiftsButton.addEventListener('click', function () {
            shiftsContent.classList.toggle('active');
            shiftsSeta.classList.toggle('active');
        })
    }
});
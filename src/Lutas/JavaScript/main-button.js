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

document.addEventListener('DOMContentLoaded', function (){
    const distanceButton = document.querySelector('#distance-button');
    const distanceContent = document.querySelector('.distance-content');
    const distanceSeta = document.querySelector('.distance-seta');

    if (distanceButton && distanceContent) {
        distanceButton.addEventListener('click', function () {
            distanceContent.classList.toggle('active');
            distanceSeta.classList.toggle('active');
        })
    }
});

document.addEventListener('DOMContentLoaded', function (){
    const elementsButton = document.querySelector('#elements-button');
    const elementsContent = document.querySelector('.elements-content');
    const elementsSeta = document.querySelector('.elements-seta');

    if (elementsButton && elementsContent) {
        elementsButton.addEventListener('click', function () {
            elementsContent.classList.toggle('active');
            elementsSeta.classList.toggle('active');
        })
    }
});

document.addEventListener('DOMContentLoaded', function (){
    const damageButton = document.querySelector('#damage-button');
    const damageContent = document.querySelector('.damage-content');
    const damageSeta = document.querySelector('.damage-seta');

    if (damageButton && damageContent) {
        damageButton.addEventListener('click', function () {
            damageContent.classList.toggle('active');
            damageSeta.classList.toggle('active');
        })
    }
});
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, menuLines) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.menuLines = document.querySelectorAll(menuLines);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    toggleMenuLinesColor() {
        this.menuLines.forEach((line) => {
            if (this.mobileMenu.classList.contains(this.activeClass)) {
                line.style.backgroundColor = "black";
            } else {
                line.style.backgroundColor = "";
            }
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
        this.toggleMenuLinesColor();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbarInstance = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    ".mobile-menu div"
);

mobileNavbarInstance.init();
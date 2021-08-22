document.addEventListener('DOMContentLoaded', () => {
    let navBarAnchors = document.getElementsByClassName('nav-bar-anchor');
    for (let anchor of navBarAnchors) {
        anchor.addEventListener('click', anchorClickEvent);
    };
});

function anchorClickEvent(event) {
    let navBarAnchors = document.getElementsByClassName('nav-bar-anchor');
    for (let anchor of navBarAnchors) {
        anchor.classList.remove("active");
    };
    event.target.classList.add("active");
}
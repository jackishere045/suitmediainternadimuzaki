let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("site-header").style.top = "0";
    } else {
        document.getElementById("site-header").style.top = "-60px"; /* Adjust based on your header height */
    }

    prevScrollpos = currentScrollPos;
};

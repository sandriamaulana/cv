window.onscroll = function () { scrollFunction() };
// shrink when scroll
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('.data-diri').addClass('slide-effect');

    }
}


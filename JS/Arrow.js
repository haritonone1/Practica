let arrow = document.getElementById('arrow');
console.log(arrow);
arrow.addEventListener('click', function() {
    let body = document.getElementById('header'),
        heightTotal = body.scrollHeight,
        height = window.pageYOffset;
    let a = setInterval(() => {
        if (window.pageYOffset > height) {
            clearInterval(a);
            return;
        } else if (window.pageYOffset < 600) {
            window.scrollTo(0, window.pageYOffset - 8);
            height = window.pageYOffset;
            if (window.pageYOffset == 0) {
                clearInterval(a);
                return;
            }
        } else if (window.pageYOffset < 1000) {
            window.scrollTo(0, window.pageYOffset - 11);
            height = window.pageYOffset;
            if (window.pageYOffset == 0) {
                clearInterval(a);
                return;
            }
        } else if (window.pageYOffset < 2000) {
            window.scrollTo(0, window.pageYOffset - 13);
            height = window.pageYOffset;
            if (window.pageYOffset == 0) {
                clearInterval(a);
                return;
            }
        } else if (window.pageYOffset < 3000) {
            window.scrollTo(0, window.pageYOffset - 16);
            height = window.pageYOffset;
            if (window.pageYOffset == 0) {
                clearInterval(a);
                return;
            }
        } else if (window.pageYOffset > 0) {
            window.scrollTo(0, window.pageYOffset - 24);
            height = window.pageYOffset;
        } else {
            clearInterval(a);
            return;
        }
    }, 1);
});
window.addEventListener('scroll', function() {
    let body = document.getElementById('header'),
        heightTotal = body.scrollHeight,
        height = window.pageYOffset;
    if (height >= heightTotal / 2) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
});
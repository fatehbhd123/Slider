let imgs = Array.from(document.querySelectorAll('img')),
    next = document.querySelector('#next'),
    prev = document.querySelector('#prev'),
    indicators = document.querySelector('.indicators'),
    counter = 0,
    slideNumber = document.getElementById('slide-number')
prev.style.opacity = '.3'
changeImg();
for (i = 0; i < imgs.length; i++) {
    let span = document.createElement('span');
    span.innerText = `${i + 1}`;
    if (i == 0) {
        span.classList.add('active')
    }
    span.onclick = function () {
        counter = parseInt(this.innerText) - 1;
        changeImg();
    }
    indicators.appendChild(span)
}
prev.onclick = function () {
    if (counter > 0) {
        counter--;
        changeImg();
    }
}
next.onclick = function () {
    if (counter < 3) {
        counter++;
        changeImg();
    }
}
function changeImg() {
    slideNumber.innerText = `Slide ${counter + 1} Of ${imgs.length}`
    imgs.forEach(function (img, j) {
        if (j == counter) {
            img.style.opacity = '1'
        }
        else {
            img.style.opacity = '0'
        }
        if (counter == 0) {
            prev.style.opacity = '.3'
        }
        else {
            prev.style.opacity = '1'
        }
        if (counter == 3) {
            next.style.opacity = '.3';
        } else {
            next.style.opacity = '1';
        }
    })
    let spans = Array.from(document.querySelectorAll('.indicators span'));
    spans.forEach(function (mySpan, j) {
        if (j != counter) {
            mySpan.classList.remove('active')
        }
        else {
            mySpan.classList.add('active')
        }

    })
}
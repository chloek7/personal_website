// image changes when clicked
document.addEventListener('DOMContentLoaded', function() {
    let i = 0
    let img = document.querySelector('#firstImg');
    img.addEventListener('click', function() {
        img.src = images[i % images.length];
        img.alt = imgDescr[i % imgDescr.length]
        i++
    });
});

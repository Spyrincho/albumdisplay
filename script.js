var albums = document.querySelectorAll('.cover');

const bounceUp = (e) => {
    e.target.classList.remove('bounceDown');
    e.target.classList.add('bounceUp');
}

const bounceDown = (e) => {
    e.target.classList.remove('bounceUp');
    e.target.classList.add('bounceDown');
}

for (var i = 0; i < albums.length; i++) {
    var album = albums[i];
    album.addEventListener('mouseenter', bounceUp);
    album.addEventListener('mouseleave', bounceDown);
}

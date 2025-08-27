function changeImage(shirtId, img1, img2) {
    const shirt = document.getElementById(shirtId);
    shirt.style.setProperty('--img1', `url(${img1})`);
    shirt.style.setProperty('--img2', `url(${img2})`);
}
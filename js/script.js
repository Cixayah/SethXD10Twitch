"use strict";
const profilePicture = 'https://static-cdn.jtvnw.net/jtv_user_pictures/38b409fa-6e9b-4407-adf1-0112e6c26da9-profile_image-600x600.png';
const LIGHT_MODE_IMAGE = profilePicture;
const DARK_MODE_IMAGE = profilePicture;
function toggleMode() {
    const html = document.documentElement;
    if (!html) {
        console.error('Elemento HTML não encontrado.');
        return;
    }
    html.classList.toggle('light');
    const profileElement = document.getElementById('profile');
    if (!profileElement) {
        console.error('Elemento com id "profile" não encontrado.');
        return;
    }
    const img = profileElement.querySelector('img');
    if (!img) {
        console.error('Imagem não encontrada dentro do elemento com id "profile".');
        return;
    }
    if (html.classList.contains('light')) {
        img.setAttribute('src', LIGHT_MODE_IMAGE);
    }
    else {
        img.setAttribute('src', DARK_MODE_IMAGE);
    }
}

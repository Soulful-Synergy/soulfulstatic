/* Glide.js */

const caro_1 = '#site-carousel-1';
const caro_2 = '#site-carousel-2';
const caro_3 = '#site-carousel-3';
const caro_4 = '#training-carousel';

const siteCarousel_1 = new Glide(caro_1, {
    type: 'carousel',
    perView: 1,
    autoplay: 6000,
}).mount();

const siteCarousel_2 = new Glide(caro_2, {
    type: 'carousel',
    perView: 1,
    autoplay: 7000,
}).mount();

const siteCarousel_3 = new Glide(caro_3, {
    type: 'carousel',
    perView: 1,
    autoplay: 8000,
}).mount();

const trainingCarousel = new Glide(caro_4, {
    type: 'carousel',
    perView: 4,
    breakpoints: {
        1600: { perView: 3 },
        1215: { perView: 2 },
        900: { perView: 1 },
    },
    autoplay: 6000,
}).mount();

function addBullets(glider) {
    // console.log(glider.children);
}

window.onload = (e) => {
    const glider1 = document.querySelector(caro_1);
    const glider2 = document.querySelector(caro_2);
    const glider3 = document.querySelector(caro_3);
    [glider1, glider2, glider3].forEach((glider) => {
        addBullets(glider);
    });
};

/* caleandar.js */
const eventsList = document.querySelector('#events-list');
for (const child of eventsList.children) {
    if (child.className !== 'list-event') {
        continue;
    }
}

/* Instagram Feed */

const mediaDiv = document.querySelector('.farms-ig-media-wrapper');

let igToken =
    'IGQVJXWDhBVklhclNTYlNOMXhscXV0dFJCMG50X3lHZAzhvMlhKYmdzZAlNZAYmNVTHBmZAHR0bFRra3d4X1IzMEktRG5xRnpQVTFFWjYycjBCSWxuWmZAwOXNSRkIwc1dTaTNOckQxSTBTNlBFVzF1VXNUZAAZDZD';

let ig;

// fetch('https://www.instagram.com/_soulfulsynergy_/?__a=1')
//     .then((response) => response.json())
//     .then((data) => (ig = data));

// console.log(ig);

var feed = new Instafeed({
    accessToken: igToken,
});
feed.run();

/* Lightbox Options */

lightbox.option({
    showImageNumberLabel: false,
});

/* Glide.js */

const caro_1 = '#site-carousel-1';
const caro_2 = '#site-carousel-2';
const caro_3 = '#site-carousel-3';
const caro_4 = '#training-carousel';

// Carousels will autoplay at different intervals

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

/* caleandar.js */
const eventsList = document.querySelector('#events-list');

let cleandarId = document.getElementById('caleandar');
let events = [];
let settings = {};

for (const listEvent of eventsList.children) {
    const date = listEvent.dataset.date;
    const title = listEvent.dataset.title;
    const eventURL = listEvent.dataset.url;

    if (listEvent.className !== 'list-event' || !date) {
        console.error('Error: invalid list event or undefined date.');
        continue;
    }
    console.log(date);

    // Date must me in the format of YYYY-MM-DD
    let dateReg = /[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/;
    if (!dateReg.test(date)) {
        console.error(
            'Error: invalid date for list event. It should be (YYYY-MM-DD).'
        );
    }

    const splitDate = date.split('-');
    const year = parseInt(splitDate[0]);
    const month = parseInt(splitDate[1]) - 1; // -1 because month starts with index 0
    const day = parseInt(splitDate[2]);

    console.log(new Date(year, month, day));

    events.push({
        Date: new Date(year, month, day),
        Title: title || 'Untitled Event',
        Link: eventURL || 'javascript:void(0)',
    });
}

caleandar(cleandarId, events, settings);

/* Modal */

const modals_container = document.querySelector('.modals-container');
const modals = document.querySelectorAll('.modal');
const modalOpeners = document.querySelectorAll('[data-modalid]');

let modalOpen = false;

document.querySelectorAll('.modal-button-close button').forEach((exitBtn) => {
    exitBtn.addEventListener('click', (e) => {
        modals.forEach((modal) => {
            showElement(modal, false);
        });
        showElement(modals_container, false);
        applyBackgroundEffects(false);
        modalOpen = false;
    });
});

modalOpeners.forEach((modalOpener) => {
    const modalId = modalOpener.dataset.modalid;

    modalOpener.addEventListener('click', (e) => {
        if (modalOpen) return;

        const modal = document.querySelector(`#modal-${modalId}`);

        // if modal does not exist, then return
        if (!modal) return;

        applyBackgroundEffects(true);
        showElement(modals_container, true);
        showElement(modal, true);
        modalOpen = true;
    });
});

function showElement(el, shouldShow = true) {
    if (shouldShow) {
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
    }
}

function applyBackgroundEffects(shouldShow) {
    const header = document.querySelector('header');
    const farms_page = document.querySelector('.farms-page');
    const body = document.querySelector('body');

    if (shouldShow) {
        header.classList.add('dim-blur');
        farms_page.classList.add('dim-blur');
        body.classList.add('disable-overflow-y');
    } else {
        header.classList.remove('dim-blur');
        farms_page.classList.remove('dim-blur');
        body.classList.remove('disable-overflow-y');
    }
}

/* Prefill Google Forms with contact information */

function submitContactInfo() {
    const name = document.querySelector('#contact-name').value;
    const email = document.querySelector('#contact-email').value;
    const subject = document.querySelector('#contact-subject').value;
    const textarea = document.querySelector('#contact-textarea').value;
    const submit = document.querySelector('#contact-submit');
    let gFormsPrefillURL =
        'https://docs.google.com/forms/d/e/1FAIpQLSdlN1qEEPRzLMKD5mK5EL_eidT3qMTQtonv2-w2bZqMmtTaBw/viewform?usp=pp_url&entry.372396029=@email&entry.305389871=@name&entry.2056181665=@subject&entry.751024836=@textarea';

    // Note to Eric: get a prefilled link for the actual google docs page which has:
    // Name: as $name
    // Email: as $email
    // Subject: as $subject
    // Message Field: as $textarea

    gFormsPrefillURL = gFormsPrefillURL
        .replace('@name', name)
        .replace('@email', email)
        .replace('@subject', subject)
        .replace('@textarea', textarea);

    console.log(gFormsPrefillURL);

    const emailURL = gFormsPrefillURL;
    window.open(emailURL, '_blank');
}

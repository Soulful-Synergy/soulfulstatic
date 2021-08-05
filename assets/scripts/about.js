// Options for Lightbox
lightbox.option({
    resizeDuration: 400,
    wrapAround: true,
});

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Prefill Google Forms with user's entered email
function subscribeNewsletter() {
    const email = document.querySelector('.newsletter-email').value;
    const gFormsPrefillURL =
        'https://docs.google.com/forms/d/e/1FAIpQLSeaEqSLvFToiI0ZuDeogp-qt41a7dkr9llO0jPxWHFULtLsUw/viewform?usp=pp_url&entry.677112371=';
    const emailURL = gFormsPrefillURL + email;

    const invalidEmail = document.querySelector('.invalid-email');

    if (validateEmail(email)) {
        if (!invalidEmail.classList.contains('hidden'))
            invalidEmail.classList.add('hidden');

        window.open(emailURL, '_blank');
    } else {
        if (invalidEmail.classList.contains('hidden'))
            invalidEmail.classList.remove('hidden');
    }
}

const form = document.querySelector('.notify-form');
const email = form.querySelector('.email');
const submitBtn = form.querySelector('input[type="submit"]');

const isEmail = (email) => {

    const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return mailformat.test(email.value);

}

const emailError = () => {
    form.classList.contains('error') ? void 0 : form.classList.add('error');
}

submitBtn.addEventListener('click', () => {
    
    isEmail(email) ? form.submit() : emailError() ;
    
})



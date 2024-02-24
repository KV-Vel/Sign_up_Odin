const form = document.querySelector('.user-form');
const passInput = document.querySelector('#pass');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const showPasswordBtn = document.querySelector('.showPass');
const nickNameInputField = document.querySelector('#nickName');
const emailInputField = document.querySelector('#email');
const phoneInputField = document.querySelector('#phoneNumber');
const errorName = document.querySelector('.error_name');
const errorEmail = document.querySelector('.error_email');
const errorPhoneNumber = document.querySelector('.error_phone_number');

// Managing validation colors
form.addEventListener('focusout', (e) => {
    if (e.target.type === 'password') {return}
    if (e.target.checkValidity() && e.target.value !== '' && e.target.value.length >= 2) {
        e.target.style.cssText += 'border: 2px solid rgb(43, 148, 43);';
    } else if (!e.target.checkValidity() && e.target.value !== '') {
        e.target.style.cssText += ' border: 2px solid rgb(214, 56, 56)';
    
    } else {
        e.target.style.cssText += 'border: 1px solid var(--input-borders-clr)'
    }
})

// Managing colors for password input fields
confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.value !== passInput.value || passInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.style.cssText += 'border: 2px solid rgb(214, 56, 56)';
        passInput.style.cssText += 'border: 2px solid rgb(214, 56, 56)';
    } else if (confirmPasswordInput.value === '' && passInput.value === '') {
        confirmPasswordInput.style.cssText += 'border: 1px solid var(--input-borders-clr)';
        passInput.style.cssText += 'border: 1px solid var(--input-borders-clr)';
    } else {
        confirmPasswordInput.style.cssText += 'border: 2px solid rgb(43, 148, 43)';
        passInput.style.cssText += 'border: 2px solid rgb(43, 148, 43)';
    }
})

passInput.addEventListener('change', () => {
    if (confirmPasswordInput.value !== passInput.value || passInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.style.cssText += 'border: 2px solid rgb(214, 56, 56)';
        passInput.style.cssText += 'border: 2px solid rgb(214, 56, 56)';
    } else if (confirmPasswordInput.value === '' && passInput.value === '') {
        confirmPasswordInput.style.cssText += 'border: 1px solid var(--input-borders-clr)';
        passInput.style.cssText += 'border: 1px solid var(--input-borders-clr)';
    } else {
        confirmPasswordInput.style.cssText += 'border: 2px solid rgb(43, 148, 43)';
        passInput.style.cssText += 'border: 2px solid rgb(43, 148, 43)';
    }
})

showPasswordBtn.addEventListener('click', () => {
    if (passInput.type === 'password') {
        passInput.type = 'text';
    } else {
        passInput.type = 'password';
    }
})

nickNameInputField.addEventListener('change', () => {
    if(nickNameInputField.value.split('').length < 2 && nickNameInputField.value !== '') {
        errorName.style.cssText += 'visibility: visible';
        setTimeout(() => {
            errorName.style.cssText += 'visibility: hidden';
        }, 2000)
    } else {
        errorName.style.cssText += 'visibility: hidden';
    }
})

emailInputField.addEventListener('change', () => {
    let pattern = /[^ ]+@[^ ]+\.[a-z]{2,3}/;
    if(!emailInputField.value.match(pattern) && emailInputField.value !== '') {
        errorEmail.style.cssText += 'visibility: visible';
        setTimeout(() => {
            errorEmail.style.cssText += 'visibility: hidden';
        },2000)
    } else {
        errorEmail.style.cssText += 'visibility: hidden';
    }
})

phoneInputField.addEventListener('change', () => {
    let pattern = /^\+?7(9\d{9})$/;
    if(!phoneInputField.value.match(pattern) && phoneInputField.value !== '') {
        errorPhoneNumber.style.cssText += 'visibility: visible';
        setTimeout(() => {
            errorPhoneNumber.style.cssText += 'visibility: hidden';
        },2000)
    } else {
        errorPhoneNumber.style.cssText += 'visibility: hidden';
    }
})
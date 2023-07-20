let btnMenu = document.getElementById('btn-menu');
let btnClose = document.getElementById('btn-close');
let nav = document.getElementById('nav');
let show = false;
let btnSend = document.getElementById('contact-send');

let emailError = document.getElementById('email__error');
let contactEmailError = document.getElementById('contact__email__error');
let emailFormat = "Whoops, make sure it's an email";



btnSend.addEventListener('click', ()=>{
    let email = document.getElementById('contact__email').value;

    if(!esEmail(email)){
        emailError.style.display = 'flex';
        document.getElementById('contact__email').style.border = '2px solid var(--soft-red)';
        emailError.innerHTML = emailFormat;
        email.innerHTML = 'example@email/com';
        btnSend.style.background = 'white';
        btnSend.style.color = 'var(--soft-red)';
    }
    else{
        emailError.style.display = 'none';
        document.getElementById('contact__email').style.border = '2px solid transparent';
        emailError.innerHTML = '';
        email.innerHTML = '';
        btnSend.style.background = 'var(--soft-red)';
        btnSend.style.color = 'white';
    }
});

btnMenu.addEventListener('click', ()=>{
    if(show){
        nav.style.display = 'none';
        show = true;
    }

    else{
        nav.style.display = 'flex';
        show = false;
    }
});


btnClose.addEventListener('click', ()=>{
    if(!show){
        nav.style.display = 'none';
        show = false;
    }

    else{
        nav.style.display = 'flex';
        show = true;
    }
});


function isEmpty(cadena){
    return (cadena.length == 0 || cadena == ' ')?true : false;
}

function esEmail(cadena){
    let regex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');
    return regex.test(cadena);
}
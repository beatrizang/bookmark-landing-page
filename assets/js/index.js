//MENU
let btnMenu = document.getElementById('btn-menu');
let btnClose = document.getElementById('btn-close');
let nav = document.getElementById('nav');
let show = false;

//ERROR EMAIL
let btnSend = document.getElementById('contact-send');
let emailError = document.getElementById('email__error');
let contactEmailError = document.getElementById('contact__email__error');
let emailFormat = "Whoops, make sure it's an email";

//QUESTIONS
let question1 = document.getElementById('question1');
let answer1 = document.getElementById('answer1');
let questionArrow1 = document.getElementById('question__arrow1');
let showAnswer1 = true;

let question2 = document.getElementById('question2');
let answer2 = document.getElementById('answer2');
let questionArrow2 = document.getElementById('question__arrow2');
let showAnswer2 = true;

let question3 = document.getElementById('question3');
let answer3 = document.getElementById('answer3');
let questionArrow3 = document.getElementById('question__arrow3');
let showAnswer3 = true;

let question4 = document.getElementById('question4');
let answer4 = document.getElementById('answer4');
let questionArrow4 = document.getElementById('question__arrow4');
let showAnswer4 = true;

//FEATURES
let btnBookmark = document.getElementById('btn-bookmark');
let bookmark = document.getElementById('bookmark');

let btnIntelligent = document.getElementById('btn-intelligent');
let intelligent = document.getElementById('intelligent');

let btnShare = document.getElementById('btn-share');
let share = document.getElementById('share');


btnBookmark.addEventListener('click',()=>{
    bookmark.style.display = 'flex';
    intelligent.style.display = 'none';
    share.style.display = 'none';
    btnBookmark.style.color = 'var(--darkish-blue)';
    btnIntelligent.style.color = 'var(--grayish-blue)';
    btnShare.style.color = 'var(--grayish-blue)';
});

btnIntelligent.addEventListener('click',()=>{
    bookmark.style.display = 'none';
    intelligent.style.display = 'flex';
    share.style.display = 'none';
    btnBookmark.style.color = 'var(--grayish-blue)';
    btnIntelligent.style.color = 'var(--darkish-blue)';
    btnShare.style.color = 'var(--grayish-blue)';
});

btnShare.addEventListener('click',()=>{
    bookmark.style.display = 'none';
    intelligent.style.display = 'none';
    share.style.display = 'flex';
    btnBookmark.style.color = 'var(--grayish-blue)';
    btnIntelligent.style.color = 'var(--grayish-blue)';
    btnShare.style.color = 'var(--darkish-blue)';
});



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

function showAnswer(answer,showAnswer){
    if(!showAnswer){
        answer.style.display = 'none';
    }
    
    else{
        answer.style.display = 'flex';
    }
}

question1.addEventListener('click',()=>{
    if(!showAnswer1){
        answer1.style.display = 'none';
        questionArrow1.style.transform = 'rotate(0deg)';
        questionArrow1.style.color = 'var(--soft-blue)';
        showAnswer1 = true;
    }
    
    else{
        answer1.style.display = 'flex';
        questionArrow1.style.transform = 'rotate(180deg)';
        questionArrow1.style.color = 'var(--soft-red)';
        showAnswer1 = false;
    }
});

question2.addEventListener('click',()=>{
    if(!showAnswer2){
        answer2.style.display = 'none';
        questionArrow2.style.transform = 'rotate(0deg)';
        questionArrow2.style.color = 'var(--soft-blue)';
        showAnswer2 = true;
    }
    
    else{
        answer2.style.display = 'flex';
        questionArrow2.style.transform = 'rotate(180deg)';
        questionArrow2.style.color = 'var(--soft-red)';
        showAnswer2 = false;
    }
});

question3.addEventListener('click',()=>{
    if(!showAnswer3){
        answer3.style.display = 'none';
        questionArrow3.style.transform = 'rotate(0deg)';
        questionArrow3.style.color = 'var(--soft-blue)';
        showAnswer3 = true;
    }
    
    else{
        answer3.style.display = 'flex';
        questionArrow3.style.transform = 'rotate(180deg)';
        questionArrow3.style.color = 'var(--soft-red)';
        showAnswer3 = false;
    }
});

question4.addEventListener('click',()=>{
    if(!showAnswer4){
        answer4.style.display = 'none';
        questionArrow4.style.transform = 'rotate(0deg)';
        questionArrow4.style.color = 'var(--soft-blue)';
        showAnswer4 = true;
    }
    
    else{
        answer4.style.display = 'flex';
        questionArrow4.style.transform = 'rotate(180deg)';
        questionArrow4.style.color = 'var(--soft-red)';
        showAnswer4 = false;
    }
});


function isEmpty(cadena){
    return (cadena.length == 0 || cadena == ' ')?true : false;
}

function esEmail(cadena){
    let regex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');
    return regex.test(cadena);
}
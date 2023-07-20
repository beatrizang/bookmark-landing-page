let btnMenu = document.getElementById('btn-menu');
let btnClose = document.getElementById('btn-close');
let nav = document.getElementById('nav');
let show = false;

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

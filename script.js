const title = document.querySelector('#titulo');
const search2 = document.querySelector('.search2');
const btnMenu1 = document.querySelector('.menu-mobile1');
const btnMenu2 = document.querySelector('.menu-mobile2');
const menu = document.querySelector('#menu');
const learn = document.querySelector('.learn');
const backLearn = document.querySelector('.learn2');
const cardLearn = document.querySelector('.card-two');
const linha5 = document.querySelector('.linha-5');
const moreProject = document.querySelector('.btn-blue2')
const btnInitial = document.querySelector('.btn-green1')
const textBtn = document.querySelector('.clickOn')
const menuFooter = document.querySelector('.menu2')
const menuFooter2 = document.querySelector('.menu-esquerda')
const options = document.querySelector('.options')
const option2 = document.querySelector('.options2')
const final = document.querySelector('.final-card')
const logo = document.querySelector('.logo-footer')

menuFooter.addEventListener('click', () => {
    options.classList.toggle('active');
    final.classList.toggle('active');
    logo.classList.toggle('active');
})

menuFooter2.addEventListener('click', () => {
    option2.classList.toggle('active');
    final.classList.toggle('active');
    logo.classList.toggle('active');
})


btnInitial.addEventListener('click', () => {
    textBtn.classList.toggle('active');
})


moreProject.addEventListener('click', () => {
    linha5.classList.toggle('active')
})



learn.addEventListener('click', () => {
    cardLearn.classList.toggle('active');
    
})


btnMenu1.addEventListener('click', () =>{
    btnMenu1.classList.toggle('barra1');
    btnMenu2.classList.toggle('barra2');
    menu.classList.toggle('active');
    title.classList.toggle('active');
    search2.classList.toggle('active');
    textBtn.classList.toggle('none')
});
btnMenu2.addEventListener('click', () =>{
    
    btnMenu1.classList.toggle('barra1');
    menu.classList.toggle('active');
    btnMenu2.classList.toggle('barra2');
    title.classList.toggle('active');
    search2.classList.toggle('active');
    textBtn.classList.toggle('none')
});
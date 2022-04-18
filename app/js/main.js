
/*
   ниже находистя код настройки slick-slider 
*/
$('.quiz__items').slick({
    dots: false,
    slidesToShow: 1,
    prevArrow: ('.prev-btn'),
    nextArrow: ('.next-btn'),
});

/*
   ниже находистя код для кнопки бургера 
*/
let burgerBtn = document.querySelector('.burger');
let headerCurtain = document.querySelector('.header__curtain');
let headerTop = document.querySelector('.header__top');

burgerBtn.addEventListener('click', (Event) => {
    Event.preventDefault();
    burgerBtn.classList.toggle('is-active');
    headerCurtain.classList.toggle('is-opened');
});


/*
   ниже находистя код для quiz 
*/
let nextBtn = document.querySelector('.quiz__wrapper-btn');
let quiz = document.querySelector('.quiz');
let quizItems = document.querySelector('.quiz__items');
let body = document.getElementById('body');

let closeQuizBtn = document.querySelector('.close');

/*
    при нажатии на кнопку далее -> появляется фон и слайдер
*/
nextBtn.addEventListener('click', (Event) => {
    Event.preventDefault();
    console.log('ggggggg');
    quizItems.classList.add('quiz-items-is-active');
    quiz.classList.add('quiz-is-active');
    quizItems.scrollIntoView({block: "center", inline: "nearest"});
    body.classList.add('body-is-hidden');

    closeQuizBtn.classList.add('close-is-active');
});
/*
    при нажатии на кнопку закрыть(крестик) исчезает фон и сама кнопка
*/
closeQuizBtn.addEventListener('click', (Event) => {
    Event.preventDefault();
    quizItems.classList.remove('quiz-items-is-active');
    quiz.classList.remove('quiz-is-active');
    body.classList.remove('body-is-hidden');
    if(quiz.classList.contains('quiz-is-active')){
        closeQuizBtn.classList.add('close-is-active');
    }
    else{
        closeQuizBtn.classList.remove('close-is-active');
    }
});


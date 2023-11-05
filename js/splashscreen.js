document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
        document.querySelector('.nameTxt').style.opacity = 1;
    }, 400);

    setTimeout(function() {
        document.querySelector('.portfolioTxt').style.opacity = 1;
    }, 1000);

    setTimeout(function() {
        document.querySelector('.nameTxt').style.opacity = 0;
        document.querySelector('.portfolioTxt').style.opacity = 0;
    }, 3000); 


    setTimeout(function() {
        document.querySelector('.preloader').style.opacity = 0;
        document.querySelector('.container').style.display = 'block';

    }, 3500);

});

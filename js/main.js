(function () {
    let burgerBtn = document.querySelector('.burger_menu');
    let headerMenu = document.querySelector('.header_ul');
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('activeburg');
        headerMenu.classList.toggle('active');
    });
}());

(function () {
    const popupGg = document.querySelector(".popup__bg");
    const popupWin = document.querySelector(".popup__windows");
    const windBtn = document.querySelector(".xxx");
    const btn = document.querySelector(".btn_o_nas");
    btn.addEventListener('click', () => {
        popupGg.classList.toggle('activePopap');
        popupWin.classList.toggle('activePopap');
    });
    windBtn.addEventListener /*+ popupGg.addEventListener*/('click', () => {
        popupGg.classList.remove('activePopap');
        popupWin.classList.remove('activePopap');
    });
}());
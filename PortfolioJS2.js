function myFunction(){
    const popup = document.getElementById("window");
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");
    popup.classList.toggle("active");
}
function myFunctionClose(){
    const popup = document.getElementById("window");
    overlay.classList.toggle("active");
    popup.classList.toggle("active");
}
function myFunction2(){
    const popup = document.getElementById("window2");
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");
    popup.classList.toggle("active");
}
function myFunctionClose2(){
    const popup = document.getElementById("window2");
    overlay.classList.toggle("active");
    popup.classList.toggle("active");
}
function OpenBurgerFunction(){
    let burger = document.getElementById("burger");
    let burgerMenu = document.getElementById("burger_menu");
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
}
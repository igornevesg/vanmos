function myFunction(x) {
    if (x.matches) {
        document.getElementById("myTopNav").style.display = 'block';
    } else {
        document.getElementById("myTopNav").style.display = 'none';
    }
}

var x = window.matchMedia("(min-width: 769px)")
myFunction(x);
x.addListener(myFunction);

function abrirMenu() {
    var submenu = document.getElementById("myTopNav");
    if (submenu.style.display == 'none') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

function emBreve() {
    alert('Aplicativo disponível em breve')
}

function imageChange(image) {
    if (image.matches) {
        document.getElementById("image-funciona").src = "./Images/how-it-works-vertical.svg"
    } else {
        document.getElementById("image-funciona").src = "./Images/how-it-works.svg"
    }
}
var image = window.matchMedia("(max-width: 425px)")
imageChange(image);
image.addListener(imageChange)
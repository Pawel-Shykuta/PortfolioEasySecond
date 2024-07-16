var img = [
    "Foto/1.webp",
    "Foto/2.webp",
    "Foto/3.webp",
    "Foto/4.webp",
    "Foto/5.webp",
    "Foto/6.webp",
    "Foto/7.webp",
    "Foto/8.webp",
    "Foto/9.webp",
    "Foto/10.webp",
    "Foto/11.webp",
    "Foto/12.webp"
];

var num = 0;

function next() {
    var slider = document.getElementById('slider');
    num++;
    if (num >= img.length) {
        num = 0;
    }
    slider.src = img[num];
}

function prev() {
    var slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = img.length - 1;
    }
    slider.src = img[num];
}

//alert
//confirm
//promp
function logo(){

    var a = null;
    a = prompt("What is your name");

    if (a!= null){
        if(a.length >= 2){
            alert("Hello "+ a);
        }else{
            alert("Sorry, but  you did not enter data" );
        }
        
    }else{
        alert("Sorry, but this operation is not available" );
    }


}










document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('burger').addEventListener('click', function() {
        console.log('Burger clicked');
        document.querySelector('.header').classList.toggle('open');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^='#']");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});


function clearText(){
    var texteriaDan = document.getElementById('text');
    var text = texteriaDan.value;
 
    alert("Your text: "+text);
 
    texteriaDan.value = " ";
 
 }


function logo(){
    var text = document.getElementById('quantity');
    var dan = text.value;

    var price = dan *15;

    alert("your price: "+price +"$");



}











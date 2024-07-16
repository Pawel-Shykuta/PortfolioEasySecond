

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
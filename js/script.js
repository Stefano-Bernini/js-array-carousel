// array con path delle immagini
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

// recupero gli elementi del dom con classi items e thumbs nei quali andare a iniettare l'html delle immagini
const items = document.querySelector('.items');
const thumbs = document.querySelector('.thumbs-content');

// definisco 2 variabili: una che contiene la stringa delle immagini in items e l'altra in thumbs
let itemsContent = '';
let thumbsContent = '';

// definisco l'indice dell'array che deve rappresentare l'immagine attiva
let activeItem = 0;

// definisco i pulsanti per andare avanti con le slides ed andare indietro
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// ciclo l'array per riempire le stringhe con l' html delle immagini
for(let i=0; i<images.length; i++){
    itemsContent += `<div class="item">
                        <img src="./${images[i]}" alt="">
                    </div>`;

    thumbsContent += `<div class="thumb">
                        <img src="./${images[i]}" alt="">
                    </div>`;
}

// inietto in items e thumbs l'html creato
items.innerHTML = itemsContent;
thumbs.innerHTML = thumbsContent;

// applico la variabile activeItem per applicare la classe active all'elemento corrente
document.getElementsByClassName('item')[activeItem].classList.add('active');
document.getElementsByClassName('thumb')[activeItem].classList.add('active');

// gestisco il click sul div con classe prev
prev.addEventListener('click', function(){
    if(activeItem === 0){
        activeItem = images.length - 1;
    }
    else{
        activeItem--;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItem].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItem].classList.add('active');
});

// gestisco il click sul div con classe next
next.addEventListener('click', function(){
    if(activeItem === images.length - 1){
        activeItem = 0;
    }
    else{
        activeItem++;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItem].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItem].classList.add('active');
});
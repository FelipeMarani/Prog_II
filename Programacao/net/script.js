const h1 = document.getElementById('h1');
const img = document.getElementById('imgMain');

h1.addEventListener('mouseover',  () =>{
    img.src = "IMG_20251012_183303_313.jpg";
})

h1.addEventListener('mouseout', () => {
    img.src = "IMG_20250922_023838_991.webp";
     
})

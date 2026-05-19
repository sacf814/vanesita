// --- 1. TRANSICIÓN DE FOTOS ---
// Generamos automáticamente la lista con tus 26 fotos
const photos = [];
for (let i = 1; i <= 26; i++) {
    photos.push(`foto${i}.jpg`); // Esto creará "foto1.jpg", "foto2.jpg"... hasta la 26
}

let currentIndex = 0;
const imgElement = document.getElementById("photo");

// Cambia la foto cada 4 segundos (4000 milisegundos)
setInterval(() => {
    imgElement.classList.add("fade-out"); // Inicia el desvanecimiento
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % photos.length;
        imgElement.src = photos[currentIndex]; // Cambia la imagen
        imgElement.classList.remove("fade-out"); // Aparece la nueva imagen
    }, 1000); // Espera 1 segundo para hacer el cambio mientras está invisible
}, 4000);


// --- 2. CUENTA REGRESIVA ---
// Fecha objetivo: 3 de Abril de 2027 a las 00:00:00
const targetDate = new Date("April 3, 2027 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado
    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Si la fecha ya llegó
    if (distance < 0) {
        document.getElementById("timer").innerHTML = "¡El día ha llegado! ❤️";
    }
}, 1000); // Se actualiza cada 1 segundo
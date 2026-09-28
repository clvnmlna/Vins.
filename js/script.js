// Menunggu sampai seluruh halaman web selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Membuat Observer (pengamat) untuk animasi saat di-scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Jika elemen terlihat di layar (viewport)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } 
        });
    }, {
        threshold: 0.1 // Animasi memicu saat 10% bagian elemen terlihat
    });

    // Mengambil semua elemen HTML yang memiliki class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Memerintahkan observer untuk mengamati setiap elemen tersebut
    hiddenElements.forEach((el) => observer.observe(el));
    
});
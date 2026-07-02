// --- SCRIPT DROPDOWN FAQ ---
const faqHeaders = document.querySelectorAll(".faq-header");

faqHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // 1. Memutar ikon panah
    header.classList.toggle("aktif");

    // 2. Memberikan 'tanda' ke bungkus utama untuk memicu perubahan warna
    header.parentElement.classList.toggle("buka-warna");

    // 3. Membuka / menutup paragraf dengan perhitungan tinggi yang presisi
    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Tutup dropdown
      content.style.opacity = "0"; // Pudarkan teks
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1"; // Munculkan teks
    }
  });
});

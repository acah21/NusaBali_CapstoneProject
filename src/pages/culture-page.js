import CultureModel from '../model/CultureModel.js';
import CulturePresenter from '../presenter/CulturePresenter.js';

// View implementation
class CultureView {
    constructor() {
        this.contentArea = null;
    }

    showLoading() {
        console.log('Loading...');
    }

    hideLoading() {
        console.log('Loading complete');
    }

    showError(message) {
        console.error(message);
    }

    render(cultures) {
        const destinationGrid = document.querySelector('.destination-grid');
        if (!destinationGrid) return;

        destinationGrid.innerHTML = cultures.map(culture => `
            <div class="destination-card" data-id="${culture.id}">
                <img src="${culture.image}" alt="${culture.name}">
                <div class="card-content">
                    <h3>${culture.name}</h3>
                    <p>${culture.description}</p>
                    ${culture.additionalInfo ? `<p class="additional-info">${culture.additionalInfo}</p>` : ''}
                </div>
            </div>
        `).join('');
    }

    renderDetail(culture) {
        const sectionContent = document.querySelector('.content-section');
        if (!sectionContent) return;

        sectionContent.innerHTML = `
            <div class="culture-detail">
                <button class="btn-back">← Back</button>
                <h2>${culture.name}</h2>
                <img src="${culture.image}" alt="${culture.name}" class="detail-image">
                <div class="detail-content">
                    <p>${culture.description}</p>
                    ${culture.additionalInfo ? `<div class="additional-info">${culture.additionalInfo}</div>` : ''}
                </div>
            </div>
        `;
    }
}

export default function CulturePage() {
  const content = `        <section class="gallery-section">
            <div class="photoAtas">
                <div class="photoAtas-kiri">
                    <img src="/images/culture-foto1.jpeg" alt="Culture 1">
                </div>
                <div class="photoAtas-kanan">
                    <img src="/images/culture-foto2.jpeg" alt="Culture 2">
                    <img src="/images/culture-foto3.jpeg" alt="Culture 3">
                </div>
            </div>
        </section>

        <section class="content-section">            
        <div class="heading-container">
                <div class="icon-wrapper">
                    <img src="/images/image 34.png" alt="Location Icon">
                </div>
                <h2 class="heading-title">Mengenal Bali</h2>
            </div>
            <hr class="divider">

            <div class="baliNese">
                <h1>BALI</h1>
                <div class="baliNese-content">
                    <div class="baliNese-text">
                        <p>Bali telah menjadi salah satu tujuan wisata pulau terbaik di dunia
                        selama beberapa dekade dan mudah untuk mengetahui alasannya.
                        Dari pantai berpasir putih hingga kehidupan malam yang meriah,
                        surga tropis ini menawarkan sesuatu untuk semua jenis wisatawan...</p>
                        
                        <p id="detailBali" style="display: none;">Pura di tepi pantai Tanah Lot, hamparan sawah bertingkat di Ubud, 
                            dan pantai vulkanik hitam Amed hanyalah beberapa pemandangan indah yang dapat ditemukan di sana. 
                            Tempat menyelam di Tulamben dan Nusa Penida juga menawarkan sekilas kehidupan laut yang semarak di sekitar pulau tersebut. 
                            Selain alamnya, Bali juga terkenal dengan makanannya yang lezat, mulai dari warung makanan laut di tepi pantai hingga restoran mewah kelas dunia.
                            Pulau ini terus berubah, dengan bangunan baru di setiap sudut dan banyaknya wisatawan dari seluruh dunia. 
                            Namun, semangat Bali — tercermin dalam kehangatan penduduk setempat dan spiritualitas Hindu — menjadikannya salah satu tempat paling memikat untuk dikunjungi.</p>
                        
                            <span id="btnSelengkapnya">Selengkapnya</span>
                    </div>
                </div>
            </div>
        </section>
        <br>

        <section class="destination-section">
            <div class="destination-container">
                <h2 class="section-title">Budaya Bali</h2>
                <div class="destination-grid">
                    <div class="destination-card">
                        <img src="/images/Galungan Kuningan.jpeg" alt="Galungan Kuningan">
                        <div class="card-content">
                            <h3>Galungan & Kuningan</h3>
                            <p>Perayaan kemenangan dharma (kebaikan) melawan adharma (kejahatan) yang dirayakan setiap 210 hari</p>
                            <p class="additional-info">Galungan menandai permulaan minggu perayaan, sementara Kuningan menandai akhirnya. Selama periode ini, spirit leluhur dipercaya mengunjungi Bumi.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Gamelan Bali.jpeg" alt="Gamelan Bali">
                        <div class="card-content">
                            <h3>Gamelan Bali</h3>
                            <p>Ensembel musik tradisional yang menjadi bagian integral dari upacara adat dan pertunjukan seni</p>
                            <p class="additional-info">Gamelan Bali memiliki karakteristik unik dengan penggunaan instrumen metalofon, xylofon, drum dan gong.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Mekotek.jpg" alt="Mekotek">
                        <div class="card-content">
                            <h3>Mekotek</h3>
                            <p>Ritual unik di Desa Munggu dimana ratusan pria membawa tongkat panjang dalam formasi tertentu</p>
                            <p class="additional-info">Ritual ini dilakukan untuk mengusir energi negatif dan mendoakan keselamatan desa.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Melasti.jpg" alt="Melasti">
                        <div class="card-content">
                            <h3>Melasti</h3>
                            <p>Upacara pembersihan benda sakral dan diri sebelum Hari Raya Nyepi</p>
                            <p class="additional-info">Melasti dilakukan di tepi pantai atau sumber air suci untuk membersihkan alam semesta dan diri dari pengaruh buruk.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Ngaben.jpg" alt="Ngaben">
                        <div class="card-content">
                            <h3>Ngaben</h3>
                            <p>Upacara kremasi untuk mengembalikan roh leluhur ke tempat asalnya</p>
                            <p class="additional-info">Upacara ini diyakini membantu jiwa mencapai moksa atau kebebasan spiritual.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Nyepi.jpeg" alt="Nyepi">
                        <div class="card-content">
                            <h3>Nyepi</h3>
                            <p>Hari pemurnian diri dengan berpuasa dan meditasi selama 24 jam</p>
                            <p class="additional-info">Selama Nyepi, seluruh pulau Bali berada dalam keheningan total - tidak ada aktivitas, lampu, atau kebisingan.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Odalan.jpg" alt="Odalan">
                        <div class="card-content">
                            <h3>Odalan</h3>
                            <p>Perayaan hari ulang tahun pura yang diadakan setiap 210 hari sekali</p>
                            <p class="additional-info">Setiap pura memiliki tanggal Odalan sendiri berdasarkan kalender Bali.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Omed omedan.jpeg" alt="Omed-omedan">
                        <div class="card-content">
                            <h3>Omed-omedan</h3>
                            <p>Festival 'tarik-menarik' unik yang dilaksanakan sehari setelah Nyepi di Banjar Kaja, Sesetan</p>
                            <p class="additional-info">Festival yang unik ini diyakini membawa keberuntungan dan kesuburan bagi warga desa.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Tari Barong.jpg" alt="Tari Barong">
                        <div class="card-content">
                            <h3>Tari Barong</h3>
                            <p>Tarian sakral yang menggambarkan pertarungan antara kebaikan (Barong) dan kejahatan (Rangda)</p>
                            <p class="additional-info">Barong merupakan makhluk mitologi yang melambangkan kebaikan dan pelindung.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Tari Kecak.jpg" alt="Tari Kecak">
                        <div class="card-content">
                            <h3>Tari Kecak</h3>
                            <p>Pertunjukan dramatik dengan paduan suara 'cak' yang menceritakan kisah Ramayana</p>
                            <p class="additional-info">Tarian ini unik karena tidak menggunakan iringan gamelan, melainkan suara paduan 'cak' dari puluhan penari pria.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Tari Legong.jpg" alt="Tari Legong">
                        <div class="card-content">
                            <h3>Tari Legong</h3>
                            <p>Tarian klasik anggun yang ditarikan oleh penari wanita dengan gerakan rumit dan kostum mewah</p>
                            <p class="additional-info">Legong dianggap sebagai salah satu tarian Bali paling halus dan elegan, biasanya ditarikan oleh gadis muda.</p>
                        </div>
                    </div>

                    <div class="destination-card">
                        <img src="/images/Subak.jpg" alt="Subak">
                        <div class="card-content">
                            <h3>Subak</h3>
                            <p>Sistem irigasi tradisional yang mencerminkan filosofi Tri Hita Karana dalam pertanian Bali</p>
                            <p class="additional-info">Subak telah diakui UNESCO sebagai warisan budaya dunia yang menunjukkan harmonisasi antara manusia, alam, dan spiritual.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section class="tips-section">
            <div class="heading-container">
                <div class="icon-wrapper">
                    <img src="/images/image 35.png" alt="Location Icon">
                </div>
                <h2 class="heading-title">Tips untuk pergi ke Bali</h2>
            </div>
            <hr class="divider">

            <div class="tips-container">
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Di mana saya bisa mendapatkan makanan halal di Bali?</h3>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="faq-answer">
                        <p>Banyak restoran halal tersedia di area-area seperti Kuta, Seminyak, dan Denpasar. Cari sertifikasi halal MUI atau tanyakan kepada staf restoran.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Apa saja hal yang boleh dan tidak boleh dilakukan yang perlu kita perhatikan?</h3>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="faq-answer">
                        <p>Hormati tempat suci, kenakan pakaian sopan saat mengunjungi pura, jangan menginjak sesajen, dan patuhi aturan saat Nyepi.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Kapan ombak besar di Bali?</h3>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="faq-answer">
                        <p>Ombak besar biasanya terjadi antara bulan Juni hingga September, cocok untuk berselancar bagi yang berpengalaman.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Ke mana saya harus pergi di sore hari?</h3>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="faq-answer">
                        <p>Pantai Jimbaran untuk makan malam seafood, Tanah Lot untuk sunset, atau Uluwatu untuk tari Kecak.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Apa yang bisa kita lakukan di Bali?</h3>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="faq-answer">
                        <p>Berkunjung ke pura, berselancar, yoga, spa, wisata kuliner, trekking di sawah, dan menikmati kehidupan malam.</p>
                    </div>
                </div>
            </div>
        </section>
  `;

  setTimeout(() => {
    // Toggle untuk btnSelengkapnya
    const btnSelengkapnya = document.getElementById('btnSelengkapnya');
    if (btnSelengkapnya) {
      btnSelengkapnya.onclick = function() {
        const detail = document.getElementById('detailBali');
        if (detail.style.display === "none") {
          detail.style.display = "block";
          this.textContent = "Sembunyikan";
        } else {
          detail.style.display = "none";
          this.textContent = "Selengkapnya";
        }
      };
    }

    // Toggle untuk FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');
        
        // Close all other answers
        document.querySelectorAll('.faq-item').forEach(item => {
          if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = null;
            item.querySelector('.arrow').style.transform = 'rotate(0deg)';
          }
        });

        // Toggle current answer
        faqItem.classList.toggle('active');
        if (faqItem.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          arrow.style.transform = 'rotate(180deg)';
        } else {
          answer.style.maxHeight = null;
          arrow.style.transform = 'rotate(0deg)';
        }
      });
    });
  }, 100);

  return content;
}

// Initialize MVP components
export function initCultureEvents() {
    const view = new CultureView();
    const model = new CultureModel();
    const presenter = new CulturePresenter(view, model);

    // Call any necessary initialization methods from the presenter
    presenter.init && presenter.init();
}
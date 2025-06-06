import AboutModel from '../model/AboutModel.js';
import AboutPresenter from '../presenter/AboutPresenter.js';

// View implementation
class AboutView {
    constructor() {
        this.container = null;
    }

    showLoading() {
        // Implementation for loading state
        console.log('Loading...');
    }

    hideLoading() {
        // Implementation for hiding loading state
        console.log('Loading complete');
    }

    showError(message) {
        console.error(message);
    }

    renderTeamMembers(members) {
        const teamContainer = document.querySelector('.team-container');
        if (!teamContainer) return;
        // Tidak mengubah konten, hanya contoh jika ingin render dinamis
        // teamContainer.innerHTML = ...
    }

    renderAboutImages(images) {
        // Tidak mengubah konten, hanya contoh jika ingin render dinamis
    }
}

// Export AboutUs component
export default function AboutUs() {
    return `
    <section class="about-content">
    <h2>See Bali Like Never Before</h2>  
        <div class="container">          
            <div class="content-grid">
            <div class="content-image">
                    <div class="image-placeholder bali-themed">
                       <img src="images/Bali-History-1320x743.jpg" alt="">
                    </div>
                </div>
                <div class="content-text">
                    <p class="lead-text"><span style="font-size:30px; font-weight: bolder;">NUSABali</span> platform perjalanan yang berbasis di Bali, memungkinkan Anda menjelajahi
keindahan Bali dengan penawaran eksklusif di berbagai akomodasi, mulai dari resor mewah hingga permata tersembunyi yang menawan.</p>
                    <p>Temukan pantai yang menakjubkan, budaya, dan pengalaman lokal dengan kenyamanan platform kami, yang menawarkan pemesanan mudah
untuk akomodasi, aktivitas, dan transportasi.</p>
                </div>
                
            </div>
        </div>
    </section>

        <section class="more-about-us">
            <h2>More <br> about us...</h2>            
            <div class="bento-grid">
                <div class="bento-item large">
                    <img src="/images/about1.png" alt="Bali Temple">
                </div>
                
                <div class="bento-item medium">
                    <img src="/images/about2.png" alt="Bali Temple">
                </div>
                
                <div class="bento-item medium">
                    <img class="bunga1" src="/images/bunga-1.png">
                    <img src="/images/about3.png" alt="Bali Temple">
                </div>
                
                <div class="bento-item large">
                    <img class="bunga2" src="/images/bunga-2.png">
                    <img src="/images/about4.png" alt="Bali Temple">
                </div>
                
            </div>
        </section>

        <section class="vision-section">
            <h2> Our Vision &amp; Mision</h2>
            <div class="visi">
                <h4>Visi:</h4>
                <p style="width: 100%;">Menjadi platform digital terpercaya untuk menjelajahi dan mengenal wisata Bali dengan pendekatan yang
                    informatif dan inovatif.</p>
            </div>

            <div class="misi">
                <h4>Misi:</h4>
                <p style="width: 100%;">
                    1. Memberikan informasi wisata yang lengkap dan relevan.
                    2. Mengintegrasikan teknologi machine learning untuk pengalaman yang lebih personal.
                    3. Mendorong pertumbuhan pariwisata lokal secara berkelanjutan.</p>
            </div>
        </section>

        <section class="team-section">
            <h2>Meet Our Team</h2>
            
            <div class="team-container">
                <div class="team-member">
                    <img src="/images/FotoAlif.jpg" alt="Alif Setyabudi">
                    <h5>Alif Setyabudi</h5>
                    <span class="team-role">FC190D5Y1100</span>
                    <div class="team-social-bar"></div>
                    <div class="team-social">
                        <a href="https://www.linkedin.com/in/alif-setyabudi-informatika-726b60350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="social-icon linkedin" style="--i:1"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/alif-setyabudi-w" class="social-icon github" style="--i:2"><i class="fab fa-github"></i></a>
                        <a href="https://wa.me/qr/6ZGWICXLWWNPK1" class="social-icon whatsapp" style="--i:4"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/FotoKayis.jpg" alt="Kayyis Abdullah">
                    <h5>Kayyis Abdullah</h5>
                    <span class="team-role">FC190D5Y0618</span>
                    <div class="team-social-bar"></div>
                    <div class="team-social">
                        <a href="https://www.linkedin.com/in/kayyisabd/" class="social-icon linkedin" style="--i:1"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/KayyisAbdullah" class="social-icon github" style="--i:2"><i class="fab fa-github"></i></a>
                        <a href="https://wa.me/qr/4CHX5CO37SPWD1" class="social-icon whatsapp" style="--i:4"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/FotoRaid.jpg" alt="Raid Hanif">
                    <h5>Raid Hanif</h5>
                    <span class="team-role">FC190D5Y1627</span>
                    <div class="team-social-bar"></div>
                    <div class="team-social">
                        <a href="https://www.linkedin.com/in/raid-hanif-rahmatullah-0aa893350/" class="social-icon linkedin" style="--i:1"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/RaidHanif" class="social-icon github" style="--i:2"><i class="fab fa-github"></i></a>
                        <a href="https://wa.me/qr/A4SFTUTC7HZXL1" class="social-icon whatsapp" style="--i:4"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/FotoAcah.jpeg" alt="Acah">
                    <h5>Acah</h5>
                    <span class="team-role">MC190D5X1584</span>
                    <div class="team-social-bar"></div>
                    <div class="team-social">
                        <a href="http://www.linkedin.com/in/acah-caca" class="social-icon linkedin" style="--i:1"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/acah21" class="social-icon github" style="--i:2"><i class="fab fa-github"></i></a>
                        <a href="https://wa.me/qr/DG6GCCBL7CWLA1" class="social-icon whatsapp" style="--i:4"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/FotoDanil.png" alt="Danil Fernando">
                    <h5>Danil Fernando</h5>
                    <span class="team-role">MC190D5Y1766</span>
                    <div class="team-social-bar"></div>
                    <div class="team-social">
                        <a href="https://www.linkedin.com/in/daniel-fernando-s-laia-0647101a7/" class="social-icon linkedin" style="--i:1"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/dano201-102" class="social-icon github" style="--i:2"><i class="fab fa-github"></i></a>
                        <a href="https://wa.me/qr/LUZ5UMAS7Y76D1" class="social-icon whatsapp" style="--i:4"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="/images/foto mario.jpg" alt="Mario Uskono">
                    <h5>Mario Uskono</h5>
                    <span class="team-role">MC190D5Y1643</span>
                    <div class="team-social-bar"></div>
                    <div class="team-social">
                        <a href="https://www.linkedin.com/in/bertnardo-mario-uskono?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="social-icon linkedin" style="--i:1"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/mariouskono" class="social-icon github" style="--i:2"><i class="fab fa-github"></i></a>
                        <a href="https://wa.me/qr/SRVZYBJYVK5OB1" class="social-icon whatsapp" style="--i:4"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize MVP components
export function initAboutEvents() {
    const view = new AboutView();
    const model = new AboutModel();
    const presenter = new AboutPresenter(view, model);
    
    // Initialize any necessary view elements or event listeners
    presenter.init && presenter.init();
}
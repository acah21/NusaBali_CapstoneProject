import DestinationModel from '../model/DestinationModel';
import DestinationPresenter from '../presenter/DestinationPresenter';

// View implementation
class DestinationView {
    constructor() {
        this.container = document.querySelector('.destination-container');
        this.resultArea = document.getElementById('hasil-rekomendasi');
    }

    _createCard(item) {
        return `
            <div class="card">
                <div class="card-image-container">
                    <img loading="lazy" src="${item.link_gambar || 'https://via.placeholder.com/300x180?text=No+Image'}" alt="${item.nama}" />
                    <div class="image-overlay"></div>
                </div>
                <div class="card-body">
                    <h3>${item.nama}</h3>
                    <p>${item.kabupaten_kota || ''}</p>
                    <div class="card-footer">
                        <div class="rating-badge">⭐ ${item.rating.toFixed(1)}</div>
                        <a href="${item.link_lokasi}" target="_blank" class="btn-rute">Rute</a>
                    </div>
                </div>
            </div>
        `;
    }

    render(destinations) {
        if (!this.resultArea) return;

        if (!Array.isArray(destinations) || destinations.length === 0) {
            this.resultArea.innerHTML = '<p>Belum ada Rekomendasi yang anda Input.</p>';
            return;
        }

        const kategori = document.getElementById('kategori')?.value || '';
        const kabupaten_kota = document.getElementById('lokasi')?.value || '';
        
        this.resultArea.innerHTML = `
            <div class="destination-results-section">
                <h2 class="recommendation-title">Tempat Wisata ${this._capitalizeFirstLetter(kategori)} di ${kabupaten_kota}</h2>
                <div class="card-container-wrapper">
                    <div class="card-container">
                        ${destinations.map(item => this._createCard(item)).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    showLoading() {
        if (!this.resultArea) return;
        this.resultArea.innerHTML = '<div class="loading-container"><div class="preloader"></div><p>Memuat rekomendasi...</p></div>';
    }

    showError(message) {
        if (!this.resultArea) return;
        this.resultArea.innerHTML = `<p class="error-message">${message}</p>`;
    }

    _capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// Page component
export default function Destination() {
    return `
        <div class="destination-container">
            <h2>Filter Wisata</h2>
            <div class="filter-group">
                <label for="kategori">Kategori:</label>
                <select id="kategori">
                    <option value="rekreasi">Rekreasi</option>
                    <option value="alam">Alam</option>
                    <option value="umum">Umum</option>
                    <option value="budaya">Budaya</option>
                </select>

                <label for="lokasi">Kabupaten/Kota:</label>
                <select id="lokasi">
                    <option value="Kabupaten Badung">Kabupaten Badung</option>
                    <option value="Kabupaten Bangli">Kabupaten Bangli</option>
                    <option value="Kabupaten Buleleng">Kabupaten Buleleng</option>
                    <option value="Kabupaten Gianyar">Kabupaten Gianyar</option>
                    <option value="Kabupaten Jembrana">Kabupaten Jembrana</option>
                    <option value="Kabupaten Karangasem">Kabupaten Karangasem</option>
                    <option value="Kabupaten Klungkung">Kabupaten Klungkung</option>
                    <option value="Kabupaten Tabanan">Kabupaten Tabanan</option>
                    <option value="Kota Denpasar">Kota Denpasar</option>
                </select>

                <label for="rating">Rating Minimal:</label>
                <div class="slider-container">
                    <span class="rating-value" id="ratingValue">3.0</span>
                    <input type="range" id="rating" min="1" max="5" step="0.1" value="3.0" oninput="document.getElementById('ratingValue').textContent = this.value" />
                </div>

                <button id="btn-tampilkan">Tampilkan Rekomendasi</button>
            </div>
            
            <div id="hasil-rekomendasi"></div>
        </div>
    `;
}

// Initialize events and MVP components
export function initDestinationEvents() {
    const view = new DestinationView();
    const model = new DestinationModel();
    const presenter = new DestinationPresenter(view, model);

    const btn = document.getElementById('btn-tampilkan');
    if (!btn) return;

    btn.addEventListener('click', async () => {
        const kategori = document.getElementById('kategori').value;
        const kabupaten_kota = document.getElementById('lokasi').value;
        const rating_min = parseFloat(document.getElementById('rating').value);

        const filterData = { kategori, kabupaten_kota, rating_min };
        console.log('Data yang dikirim:', filterData);

        view.showLoading();

        try {
            const response = await fetch('https://backend-nusabali.up.railway.app/rekomendasi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(filterData)
            });

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            
            if (Array.isArray(data) && data.length > 0) {
                view.render(data);
            } else {
                view.showError('Tidak ada rekomendasi yang sesuai.');
            }
        } catch (error) {
            view.showError(`Error: ${error.message}`);
            console.error(error);
        }
    });
}

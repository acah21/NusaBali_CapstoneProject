class DestinationModel {    constructor() {
        // Data statis untuk sementara
        this._destinations = [
            {
                id: 1,
                nama: 'Pantai Kuta',
                kabupaten_kota: 'Kabupaten Badung',
                deskripsi: 'Pantai terkenal dengan sunset yang indah',
                rating: 4.5,
                link_gambar: 'images/Destinasi1.jpg',
                link_lokasi: 'https://maps.app.goo.gl/mFRKrKm5K7fqmxV58'
            },
            {
                id: 2,
                nama: 'Tanah Lot',
                kabupaten_kota: 'Kabupaten Tabanan',
                deskripsi: 'Pura di atas batu karang di tengah laut',
                rating: 4.7,
                link_gambar: 'images/Destinasi2.jpg',
                link_lokasi: 'https://maps.app.goo.gl/LQd9oZMr9BULohco7'
            },
            {
                id: 3,
                nama: 'Ubud',
                kabupaten_kota: 'Kabupaten Gianyar',
                deskripsi: 'Pusat seni dan budaya Bali',
                rating: 4.8,
                link_gambar: 'images/Destinasi3.jpg',
                link_lokasi: 'https://maps.app.goo.gl/Cq5qL8RWyQDv6QZDA'
            },
            {
                id: 4,
                nama: 'Nusa Penida',
                kabupaten_kota: 'Kabupaten Klungkung',
                deskripsi: 'Pulau eksotis dengan pemandangan menakjubkan',
                rating: 4.6,
                link_gambar: 'images/Destiasi4.jpg',
                link_lokasi: 'https://maps.app.goo.gl/s8WdgWvEGDEK8FSGA'
            }
        ];
    }

    async getDestinations() {
        try {
            // Mengembalikan data statis
            return this._destinations;
        } catch (error) {
            console.error("Error fetching destinations:", error);
            return [];
        }
    }

    async getDestinationById(id) {
        try {
            // Mencari destinasi berdasarkan ID dari data statis
            return this._destinations.find(dest => dest.id === parseInt(id)) || null;
        } catch (error) {
            console.error(`Error fetching destination ${id}:`, error);
            return null;
        }
    }
}

export default DestinationModel;

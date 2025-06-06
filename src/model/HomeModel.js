class HomeModel {
    constructor() {
        // Existing data model for testimonials
        this.testimonials = [
            {
                id: 1,
                name: 'Alpeodo D. Mambo',
                role: 'Warga BKKBN',
                image: './images/review1.png',
                review: 'Destinize membantu saya Mencari spot tempat wisata baru di Bali dengan Mudah',
                rating: 4
            },
            {
                id: 2,
                name: 'Aceh Jamaludin',
                role: 'Mahasiswa UBJ',
                image: './images/review2.png',
                review: 'Hebat! Ini sangat membantu saya mendapatkan jodoh, tidak disangka bahwa jodoh saya adalah CS nya',
                rating: 4
            },
            {
                id: 3,
                name: 'Daniel Petrik',
                role: 'Warga di Babelan',
                image: './images/review3.png',
                review: 'Bikini Bottom menjadi sangat ramai dikunjungi saat saya memasukkannya di NusaBali ini',
                rating: 4
            }
        ];

        // Existing top destinations data
        this.destinations = [
            {
                id: 1,
                name: 'Ubud Rice Terraces',
                image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
                description: 'Explore the iconic emerald green rice paddies that cascade down hillsides like giant steps.'
            },
            {
                id: 2,
                name: 'Uluwatu Temple',
                image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
                description: 'Perched on a steep cliff 70 meters above the roaring ocean, this temple offers breathtaking sunset views.'
            },
            {
                id: 3,
                name: 'Nusa Penida',
                image: 'https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg',
                description: 'Discover dramatic cliffs, pristine beaches, and the famous Kelingking Beach on this beautiful island.'
            }
        ];
    }

    async getTestimonials() {
        return this.testimonials;
    }

    async getDestinations() {
        return this.destinations;
    }
}

export default HomeModel;
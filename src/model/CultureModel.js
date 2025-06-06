class CultureModel {
    constructor() {
        this._cultures = [
            {
                id: 1,
                name: 'Galungan & Kuningan',
                image: '/images/Galungan Kuningan.jpeg',
                description: 'Perayaan kemenangan dharma (kebaikan) melawan adharma (kejahatan) yang dirayakan setiap 210 hari',
                additionalInfo: 'Galungan menandai permulaan minggu perayaan, sementara Kuningan menandai akhirnya. Selama periode ini, spirit leluhur dipercaya mengunjungi Bumi.'
            },
            {
                id: 2,
                name: 'Gamelan Bali',
                image: '/images/Gamelan Bali.jpeg',
                description: 'Ensembel musik tradisional yang menjadi bagian integral dari upacara adat dan pertunjukan seni',
                additionalInfo: 'Gamelan Bali memiliki karakteristik unik dengan penggunaan instrumen metalofon, xylofon, drum dan gong.'
            },
            {
                id: 3,
                name: 'Mekotek',
                image: '/images/Mekotek.jpg',
                description: 'Ritual unik di Desa Munggu dimana ratusan pria membawa tongkat panjang dalam formasi tertentu',
                additionalInfo: 'Ritual ini dilakukan untuk mengusir energi negatif dan mendoakan keselamatan desa.'
            },
            {
                id: 4,
                name: 'Melasti',
                image: '/images/Melasti.jpg',
                description: 'Upacara pembersihan benda sakral dan diri sebelum Hari Raya Nyepi',
                additionalInfo: 'Melasti dilakukan di tepi pantai atau sumber air suci untuk membersihkan alam semesta dan diri dari pengaruh buruk.'
            },
            {
                id: 5,
                name: 'Ngaben',
                image: '/images/Ngaben.jpg',
                description: 'Upacara kremasi untuk mengembalikan roh leluhur ke tempat asalnya',
                additionalInfo: 'Upacara ini diyakini membantu jiwa mencapai moksa atau kebebasan spiritual.'
            },
            {
                id: 6,
                name: 'Nyepi',
                image: '/images/Nyepi.jpeg',
                description: 'Hari pemurnian diri dengan berpuasa dan meditasi selama 24 jam',
                additionalInfo: 'Selama Nyepi, seluruh pulau Bali berada dalam keheningan total - tidak ada aktivitas, lampu, atau kebisingan.'
            },
            {
                id: 7,
                name: 'Odalan',
                image: '/images/Odalan.jpg',
                description: 'Perayaan hari ulang tahun pura yang diadakan setiap 210 hari sekali',
                additionalInfo: 'Setiap pura memiliki tanggal Odalan sendiri berdasarkan kalender Bali.'
            },
            {
                id: 8,
                name: 'Omed-omedan',
                image: '/images/Omed omedan.jpeg',
                description: 'Festival \'tarik-menarik\' unik yang dilaksanakan sehari setelah Nyepi di Banjar Kaja, Sesetan',
                additionalInfo: 'Festival yang penuh keceriaan ini melibatkan pemuda-pemudi desa yang saling tarik-menarik dan menyiramkan air, sebagai simbol kesuburan dan kegembiraan.'
            },
            {
                id: 9,
                name: 'Tari Barong',
                image: '/images/Tari Barong.jpg',
                description: 'Tarian sakral yang menggambarkan pertarungan antara kebaikan (Barong) dan kejahatan (Rangda)',
                additionalInfo: 'Barong adalah makhluk mitologi yang melindungi desa, sementara Rangda adalah ratu para penyihir yang mewakili kekuatan jahat.'
            },
            {
                id: 10,
                name: 'Tari Kecak',
                image: '/images/Tari Kecak.jpg',
                description: 'Pertunjukan dramatik dengan paduan suara \'cak\' yang menceritakan kisah Ramayana',
                additionalInfo: 'Tari Kecak dimainkan oleh puluhan hingga ratusan pria yang membentuk lingkaran dan menyanyikan "cak" secara berulang-ulang, menciptakan suasana mistis.'
            },
            {
                id: 11,
                name: 'Tari Legong',
                image: '/images/Tari Legong.jpg',
                description: 'Tarian klasik anggun yang ditarikan oleh penari wanita dengan gerakan rumit dan kostum mewah',
                additionalInfo: 'Para penari Legong mulai berlatih sejak usia sangat muda untuk menguasai gerakan-gerakan yang kompleks dan ekspresif.'
            },
            {
                id: 12,
                name: 'Subak',
                image: '/images/Subak.jpg',
                description: 'Sistem irigasi tradisional yang mencerminkan filosofi Tri Hita Karana dalam pertanian Bali',
                additionalInfo: 'Subak tidak hanya sistem pengairan, tetapi juga organisasi sosial-religius yang mengelola distribusi air secara adil dan berkelanjutan.'
            }
        ];
    }

    async getCultures() {
        // Return the static data
        return this._cultures;
    }

    async getCultureById(id) {
        // Find and return culture by ID
        return this._cultures.find(culture => culture.id === parseInt(id)) || null;
    }

    async getCulturesByCategory(category) {
        // For now, return all cultures since we don't have categories
        return this._cultures;
    }
}

export default CultureModel;

class AboutModel {
    constructor() {
        this.teamMembers = [
            {
                id: 1,
                name: 'RAID Rahmatullah',
                role: 'Project Leader',
                image: './images/FotoRaid.jpg',
                description: 'Mahasiswa Semester 4 Jurusan TRPL di UBJ'
            },
            {
                id: 2,
                name: 'MUHAMMAD KAYIS',
                role: 'Frontend Developer',
                image: './images/FotoKayis.jpg',
                description: 'Mahasiswa Semester 4 Jurusan TRPL di UBJ'
            },
            {
                id: 3,
                name: 'DANIEL FERNANDO',
                role: 'Backend Developer',
                image: './images/FotoDanil.png',
                description: 'Mahasiswa Semester 4 Jurusan TRPL di UBJ'
            },
            {
                id: 4,
                name: 'ALIF MAULANA SETYAWAN',
                role: 'UI/UX Designer',
                image: './images/FotoAlif.jpeg',
                description: 'Mahasiswa Semester 4 Jurusan TRPL di UBJ'
            },
            {
                id: 5,
                name: 'ACHMAD FAUZAN',
                role: 'Quality Assurance',
                image: './images/FotoAcah.jpeg',
                description: 'Mahasiswa Semester 4 Jurusan TRPL di UBJ'
            }
        ];

        this.aboutImages = [
            {
                id: 1,
                image: './images/about1.png',
                title: 'History',
                description: 'The rich cultural heritage and historical significance of Bali'
            },
            {
                id: 2,
                image: './images/about2.png',
                title: 'Culture',
                description: 'The vibrant traditions and customs that make Bali unique'
            },
            {
                id: 3,
                image: './images/about3.png',
                title: 'Nature',
                description: 'The stunning natural landscapes and biodiversity'
            },
            {
                id: 4,
                image: './images/about4.png',
                title: 'Community',
                description: 'The warm and welcoming Balinese community'
            }
        ];
    }

    async getTeamMembers() {
        return this.teamMembers;
    }

    async getAboutImages() {
        return this.aboutImages;
    }
}

export default AboutModel;
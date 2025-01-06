import CardData from '../models/CardData';

class HomePageViewModel {
    popularPackages: CardData[] = [];
    onlineFortuneTelling: { id: string; title: string; imageUrl: string }[] = [];
    data: CardData | undefined;

    fetchData() {
        this.popularPackages = [
            {
                id: '1',
                title: 'ดูดวงการงาน',
                price: 300,
                rating: 4.8,
                imageUrl: 'https://i.pinimg.com/originals/f1/b5/87/f1b587898349916d21ce5e0b0dcc36d6.jpg'
            },
            {
                id: '2',
                title: 'ดูดวงความรัก',
                price: 599,
                rating: 4.9,
                imageUrl: '/img/merch/aa.png' // Adjusted to match local project path
            },
        ];

        console.log('Popular Packages inside fetchData:', this.popularPackages);

        this.onlineFortuneTelling = [
            { id: '1', title: 'ทำนายฝัน', imageUrl: '/img/fortune_telling/image3.png' },
            { id: '2', title: 'สะเดาะเคราะห์', imageUrl: '/img/fortune_telling/image4.png' },
        ];
    }
}

export default HomePageViewModel;

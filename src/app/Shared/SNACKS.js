import chipImg from '../assets/img/Chip.png';
import cookieImg from '../assets/img/Cookies.jpg';
import fryImg from '../assets/img/Fries.jpg';
import muffinImg from '../assets/img/redux-woods.jpg';

export const SNACKS = [
    {
        id: 0,
        name: 'Chips',
        image: chipImg,
        quantity: 12,
        description:
            'Crispy, crunchy, and delicious'
    },
    {
        id: 1,
        name: 'Cookies',
        image: cookieImg,
        quantity: 12,
        description:
            'Warm, chewy, and melting'
    },
    {
        id: 2,
        name: 'Fries',
        image: fryImg,
        elevation: 2901,
        quantity: 13,
        description:
            'Hot, crisp, fluffy'
    },
    {
        id: 3,
        name: 'Muffin',
        image: muffinImg,
        elevation: 42,
        featured: true,
        description:
            "Soft, sweet, and fruity"
    }
];
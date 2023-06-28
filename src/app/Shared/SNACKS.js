import chipImg from '../assets/img/Chip.png';
import cookieImg from '../assets/img/Cookies.jpg';
import fryImg from '../assets/img/Fries.jpg';
import muffinImg from '../assets/img/Muffin.jpg';
import burgerImg from '../assets/img/Burger.jpg'
import paniniImg from '../assets/img/Panini.jpg'
import ultimateImg from '../assets/img/Ultimate_S.jpg'
import wingsImg from '../assets/img/Wings.jpg'
import saladImg from'../assets/img/Salad.jpg'
import pizzaImg from '../assets/img/pexels-cottonbro-3944315.jpg'
import appleImg from '../assets/img/Apples.png'
import brownieImg from '../assets/img/Brownie.jpg'
import cokeImg from '../assets/img/Coke.jpg'
import drPepperImg from '../assets/img/Dr.Pepper.jpg'
import fruitSodaImg from '../assets/img/Fruit_Soda.jpg'

export const SNACKS = [
    {
        id: 0,
        name: 'Burger',
        image: burgerImg,
        quantity: 12,
        section:"meal",
        description:
            'Hot, juicy, and beefy'
    },
    {
        id: 1,
        name: 'Panini',
        image: paniniImg,
        quantity: 12,
        section: "meal",
        description:
            'Warm, chewy, and melting'
    },
    {
        id: 2,
        name: 'Ultimate',
        image: ultimateImg,
        elevation: 2901,
        quantity: 13,
        section: "meal",
        description:
            'Hot, crisp, fluffy'
    },
    {
        id: 3,
        name: 'Wings',
        image: wingsImg,
        elevation: 42,
        featured: true,
        section: "meal",
        description:
            "Soft, sweet, and fruity"
    },
    {
        id: 4,
        name: 'Salad',
        image: saladImg,
        quantity: 12,
        section: "meal",
        description:
            'Crispy, crunchy, and delicious'
    },
    {
        id: 5,
        name: 'Pizza',
        image: pizzaImg,
        quantity: 12,
        section: "meal",
        description:
            'Warm, chewy, and melting'
    },
    {
        id: 6,
        name: 'Fries',
        image: fryImg,
        elevation: 2901,
        quantity: 13,
        section:"snack",
        description:
            'Hot, crisp, fluffy'
    },
    {
        id: 7,
        name: 'Muffin',
        image: muffinImg,
        quantity: 12,
        section:"snack",
        description:
            "Soft, sweet, and fruity"
    },
    {
        id: 8,
        name: 'chip',
        image: chipImg,
        quantity: 12,
        section:"snack",
        description:
            'Crispy, crunchy, and delicious'
    },
    {
        id: 9,
        name: 'Cookie',
        image: cookieImg,
        quantity: 12,
        section:"snack",
        description:
            'Warm, chewy, and melting'
    },
    {
        id: 10,
        name: 'Brownie',
        image: brownieImg,
        quantity: 12,
        section:"snack",
        description:
            'Warm, chewy, and melting'
    },
    {
        id: 11,
        name: 'Apple',
        image: appleImg,
        quantity: 13,
        section:"snack",
        description:
            'Hot, crisp, fluffy'
    },
    {
        id: 12,
        name: 'Coke',
        image: cokeImg,
        quantity: 12,
        section: "drink",
        description:
            "Soft, sweet, and fruity"
    },
    {
        id: 13,
        name: 'Dr. Pepper',
        image: drPepperImg,
        quantity: 12,
        section: "drink",
        description:
            'Crispy, crunchy, and delicious'
    },
    {
        id: 14,
        name: 'Fruit Soda',
        image: fruitSodaImg,
        quantity: 12,
        section: "drink" ,
        description:
            'Warm, chewy, and melting'
    }
]

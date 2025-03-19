/* Statics */
import COFFEE_1 from '/img/carousel/1.jpg';
import COFFEE_2 from '/img/carousel/2.jpg';
import COFFEE_3 from '/img/carousel/3.jpg';

export interface ICarousel {
  item: number;
  title: string;
  desc: string;
  img: string;
}

export const carouselData: ICarousel[] = [
  {
    item: 1,
    title: 'Exceptional Coffee',
    desc: 'Experience the coffee in El Salvador',
    img: COFFEE_1,
  },
  {
    item: 2,
    title: 'A moment for you',
    desc: 'Relax and enjoy a unique cup of coffee with us.',
    img: COFFEE_2,
  },
  {
    item: 3,
    title: 'Quality & Comfort',
    desc: 'Enjoy excellent service in a modern and cozy environment',
    img: COFFEE_3,
  },
];

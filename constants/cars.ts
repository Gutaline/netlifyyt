import {
  logoLi,
  logoZeekr,
  logoGeely,
  logoAvatr,
  logoVoyah,
  logoAito,
  logoGac,
} from '@/icons';
import { car } from '@/images';
import { StaticImageData } from 'next/image';

export interface ICarData {
  icon: any;
  brandName: string;
  model: string;
  type: string;
  year: string;
  price: string;
  speed: string;
  privod: string;
  engine: string;
  color: string[];
  image: StaticImageData;
  inStock: boolean;
}

export const carsData = [
  // LIXIANG L6
  //   LIXIANG L7
  // LIXIANG L8
  // LIXIANG L9
  // LIXIANG MEGA
  {
    icon: logoLi,
    brandName: 'LIXIANG',
    model: 'LIXIANG L6',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: false,
  },
  {
    icon: logoLi,
    brandName: 'LIXIANG',
    model: 'LIXIANG L7',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: false,
  },
  {
    icon: logoLi,
    brandName: 'LIXIANG',
    model: 'LIXIANG L8',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: false,
  },
  {
    icon: logoLi,
    brandName: 'LIXIANG',
    model: 'LIXIANG L9',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: false,
  },
  {
    icon: logoLi,
    brandName: 'LIXIANG',
    model: 'LIXIANG MEGA',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: false,
  },
  //   ZEEKR 001
  // ZEEKR 001 FR
  // ZEEKR 007
  // ZEEKR 009
  {
    icon: logoZeekr,
    brandName: 'ZEEKR',
    model: ' ZEEKR 001',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  {
    icon: logoZeekr,
    brandName: 'ZEEKR',
    model: ' ZEEKR 001 FR',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  {
    icon: logoZeekr,
    brandName: 'ZEEKR',
    model: ' ZEEKR 007',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  {
    icon: logoZeekr,
    brandName: 'ZEEKR',
    model: ' ZEEKR 009',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  // AVATR 11
  // AVATR 12
  {
    icon: logoAvatr,
    brandName: 'AVATR',
    model: 'AVATR 11',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  {
    icon: logoAvatr,
    brandName: 'AVATR',
    model: 'AVATR 12',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  // AITO M8
  {
    icon: logoAito,
    brandName: 'AITO',
    model: 'AITO M8',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  // VOYAH FREE
  // VOYAH DREAM
  {
    icon: logoVoyah,
    brandName: 'VOYAH',
    model: 'VOYAH FREE',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  {
    icon: logoVoyah,
    brandName: 'VOYAH',
    model: 'VOYAH DREAM',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  // GAC GS 8 Hybrid
  {
    icon: logoGac,
    brandName: 'GAC',
    model: 'GAC GS 8 Hybrid',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  // GEELY ATLAS PRO
  // GEELY PREFACE
  {
    icon: logoGeely,
    brandName: 'GEELY',
    model: 'GEELY ATLAS PRO',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
  {
    icon: logoGeely,
    brandName: 'GEELY',
    model: 'GEELY  PREFACE',
    type: 'Электромобиль',
    year: '2024',
    price: '1 000 000',
    speed: '5,9 сек.',
    privod: 'RWD',
    engine: '200 л.с',
    color: ['белый', 'черный'],
    image: car,
    inStock: true,
  },
];

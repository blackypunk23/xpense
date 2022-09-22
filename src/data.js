// import images
import LogoImg from '../src/assets/img/header/logo.svg';
import HeroImg from '../src/assets/img/hero/image.svg';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Request a demo',
};

export const nav = [
  { name: 'Features', href: '/' },
  { name: 'About us', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Feedback', href: '/' },
];

export const hero = {
  title: 'Track your Expenses to Save Money',
  subtitle: 'Helps you to organize your income and expenses',
  btnText: 'Try free demo',
  compText: '— Web, iOS and Android',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Alwalys online',
    title: 'Real-time support with cloud',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Free some cost',
    title: 'Save cost for you and family',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Use anytime',
    title: 'Use anytime when you need',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'The Product we work with.',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Cross platform',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
    },
    {
      icon: CardIconImg2,
      title: 'Cloud server',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
    },
    {
      icon: CardIconImg3,
      title: 'Pure Javascript',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
    },
  ],
};

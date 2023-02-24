// import images
// import LogoImg from '../src/assets/img/header/logo.svg';
import LogoImg from '../src/assets/img/header/logotruck.png'; 
// import HeroImg from '../src/assets/img/hero/image.svg';
import OverviewProductImg from '../src/assets/img/trucks/truckroad.jpg';
// import OverviewProductImg from '../src/assets/img/overview/product.svg';
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
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

// trucks 
import MotorTruck from '../src/assets/img/trucks/motor.jpg'
import IX from '../src/assets/img/trucks/IX-2000.PNG'
import Oxi from '../src/assets/img/trucks/oxi.jpg'

export const header = {
  logo: LogoImg,
  btnText: 'Más Información',
};

export const nav = [
  // { name: 'Features', href: '/' },
  // { name: 'About us', href: '/' },
  // { name: 'Pricing', href: '/' },
  // { name: 'Feedback', href: '/' },
];

export const hero = {
  title: 'Nuestro vehículo, utiliza su motor como nosotros nuestro corazón',
  subtitle: 'El motor, el corazón de nuestros vehiculos',
  btnText: 'Contactanos',
  // compText: '— Web, iOS and Android',
  // image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    // {
    //   image: FacebookImg,
    //   delay: 300,
    // },
    // {
    //   image: GoogleImg,
    //   delay: 400,
    // },
    // {
    //   image: CocaColaImg,
    //   delay: 500,
    // },
    // {
    //   image: LinkedInImg,
    //   delay: 600,
    // },
    // {
    //   image: SamsungImg,
    //   delay: 700,
    // },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Nuestro Motor',
    title: 'El motor ha sido desarrollado  y diseñado por el fabricante',
    subtitle:
      'para que nos ofrezca una potencia y unas prestaciones específicas. Teniendo que conseguir que el nivel de emisión de gases, cumpla con  la normativa europea.',
    // btnLink: 'Learn more',
    // btnIcon: ArrowRightImg,
    image: MotorTruck,
  },
  feature2: {
    pretitle: 'Modelo',
    title: 'IX-2000 glh',
    subtitle:
      'Este modelo, produce gas orto-oxihidrogeno (equivalente a 35 LPM de gas HHO) y  esta diseñado para usar en motores cuya cilindrada va de 100 cc a 25.000 cc, pues la cantidad de gas es ajustable según necesida',
    // btnLink: 'Learn more',
    // btnIcon: ArrowRightImg,
    image: IX,
  },
  feature3: {
    pretitle: 'Orto-Oxihidrogeno',
    title: '¿Que es y que hace el gas Orto-Oxihidrogeno?',
    subtitle:
      'El alto poder calorifico del Gas Orto-Oxihidrogeno, inyectado en el motor, provoca que la temperatura de la combustión suba con rapidez, originando una pirolisis controlada que despega, quema, desintegra y elimina todos los depositos de carbonilla acumulados en menos de una hora.',
    // btnLink: 'Learn more',
    // btnIcon: ArrowRightImg,
    image: Oxi,
  },
};

export const product = {
  title: 'Cambios en el motor.',
  subtitle:
    'Que nota el cliente después de un servicio de descarbonización interna de motor.',
  cards: [
    {
      icon: CardIconImg3,
      title: 'Más potencia',
      subtitle: 'Recuperación de los caballos de fuerza',
      delay: 200,
    },
    {
      icon: CardIconImg3,
      title: 'Reducción',
      subtitle: 'Reducción del consumo',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Recuperación',
      subtitle: 'Recuperación del par perdido pora l perdida de compresión',
      delay: 600,
    },
    // {
    //   icon: CardIconImg3,
    //   title: 'Recuperación2',
    //   subtitle: 'Recuperación del par perdido pora l perdida de compresión',
    //   delay: 800,
    // },
    // {
    //   icon: CardIconImg3,
    //   title: 'Recuperación3',
    //   subtitle: 'Recuperación del par perdido pora l perdida de compresión',
    //   delay: 800,
    // },
    // {
    //   icon: CardIconImg3,
    //   title: 'Recuperación4',
    //   subtitle: 'Recuperación del par perdido pora l perdida de compresión',
    //   delay: 800,
    // },
  ],
};

export const pricing = {
  title: 'Choose your flexible plan.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$9.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$19.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$29.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '20M+ downloaded from 32 different countries',
  subtitle: 'Try demo for 7 days with full features.',
  btnText: 'Try free demo',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    // { name: 'Home', href: '/' },
    // { name: 'About us', href: '/' },
    // { name: 'Careers', href: '/' },
    // { name: 'Pricing', href: '/' },
    // { name: 'Features', href: '/' },
    // { name: 'Blog', href: '/' },
  ],
  legal: [
    // { name: 'Terms of use', href: '/' },
    // { name: 'Terms of conditions', href: '/' },
    // { name: 'Privacy policy', href: '/' },
    // { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Suscribete a nuestro nesletter',
  },
  form: {
    placeholder: 'Ingresa tu email',
    btnText: 'Subscribirse',
    smallText: 'Enviaremos noticias',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ 2023',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};

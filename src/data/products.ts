export interface Product {
  title: string;
  subtitle?: string;
  image: string;
  price: string;
  link: string;
  category: 'Apparel' | 'Home Decor' | 'Accessories';
}

export const shopUrl = "https://www.redbubble.com/people/lmartes/shop?asc=u";

export const products: Product[] = [
  {
    title: "Country style Premium Oversized Sweatshirt",
    image: "/images/20.jpg",
    price: "$48.44",
    link: "https://www.redbubble.com/i/sweatshirt/Country-style-t-shirt-by-lmartes/161696856.E3041?asc=u",
    category: 'Apparel',
  },
  {
    title: "Proud Gamer Graphic T-Shirt",
    subtitle: "Best-selling gamer design",
    image: "/images/13.jpg",
    price: "$28.39",
    link: "https://www.redbubble.com/i/t-shirt/Proud-Gamer-by-lmartes/172375703.1YYVU?asc=u",
    category: 'Apparel',
  },
  {
    title: "Amazon rainforest, my love! Graphic T-Shirt",
    image: "/images/14.jpg",
    price: "$28.39",
    link: "https://www.redbubble.com/i/t-shirt/Amazon-rainforest-my-love-by-lmartes/167965232.1YYVU?asc=u",
    category: 'Apparel',
  },
  {
    title: "Amazon rainforest, my love! Shower Curtain",
    image: "/images/15.jpg",
    price: "$55.45",
    link: "https://www.redbubble.com/i/shower-curtain/Amazon-rainforest-my-love-by-lmartes/167965232.YH6LW?asc=u",
    category: 'Home Decor',
  },
  {
    title: "Amazon rainforest, my love! Tote Bag",
    image: "/images/16.jpg",
    price: "$21.17",
    link: "https://www.redbubble.com/i/tote-bag/Amazon-rainforest-my-love-by-lmartes/167965232.A9G4R?asc=u",
    category: 'Accessories',
  },
  {
    title: "Mandala style print pattern Pillow",
    subtitle: "Customer Favorite",
    image: "/images/17.jpg",
    price: "$17.48",
    link: "https://www.redbubble.com/i/throw-pillow/Mandala-style-print-pattern-by-lmartes/163907855.5X2YF?asc=u",
    category: 'Home Decor',
  },
  {
    title: "Mandala style print pattern iPhone Case",
    subtitle: "Best-Selling Design",
    image: "/images/18.jpg",
    price: "$26.11",
    link: "https://www.redbubble.com/i/iphone-case/Mandala-style-print-pattern-by-lmartes/163907855.KN0HK?asc=u",
    category: 'Accessories',
  },
  {
    title: "Alphabet soup print pattern Throw Blanket",
    image: "/images/19.jpg",
    price: "$32.75",
    link: "https://www.redbubble.com/i/throw-blanket/Alphabet-soup-print-pattern-by-lmartes/163908356.16D0B?asc=u",
    category: 'Home Decor',
  },
  {
    title: "I'm not short: I'm fun sized Classic T-Shirt",
    image: "/images/9.png",
    price: "$18.38",
    link: "https://www.redbubble.com/i/t-shirt/I-m-not-short-I-m-fun-sized-by-lmartes/161054469.WFLAH",
    category: 'Apparel',
  },
  {
    title: "Hippie Soul Boxy T-Shirt",
    image: "/images/8.png",
    price: "$25.00",
    link: "https://www.redbubble.com/i/t-shirt/Hippie-Soul-by-lmartes/160885848.3KEDS",
    category: 'Apparel',
  },
  {
    title: "Vintage Retro Design Print",
    image: "/images/6.png",
    price: "$18.38",
    link: "https://www.redbubble.com/i/t-shirt/vintage-retro-design-print-by-lmartes/160121646.QUQES",
    category: 'Apparel',
  },
  {
    title: "Rocker Dog Playing Guitar",
    image: "/images/2.png",
    price: "$18.38",
    link: "https://www.redbubble.com/i/t-shirt/Rocker-dog-playing-his-guitar-version-2-by-lmartes/159921736.XNZKR",
    category: 'Apparel',
  },
  {
    title: "Vibrant Colors Graphic T-Shirt",
    image: "/images/3.png",
    price: "$28.39",
    link: "https://www.redbubble.com/i/t-shirt/An-illustration-with-geometric-shapes-in-vibrant-colors-by-lmartes/159820535.1YYVU?asc=u",
    category: 'Apparel',
  },
  {
    title: "A-Line Dress - Geometric",
    image: "/images/4.png",
    price: "$43.39",
    link: "https://www.redbubble.com/i/dress/An-illustration-with-geometric-shapes-in-vibrant-colors-by-lmartes/159820535.V4WQ8?asc=u",
    category: 'Apparel',
  },
  {
    title: "Laptop Sleeve - Geometric",
    image: "/images/5.png",
    price: "$35.09",
    link: "https://www.redbubble.com/i/laptop-case/An-illustration-with-geometric-shapes-in-vibrant-colors-by-lmartes/159820535.2U5KG?asc=u",
    category: 'Accessories',
  },
  {
    title: "I Love My Bone Pillow",
    image: "/images/7.png",
    price: "$17.48",
    link: "https://www.redbubble.com/i/throw-pillow/I-love-my-bone-by-lmartes/144918671.5X2YF",
    category: 'Home Decor',
  },
];
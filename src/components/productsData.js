const products = [
  {
    id: 1,
    imageSrc: "/puma.png",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 2,
    imageSrc: "/jimmy.png",
    name: "Jimmy Choo Floral Heels",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ce6a99fad32bb7b072f6e3deb4c389697cabd7e69d5ba5aff66e7a6f71c65f?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "75,000",
  },
  {
    id: 3,
    imageSrc: "/heels.png",
    name: "Brown Casual Heels",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "45,000",
  },
  {
    id: 4,
    imageSrc: "/timber.png",
    name: "Timberland Boots",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "100,000",
  },
  {
    id: 5,
    imageSrc: "/sneakers.png",
    name: "Nike Sneakers",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 6,
    imageSrc: "/leather.png",
    name: "Brown Leather Shoe",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "30,000",
  },
  {
    id: 7,
    imageSrc: "/maleankle.png",
    name: "Black Ankle Shoe",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "90,000",
  },
  {
    id: 8,
    imageSrc: "/sandals.png",
    name: "Fenty Sandals",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 9,
    imageSrc: "/trainers.png",
    name: "Sports Trainers",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "30,000",
  },
  {
    id: 10,
    imageSrc: "/pin.png",
    name: "Zara Pin Heels",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "90,000",
  },
  {
    id: 11,
    imageSrc: "/ankle.png",
    name: "Ankle Boots",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "50,000",
  },
  {
    id: 12,
    imageSrc: "/ecco.png",
    name: "Ecco Brown Leather Shoe",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "80,000",
  },
  {
    id: 13,
    imageSrc: "/lace.png",
    name: "Brown Leather Shoe with Lace",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "23,000",
  },
  {
    id: 14,
    imageSrc: "/jordan.png",
    name: "Nike Air Jordan",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "95,000",
  },
  {
    id: 15,
    imageSrc: "/nike.png",
    name: "Nike Trainers",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "75,000",
  },
  {
    id: 16,
    imageSrc: "/air.png",
    name: "Nike Air",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "66,000",
  },
  {
    id: 17,
    imageSrc: "/gold.png",
    name: "Atmosphere Gold Heels",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "24,000",
  },
  {
    id: 18,
    imageSrc: "/colour.png",
    name: "Multicolour Sneakers",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "98,000",
  },
];

export default products;

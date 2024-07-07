const products = [
  {
    id: 1,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7e04d76fed31af703e3fea4580080bab3e49af5049ac3ddc222407b2603032a2?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 2,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/db2a2265fa481da768cc3636f63c81f726c119732196db3a383642a4dc1f207b?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ce6a99fad32bb7b072f6e3deb4c389697cabd7e69d5ba5aff66e7a6f71c65f?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f98a910c5d74d6887f051eede3dde74c6d0d89ec11490430c0fd2c4c40a91ca4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 4,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/86e9982f7e0a3c8c87c86912327a4265b63b05a70376e4d1595cf58413cbfdbb?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 5,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5b669516d26015b6057e39c110ad3e9dc1187342ac08f862d27e3d475f60f211?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 6,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c8533b154648c1ae5b59663b481f6652145612b20768d0cc53aacae06ebc0a00?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 7,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8d3d3d1b0933ab56456d096e256448650bcbb06a9cb0af97ee129567c6517b31?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 8,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a1cdb92d6da17abffc135eaa1d6308a479a0b95a3fc1f4a1495a28c6911bd21d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 9,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3747ae90c07d6ce1dfc0f28f7eefa9ebff3b74336e893182816c888bb5247a38?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 10,
    imageSrc: "/src/assets/shoe.png",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 11,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2d9767a5edbe0cd3e6a76fbcf77870665cbc55954155bd561cd80ac6020d4aaf?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 12,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/809263a745469b935dd5efd53995b30328d75e3c2858bd9dffe2947fe049abb6?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 13,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fefc4f3367be1ca746ba5ee9cdb81f2c0b768a42773f77f4e3e065c01498bdee?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 14,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a8a5c8ad9167f8e7748ff36d58830deb1a782796795ceec5904c8d7dddbac82d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 15,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/55886313e3c5db17f22d87c4078336db7d76b924ceefeabc8f92f033db37cb2d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 16,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/86e9982f7e0a3c8c87c86912327a4265b63b05a70376e4d1595cf58413cbfdbb?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/78e4082f588e5599440ad56b74bf14fd684dce2f7e938b9f0f30810587702bd4?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 17,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2d9767a5edbe0cd3e6a76fbcf77870665cbc55954155bd561cd80ac6020d4aaf?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/924d079bacd1685afdb1c90715a8ca82a83a51c61d985e573d3794ba6062249a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
  {
    id: 18,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/58a28a913aecabf68a60ade9ef7b069536daa99c3b05e2c15822d02b5b166afd?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    name: "White Puma Converse",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2519c799476098d2f7b12c6009b4db52b0f0d2bc8e056ccbbdf8bb69de5e132d?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    price: "40,000",
  },
];

export default products;

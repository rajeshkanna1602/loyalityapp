const products = [
  {
    pId: 201,
    productName: "Product One",
    imageUrl: "https://picsum.photos/100/150",
    description: `Lorem ipsum dolor sit amet, brute nihil aliquand mea ut, te docendi denique blandit usu. Summo congue scripserit vix ut.`,
    price: 100,
  },
  {
    pId: 202,
    productName: "Product Two",
    imageUrl: "https://picsum.photos/100/151",
    description: `Lorem ipsum dolor sit amet, brute nihil aliquand mea ut, te docendi denique blandit usu. Summo congue scripserit vix ut.`,
    price: 200,
  },
  {
    pId: 203,
    productName: "Product Three",
    imageUrl: "https://picsum.photos/100/152",
    description: `Lorem ipsum dolor sit amet, brute nihil aliquand mea ut, te docendi denique blandit usu. Summo congue scripserit vix ut.`,
    price: 900,
  },
];

module.exports = class Products {
  static fetchAll() {
    return products;
  }
};

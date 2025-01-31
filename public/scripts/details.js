const productObj = {
  products: [
    {
      name: "Galaxy A12",
      brand: "Samsung",
      operating_system: "Android",
      price: 899,
      discount: 60,
      quantity: 2000,
      availability_date: "2020-11-24",
      rating: 4,
      image:
        "https://static.vodafone.ro/010_0000s_0000s_0000_sm-f711_zflip3_5g_openfront_phantomblack_210611.jpg?360x360",
    },
    {
      name: "Galaxy a52s 5G",
      brand: "Samsung",
      operating_system: "Android",
      price: 1849,
      discount: 0,
      quantity: 2500,
      availability_date: "2021-08-17",
      rating: 5,
      image:
        "https://static.vodafone.ro/010_0000s_0000s_0000_sm-f711_zflip3_5g_openfront_phantomblack_210611.jpg?360x360",
    },
    {
      name: "Galaxy s21",
      brand: "Samsung",
      operating_system: "Android",
      price: 3899,
      discount: 50,
      quantity: 800,
      availability_date: "2021-01-29",
      rating: 4,
      image:
        "https://static.vodafone.ro/010_0000s_0000s_0000_sm-f711_zflip3_5g_openfront_phantomblack_210611.jpg?360x360",
    },
    {
      name: "Moto G30",
      brand: "Motorola",
      operating_system: "Android",
      price: 799,
      discount: 100,
      quantity: 1000,
      availability_date: "2021-03-17",
      rating: 4.5,
      image: "https://static.vodafone.ro/010_0002_2020_Capri.png?360x360",
    },
    {
      name: "iPhone 13",
      brand: "Apple",
      operating_system: "iOS",
      price: 4449,
      discount: 0,
      quantity: 3500,
      availability_date: "2021-09-14",
      rating: 5,
      image:
        "https://static.vodafone.ro/iPhone-12mini-purple-front.jpg?360x360",
    },
    {
      name: "iPhone 13 Pro",
      brand: "Apple",
      operating_system: "iOS",
      price: 5699,
      discount: 0,
      quantity: 3000,
      availability_date: "2021-09-14",
      rating: 5,
      image:
        "https://static.vodafone.ro/iPhone-12mini-purple-front.jpg?360x360",
    },
    {
      name: "Mi 11 Lite 5G",
      brand: "Xiaomi",
      operating_system: "Android",
      price: 1449,
      discount: 0,
      quantity: 1500,
      availability_date: "2021-03-29",
      rating: -1,
      image:
        "https://static.vodafone.ro/010_0001s_0000s_0003_K3S_n.png?360x360",
    },
    {
      name: "Pixel 6",
      brand: "Google",
      operating_system: "Android",
      price: 649,
      discount: 0,
      quantity: 0,
      availability_date: "2021-10-25",
      rating: 3,
      image: "https://static.vodafone.ro/010_0001_NTH_ID-RGB.png?360x360",
    },
    //let standardFee =  {standard_delivery_fee: 35}
    //let freeDelivery = {free_delivery_min_price: 500}
  ],
};

const url = window.location.pathname;

console.log(url);

const phoneName = decodeURI(url.slice(9));

console.log(phoneName);

// let product = productObj.products.find( item => item.name === phoneName);

// const urlParams = new URLSearchParams(window.location.search);
// const phoneName = urlParams.get('phone');
// console.log(phoneName);

let product = productObj.products.find((item) => item.name === phoneName);
console.log(product);
if (product) {
  document.getElementById("name").innerHTML =
    product.brand + " " + product.name;
  document.getElementById("price").innerHTML = product.price;
  document.getElementById("os").innerHTML = product.operating_system;
  document.getElementById("availability").innerHTML = product.availability_date;
} else {
  window.location.href = "404.html";
}

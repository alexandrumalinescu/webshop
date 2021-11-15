let products = [
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
    image: "https://static.vodafone.ro/iPhone-12mini-purple-front.jpg?360x360",
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
    image: "https://static.vodafone.ro/iPhone-12mini-purple-front.jpg?360x360",
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
    image: "https://static.vodafone.ro/010_0001s_0000s_0003_K3S_n.png?360x360",
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
];

function hideFilterBtn() {
  //document.getElementById("filter__btn").style.display = "none";
  document.getElementById("form").style.display = "block";
}

function displayProducts(filterFunction) {
  let html = "<ul>";
  let initial = products;
  if (filterFunction) {
    initial = products.filter(filterFunction);
    console.log(filterFunction);
  }
  initial.forEach((product) => {
    html += ` 
    <div class='phone__card'>
    <img src="${product.image}" alt="Phone placeholder"/>
    <li class="phone">
        <h2 ><a href="/details/${product.name}" target="_blank">${product.brand} ${product.name}</a></h2>`;
    if (product.discount > 0) {
      let finalPrice = product.price - product.discount;
      html += `
            <p>
            <span class="discounted">${product.price}</span>&nbsp; ${finalPrice} lei
            </p>
        `;
    } else {
      html += `
                <p>${product.price} lei</p>
        `;
    }
    if (product.rating > 0) {
      html += `<p>${product.rating}
      
       (Average: ${getAverageRatingBySelectedBrand(product.brand)})
        </p>     
        `;
      for (let i = 1; i <= 5; i++) {
        if (Math.floor(product.rating >= i)) {
          html += `<i class="fa fa-star checked"></i>`;
        } else {
          html += `<i class="far fa-star"></i>`;
        }
      }
    } else {
      html += `<p>-</p>`;
    }
    html += `<button class="buy__btn"><a href="/details/${product.name}" target="_blank">Cumpara</button>`;
    html += "</div>";

    html += `</li>`;
  });

  html += "</ul>";
  document.getElementById("container").innerHTML = html;
}
displayProducts();

//----CUSTOMER ACTIONS-----
//----filter by brand----
let userBrandInput = "Apple";

let filterByBrand = (brandInpunt) => {
  let productsByBrand = products.filter(
    (product) => product.brand === brandInpunt
  );
  //console.log( productsByBrand);
};

//----filter by price range----
let userPriceInput = [800, 2000].sort((a, b) => a - b);

let filterByPrice = (minPrice, maxPrice) => {
  let productsByPrice = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};
filterByPrice(userPriceInput[0], userPriceInput[1]);

//----filter by OS----
let userOsInput = "iOS";

let filterByOs = (os) => {
  let productByOs = products.filter(
    (product) =>
      product.operating_system.toLocaleLowerCase() === os.toLocaleLowerCase()
  );
};
//filterByOs(userOsInput);

//----filter by rating----
let userRatingInput = 5;

let filterByRating = (userRating) => {
  if (userRating !== -1) {
    let productsByRating = products.filter(
      (product) => product.rating >= userRating
    );
  } else if (userRating < 0) {
    console.log("The selected product dosen't have a rating");
  }
};
filterByRating(userRatingInput);

//----filter by available stock (change stock to zero to see effects)----
let filterByStock = () => {
  let productsByQuantity = products.filter((product) => product.quantity > 0);
};
filterByStock();

//----filter by available date (change availability_date to see effects)----
let startDate = new Date("2021-09-14");
let endDate = new Date("2021-10-25");
let resultProductData = products.filter((product) => {
  let date = new Date(product.availability_date);
  return date >= startDate && date <= endDate;
});
//console.log(resultProductData)

//----ADMIN ACTIONS----
//----show all phones with less than N items available in stock----
let adminInput = 2000;

let filterByAdminStock = (input) => {
  let productsByQuantityAdmin = products.filter(
    (product) => product.quantity <= input && product.quantity > 0
  );
};
filterByAdminStock(adminInput);

//----show average discount by brand----
let userBrandInputAverage = "Samsung";
let discount = products.filter((item) => {
  return item.discount > 0;
});
let discountBrand = discount.map((item) => ({
  brand: item.brand,
  discount: item.discount,
}));

let resultDiscount = [];

for (let j = 0; j < discount.length; j++) {
  if (discountBrand[j].brand === userBrandInputAverage) {
    resultDiscount.push(discountBrand[j].discount);
  }
}
let finalResult =
  resultDiscount.reduce((a, c) => a + c) / resultDiscount.length;

//----show average rating by brand----------
function showAverageRatingByBrand() {
  let brandMap = products.map((item) => item.brand);
  function uniq(a) {
    return Array.from(new Set(a));
  }
  let brand = uniq(brandMap);
  let resultRating = [];

  for (let i = 0; i < brand.length; i++) {
    let filteredBrand = products
      .filter((item) => item.brand === brand[i])
      .map((item) => item.rating);
    let mediumRating =
      filteredBrand.reduce((a, c) => a + c) / filteredBrand.length;
    if (mediumRating >= 0) {
      resultRating.push({ brand: brand[i], averageRating: mediumRating });
    }
  }
  return resultRating;
}

//----get average rating by selected brand----
function getAverageRatingBySelectedBrand(brands) {
  let a = showAverageRatingByBrand().map((item) => [
    item.brand,
    item.averageRating,
  ]);
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === brands) {
      return a[i][1].toFixed(2);
    }
  }
}

//----show max discount by brand----
let userInputMaxDiscount = "Samsung";
let maxDiscountBrand = [];
for (let k = 0; k < discountBrand.length; k++) {
  if (discountBrand[k].brand === userInputMaxDiscount) {
    maxDiscountBrand.push(discountBrand[k].discount);
  }
}
const maxValue = maxDiscountBrand.reduce(
  (acc, value) => Math.max(acc, value),
  0
);
//console.log(`Maximun discount for ${userInputMaxDiscount} brand is ${maxValue}` )

//----SEARCH----
let searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", searchAfterBrand);
function searchAfterBrand() {
  let searchValue = searchInput.value;
  displayProducts(
    (item) =>
      item.brand
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase()) ||
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
}

//---search by order---
let sort = document.getElementById("select__order");
sort.addEventListener("change", sortPrice);

function sortPrice(e) {
  if (e.target.value === "higherPrice") {
    products.sort((a, b) => a.price - b.price);
    displayProducts();
  } else {
    products.sort((a, b) => b.price - a.price);
    displayProducts();
  }
}

//----filter by multiple brands---
function multipleBrands(item, brands) {
  if (brands.length > 0) {
    return brands.includes(item.brand);
  } else {
    true;
  }
}

//---- filter by single or multiple OS ---
function multipleOs(item, os) {
  if (os.length > 0) {
    return os.includes(item.operating_system);
  } else {
    true;
  }
}

//---- filter multiple --- price
function multiplePrices(item, price) {
  let splitPrice = price.join().split("-");
  if (splitPrice) {
    if (splitPrice.length === 1) {
      return item.price - item.discount >= splitPrice[0];
    } else {
      return (
        item.price - item.discount >= splitPrice[0] &&
        item.price - item.discount <= splitPrice[1]
      );
    }
  } else {
    true;
  }
}

//----sort by multiple filters----
const filterForm = document.getElementById("form");
filterForm.addEventListener("submit", handleForm);
function handleForm(e) {
  e.preventDefault();

  document.getElementById("filter__btn").style.display = "block";
  document.getElementById("form").style.display = "none";

  let selectedBrands = document.querySelectorAll(
    "#filterBrand input[type=checkbox]:checked"
  );
  let selectedPrice = document.querySelectorAll(
    "#filterPrice input[type=radio]:checked"
  );
  let selectedOs = document.querySelectorAll(
    "#filterOs input[type=radio]:checked"
  );

  function getArraysInputs(inputs) {
    return Object.values(
      Array.from(inputs).reduce(
        (a, input) => ({ ...a, [input.id]: input.value }),
        {}
      )
    );
  }

  let selectedBrandArray = getArraysInputs(selectedBrands);
  let selectedPriceArray = getArraysInputs(selectedPrice);
  let selectedOsArray = getArraysInputs(selectedOs);
  console.log(selectedBrandArray);

  // let obj= {brand: selectedBrandArray,
  //           price: selectedPriceArray,
  //           os: selectedOsArray
  // }

  if (
    selectedBrandArray.length > 0 &&
    (selectedPriceArray.length === 0) & (selectedOsArray.length === 0)
  ) {
    displayProducts((item) => multipleBrands(item, selectedBrandArray));
  } else if (
    selectedBrandArray.length > 0 &&
    selectedPriceArray.length > 0 &&
    selectedOsArray.length === 0
  ) {
    displayProducts(
      (item) =>
        multipleBrands(item, selectedBrandArray) &&
        multiplePrices(item, selectedPriceArray)
    );
  } else if (
    selectedBrandArray.length > 0 &&
    selectedPriceArray.length === 0 &&
    selectedOsArray.length > 0
  ) {
    displayProducts(
      (item) =>
        multipleBrands(item, selectedBrandArray) &&
        multipleOs(item, selectedOsArray)
    );
  } else if (
    selectedBrandArray.length === 0 &&
    selectedPriceArray.length > 0 &&
    selectedOsArray.length > 0
  ) {
    displayProducts(
      (item) =>
        multiplePrices(item, selectedPriceArray) &&
        multipleOs(item, selectedOsArray)
    );
  } else if (
    selectedBrandArray.length === 0 &&
    selectedPriceArray.length === 0 &&
    selectedOsArray.length > 0
  ) {
    displayProducts((item) => multipleOs(item, selectedOsArray));
  } else if (
    selectedBrandArray.length === 0 &&
    selectedPriceArray.length > 0 &&
    selectedOsArray.length === 0
  ) {
    displayProducts((item) => multiplePrices(item, selectedPriceArray));
  } else {
    displayProducts(
      (item) =>
        multipleBrands(item, selectedBrandArray) &&
        multipleOs(item, selectedOsArray) &&
        multiplePrices(item, selectedPriceArray)
    );
  }
}

// function buyProduct() {
//   let buy = document.getElementById("buyProduct").getAttribute("value");

//   console.log(buy);
// }

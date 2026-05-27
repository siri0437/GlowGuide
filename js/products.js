let compareItems = JSON.parse(
  localStorage.getItem("compareItems")
) || [];

let allProducts = [];



async function loadProducts() {

  try {

    const response =
      await fetch("data/products.json");

    const data = await response.json();

    allProducts = data.products;

    displayProducts(allProducts);

  }

  catch(error) {

    console.log(error);

  }

}



function displayProducts(products) {

  const container =
    document.getElementById("products-container");

  container.innerHTML = "";

  products.forEach(product => {

    container.innerHTML += `

      <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src="${product.image}"
          class="w-full h-64 object-cover"
        />

        <div class="p-5">

          <h2 class="text-2xl font-bold">
            ${product.name}
          </h2>

          <p class="text-gray-500 mt-1">
            ${product.brand}
          </p>

          <p class="mt-2 text-purple-600 font-bold text-xl">
            ₹${product.price}
          </p>

          <p class="mt-2">
            ⭐ ${product.rating}
          </p>

          <p class="mt-2 text-sm text-gray-600">
            Skin Type:
            ${product.skinType}
          </p>

          <div class="mt-3 flex flex-wrap gap-2">

            ${product.ingredients.map(ingredient => `

              <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">

                ${ingredient}

              </span>

            `).join('')}

          </div>

          <div class="mt-5 flex gap-3">

            <button
              onclick="addWishlist('${product.name}')"
              class="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600">

              ❤️ Wishlist

            </button>

            <button
              onclick="addCompare(${product.id})"
              class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">

              Compare

            </button>

          </div>

        </div>

      </div>

    `;

  });

}



function addCompare(id) {

  if (!compareItems.includes(id)) {

    compareItems.push(id);

    localStorage.setItem(
      "compareItems",
      JSON.stringify(compareItems)
    );

    showToast("Added for comparison ✨");

  }

  else {

    showToast("Already added ⚡");

  }

}



function filterProducts() {

  const searchValue =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const skinValue =
    document.getElementById("skinFilter")
    .value;

  const priceValue =
    document.getElementById("priceFilter")
    .value;

  const filteredProducts =
    allProducts.filter(product => {

      const matchesSearch =

        product.name
        .toLowerCase()
        .includes(searchValue);

      const matchesSkin =

        skinValue === "all" ||

        product.skinType === skinValue;

      const matchesPrice =

        priceValue === "all" ||

        product.price <= Number(priceValue);

      return (

        matchesSearch &&
        matchesSkin &&
        matchesPrice

      );

    });

  displayProducts(filteredProducts);

}



document.addEventListener("DOMContentLoaded", () => {

  document
    .getElementById("searchInput")
    .addEventListener("input", filterProducts);

  document
    .getElementById("skinFilter")
    .addEventListener("change", filterProducts);

  document
    .getElementById("priceFilter")
    .addEventListener("change", filterProducts);

  loadProducts();

});
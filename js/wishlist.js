function addWishlist(productName) {

  let wishlist =
    JSON.parse(localStorage.getItem("wishlist"))
    || [];

  wishlist.push(productName);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );

  showToast(productName + " added to wishlist ❤️");

}
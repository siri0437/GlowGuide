const darkBtn =
document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("bg-gray-900");

  document.body.classList.toggle("text-white");

});
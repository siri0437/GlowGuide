function showToast(message) {

  const toast =
    document.createElement("div");

  toast.className =
    "fixed top-5 right-5 bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg z-50";

  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {

    toast.remove();

  }, 3000);

}
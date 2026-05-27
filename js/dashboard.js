auth.onAuthStateChanged(user => {

  if (!user) {

    window.location.href = "login.html";

    return;

  }

  // WELCOME TEXT

  document.getElementById(
    "welcomeText"
  ).innerText = `Welcome, ${user.email} ✨`;



  // WISHLIST COUNT

  db.ref("wishlists").on("value", snapshot => {

    let count = 0;

    snapshot.forEach(child => {

      const data = child.val();

      if (data.userId === user.uid) {

        count++;

      }

    });

    document.getElementById(
      "wishlistCount"
    ).innerText = count;

  });



  // ROUTINE COUNT

  db.ref("routines").on("value", snapshot => {

    let count = 0;

    snapshot.forEach(child => {

      const data = child.val();

      if (data.userId === user.uid) {

        count++;

      }

    });

    document.getElementById(
      "routineCount"
    ).innerText = count;

  });



  // COMPARE COUNT

  const compareItems =
    JSON.parse(
      localStorage.getItem("compareItems")
    ) || [];

  document.getElementById(
    "compareCount"
  ).innerText = compareItems.length;

});
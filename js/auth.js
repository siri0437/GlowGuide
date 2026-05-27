function signup() {

  const email =
    document.getElementById("signupEmail").value;

  const password =
    document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)

    .then(() => {

      alert("Account Created Successfully 🌸");

      window.location.href = "login.html";

    })

    .catch((error) => {

      alert(error.message);

    });

}



function login() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)

    .then(() => {

      alert("Login Successful ✨");

      window.location.href = "dashboard.html";

    })

    .catch((error) => {

      alert(error.message);

    });

}



function logout() {

  auth.signOut()

    .then(() => {

      alert("Logged Out");

      window.location.href = "login.html";

    });

}
function addRoutine() {

  const user =
    auth.currentUser;

  if (!user) {

    showToast("Please login first 🌸");

    return;

  }

  const routineInput =
    document.getElementById("routineInput");

  const routine =
    routineInput.value;

  if (routine.trim() === "") {

    showToast("Enter a routine ✨");

    return;

  }

  db.ref("routines").push({

    userId: user.uid,

    routine: routine,

    createdAt: new Date().toISOString()

  });

  showToast("Routine Saved 🧴");

  routineInput.value = "";

}



function loadRoutines() {

  const user =
    auth.currentUser;

  if (!user) return;

  const container =
    document.getElementById("routineList");

  db.ref("routines").on("value", snapshot => {

    container.innerHTML = "";

    snapshot.forEach(child => {

      const data =
        child.val();

      if (data.userId === user.uid) {

        container.innerHTML += `

          <div class="bg-white p-5 rounded-2xl shadow-lg flex justify-between items-center">

            <p class="text-lg">

              🧴 ${data.routine}

            </p>

            <button
              onclick="deleteRoutine('${child.key}')"
              class="bg-red-500 text-white px-4 py-2 rounded-xl">

              Delete

            </button>

          </div>

        `;

      }

    });

  });

}



function deleteRoutine(id) {

  db.ref("routines/" + id).remove();

  showToast("Routine Deleted 🗑️");

}



auth.onAuthStateChanged(user => {

  if (user) {

    loadRoutines();

  }

});
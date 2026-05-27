function analyzeSkin() {

  const input =
    document.getElementById("userInput")
    .value
    .toLowerCase();

  const result =
    document.getElementById("result");

  let recommendation = "";



  if (
    input.includes("oily") ||
    input.includes("acne")
  ) {

    recommendation = `

      <h2 class="text-2xl font-bold mb-3">

        Recommended For Oily Skin 🌸

      </h2>

      <ul class="list-disc pl-5 space-y-2">

        <li>Niacinamide Serum</li>

        <li>Salicylic Acid Cleanser</li>

        <li>Oil-Free Moisturizer</li>

      </ul>

    `;

  }



  else if (
    input.includes("dry")
  ) {

    recommendation = `

      <h2 class="text-2xl font-bold mb-3">

        Recommended For Dry Skin 💧

      </h2>

      <ul class="list-disc pl-5 space-y-2">

        <li>Hyaluronic Acid Serum</li>

        <li>Ceramide Moisturizer</li>

        <li>Hydrating Cleanser</li>

      </ul>

    `;

  }



  else if (
    input.includes("sensitive")
  ) {

    recommendation = `

      <h2 class="text-2xl font-bold mb-3">

        Recommended For Sensitive Skin 🌿

      </h2>

      <ul class="list-disc pl-5 space-y-2">

        <li>Fragrance-Free Cleanser</li>

        <li>Centella Serum</li>

        <li>Barrier Repair Cream</li>

      </ul>

    `;

  }



  else {

    recommendation = `

      <h2 class="text-2xl font-bold mb-3">

        General Recommendation ✨

      </h2>

      <p>

        Try maintaining a gentle skincare routine
        with hydration and SPF protection.

      </p>

    `;

  }



  result.classList.remove("hidden");

  result.innerHTML = recommendation;

}
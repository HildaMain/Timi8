function checkCharacter() {
  console.log("Check character");
  let name = document.getElementById("name").value;
  let age = Number(document.getElementById("age").value);
  let score = Number(document.getElementById("score").value);

  if (isNaN(age) || age === 0) {
    document.getElementById("output").innerText = "Sláðu inn aldur!";
    return;
  }

  if (isNaN(score) || score === 0) {
    document.getElementById("output").innerText = "Sláðu inn score!";
    return;
  }

  if (name === "") {
    document.getElementById("output").innerText = "Sláðu inn nafn!";
    return;
  }

  let message = "";
  if (age < 18) {
    message = "Of ung/ur til að spila";
  } else if (score > 80 && age >= 18) {
    message = "Pro player!";
  } else if (score > 50 && score < 80) {
    message = "Normal player!";
  } else {
    message = "Beginner (nooob)";
  }
  document.getElementById("output").innerText = message;
}
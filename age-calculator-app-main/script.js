const button = document.querySelector(".calc");

function validateMonth(m) {
  console.log(m);
  if (m < 1 || m > 12) return false;

  return true;
}

function validateYear(y) {
  const today = new Date();
  const year = today.getFullYear();

  return y < year;
}

function validateDay(d, m, y) {
  console.log(d, m, y);
  const daysInMonth = new Date(y, m, 0).getDate();

  if (d > daysInMonth || d < 1) return false;

  return true;
}

function calculateAge(date) {
  const start = new Date(date);
  const end = new Date();

  let diff = end - start;

  const oneDay = 1000 * 60 * 60 * 24;
  const oneMonth = oneDay * 30.436875;

  const years = Math.floor(diff / (oneDay * 365));
  diff -= years * (oneDay * 365);

  const months = Math.floor(diff / oneMonth);
  diff -= months * oneMonth;

  const days = Math.floor(diff / oneDay);

  return { years, months, days };
}

button.addEventListener("click", () => {
  // Input fields
  const inMonth = document.querySelector(".inMonth");
  const inYear = document.querySelector(".inYear");
  const inDays = document.querySelector(".inDay");

  if (checkErrors(inDays, inMonth, inYear)) {
  } else {
    console.log("reseeting");
    // Reset styling if prior errors
    inMonth.style.outlineColor = "hsl(0, 0%, 86%)";
    inYear.style.outlineColor = "hsl(0, 0%, 86%)";
    inDays.style.outlineColor = "hsl(0, 0%, 86%)";
    const allErrorMessage = document.querySelectorAll(".errorMessage");
    const allInput = document.querySelectorAll(".input-heading");
    allErrorMessage.forEach((e) => {
      e.textContent = "";
    });
    allInput.forEach((i) => {
      i.classList.remove("red");
    });

    const date = inYear.value + "-" + inMonth.value + "-" + inDays.value;
    const { years, months, days } = calculateAge(date);
    console.log(years, months, days);

    const yearsField = document.querySelector(".years");
    const monthsField = document.querySelector(".months");
    const daysField = document.querySelector(".days");

    yearsField.textContent = `${years} `;
    monthsField.textContent = `${months} `;
    daysField.textContent = `${days} `;
  }
});

function checkErrors(d, m, y) {
  const allErrorMessage = document.querySelectorAll(".errorMessage");
  const dayError = document.querySelector(".dayError");
  const monthError = document.querySelector(".monthError");
  const yearError = document.querySelector(".yearError");
  let errors = false;
  // Check if empty
  if (d.value == "") {
    const headDay = document.querySelector(".headDay");
    dayError.textContent = "This field is required";
    headDay.classList.add("red");
    dayError.classList.add("red");
    errors = true;
    d.style.outlineColor = "red";
  }

  if (m.value == "") {
    const headMonth = document.querySelector(".headMonth");
    monthError.textContent = "This field is required";
    headMonth.classList.add("red");
    monthError.classList.add("red");
    errors = true;
    m.style.outlineColor = "red";
  }

  if (y.value == "") {
    const headYear = document.querySelector(".headYear");
    yearError.textContent = "This field is required";
    headYear.classList.add("red");
    yearError.classList.add("red");
    errors = true;
    y.style.outlineColor = "red";
  }

  return errors;
}

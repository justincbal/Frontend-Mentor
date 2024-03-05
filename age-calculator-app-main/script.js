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

  const date = inYear.value + "-" + inMonth.value + "-" + inDays.value;

  const { years, months, days } = calculateAge(date);
  console.log(years, months, days);

  const yearsField = document.querySelector(".years");
  const monthsField = document.querySelector('.months');
  const daysField = document.querySelector('.days');

  yearsField.textContent = `${years} `;
  monthsField.textContent = `${months} `;
  daysField.textContent = `${days} `;
});

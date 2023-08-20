const deg = 6;

const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sec = document.getElementById("sc");

setInterval(() => {
  let day = new Date();
  let h = day.getHours() * 30;
  let m = day.getMinutes() * deg;
  let s = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${h + m / 12}deg)`;
  mn.style.transform = `rotateZ(${m}deg)`;
  sc.style.transform = `rotateZ(${s}deg)`;
});

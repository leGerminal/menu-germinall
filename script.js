const buttons = document.querySelectorAll(".langbtn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const lang = btn.dataset.lang;
    document.body.classList.toggle("lang-en", lang === "en");
  });
});

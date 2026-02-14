// Tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.target;
    panels.forEach(p => p.classList.remove("show"));
    document.getElementById(target).classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Modal image
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openModal(src){
  if(!src) return;
  modalImg.src = src;
  modal.classList.add("show");
}
function closeModal(){
  modal.classList.remove("show");
  modalImg.src = "";
}

// Click product => image
document.querySelectorAll(".product").forEach(item => {
  item.addEventListener("click", () => {
    openModal(item.getAttribute("data-img"));
  });
});

// Close by clicking background
modal.addEventListener("click", (e) => {
  if(e.target === modal) closeModal();
});

// Close with ESC
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});

// Language switch
const langBtns = document.querySelectorAll(".langbtn");
langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    langBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const lang = btn.dataset.lang;
    document.body.classList.toggle("lang-en", lang === "en");
  });
});

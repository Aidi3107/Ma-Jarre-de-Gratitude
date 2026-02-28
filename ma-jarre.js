// Tabs (Gratitude / Pensées / etc.)
const tabButtons = document.querySelectorAll(".jar-buttons button");
const sections = document.querySelectorAll(".content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

// Accordion inside each section
document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    const isOpen = content.style.maxHeight;

    // Close all others in same section
    title.closest(".accordion")
      .querySelectorAll(".accordion-content")
      .forEach(c => c.style.maxHeight = null);

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

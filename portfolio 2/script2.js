document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  
    // Rotate effect on scroll
    const card = document.querySelector(".card");
    window.addEventListener("scroll", () => {
      const rotateY = window.scrollY / 50;
      const rotateX = window.scrollY / 100;
      card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
  });
  
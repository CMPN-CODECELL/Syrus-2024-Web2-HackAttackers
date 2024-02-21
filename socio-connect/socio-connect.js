document.addEventListener("DOMContentLoaded", (event) => {
    const clickHereBtn = document.querySelector(".hero-btn");
  
    clickHereBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default anchor link behavior
      const insightExchangeSection = document.querySelector(".discuss-sec");
      if (insightExchangeSection) {
        insightExchangeSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const loginPg = document.querySelector(".user");

  loginPg.addEventListener("click", () => {
    window.location.href = "../login/index.html";
  });
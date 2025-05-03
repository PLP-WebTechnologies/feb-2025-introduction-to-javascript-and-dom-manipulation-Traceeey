document.getElementById("change-btn").addEventListener("click", () => {
    const title = document.getElementById("main-title");
    title.textContent = "You Clicked the Button!";
    title.style.color = "#e91e63";
    title.style.fontSize = "2.5rem";
  
    const desc = document.getElementById("description");
    desc.textContent = "The text and styles have been dynamically changed!";
  });
  
  document.getElementById("toggle-btn").addEventListener("click", () => {
    const existing = document.getElementById("extra");
    
    if (existing) {
      existing.remove();
    } else {
      const newPara = document.createElement("p");
      newPara.id = "extra";
      newPara.textContent = "🎉 A new element was added!";
      document.querySelector("main").appendChild(newPara);
    }
  });
  
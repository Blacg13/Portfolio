const ACCORDION_TOGGLE_H2 = document.querySelectorAll("section > h2");
const ACCORDION_CONTENT = document.querySelectorAll("section > div");
ACCORDION_CONTENT.hidden = true;

ACCORDION_TOGGLE_H2.forEach((h2) => {
    h2.addEventListener("click", () => {
        console.log("clicked");
        // ACCORDION_CONTENT.style.display = "block";
        
    });
});
for (let i = 0; i < ACCORDION_TOGGLE_H2.length; i++) {
    ACCORDION_TOGGLE_H2[i].addEventListener("click", () => {
        this.classList.toggle("active");
    })
    
}
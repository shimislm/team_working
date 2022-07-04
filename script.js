// המבורגר
const bar = document.getElementById("burger");
// התפריט הרגיל
const nav = document.getElementById("navbar");
// const close = document.getElementById("close");

// אם המבורגר הופיע
if (bar != null) {
  // תחכה עד שיהיה קליק עליו
  bar.addEventListener("click", () => {
    // אחרי שלחצת עליו תוסיף לנאב בר אקטיב
    if(nav.classList.contains("active")){
      nav.classList.remove("active");
    }
    else{
      nav.classList.add("active");
    }
    
  });
  // close.addEventListener("click", () => {
  //   nav.classList.remove("active");
  // });
}

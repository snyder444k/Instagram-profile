const frame = document.getElementById("img_fram");
const story = document.getElementById("storyShow")

 function showStory() {
    frame.addEventListener("click",()=> {
 story.classList.toggle("showi");   
         });
 }

 showStory();
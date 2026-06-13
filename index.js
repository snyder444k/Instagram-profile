const frame = document.getElementById("img_fram");
const story = document.getElementById("storyShow");
const closeStory = document.getElementById("closeStory");
const followers = document.getElementById("follows");
const showFollowers = document.getElementById("showFollower");
const closeView = document.getElementById("closeView");

 function showStory() {
    frame.addEventListener("click",()=> {
      story.style.display = "block";
         });

     closeStory.addEventListener("click",()=> {
        story.style.display = "none";
     });

     followers.addEventListener("click",()=> {
        showFollowers.style.display = "block";
     });

     closeView.addEventListener("click",()=> {
       showFollowers.style.display = "none";
     });
 
 }

 showStory();

 
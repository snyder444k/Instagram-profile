const frame = document.getElementById("img_fram");
const story = document.getElementById("storyShow");
const closeStory = document.getElementById("closeStory");
const followers = document.getElementById("follows");
const showFollowers = document.getElementById("showFollower");
const closeView = document.getElementById("closeView");
const following = document.getElementById("followi");
const showFollowi = document.getElementById("showFollowi");
const closeViews = document.getElementById("closeViews");
const linkCowry = document.getElementById("link-cowry");
const clickLink = document.getElementById("click-it");
const linkCowry2 = document.getElementById("link-cowry2");
const clickLink2 = document.getElementById("click-it2");
const showLinks = document.getElementById("showLinks");
const tapLinks = document.getElementById("spike");
const closeLinks = document.getElementById("closeLinks");
const follow = document.getElementById("follow");
const unfollow = document.getElementById("unfollow");
const closeUnf = document.getElementById("fa-x");
const actualUnf = document.getElementById("act-unfollow"); 



 function showStory() {
    frame.addEventListener("click",()=> {
      story.style.display = "block";
         });

     closeStory.addEventListener("click",()=> {
        story.style.display = "none";
        frame.style.borderColor = "gray";
     });

     followers.addEventListener("click",()=> {
        showFollowers.style.display = "block";
     });

     closeView.addEventListener("click",()=> {
       showFollowers.style.display = "none";
     });

     following.addEventListener("click",()=> {
      showFollowi.style.display = "block";
   }); 

      closeViews.addEventListener("click",()=> {
       showFollowi.style.display = "none";
     });

     linkCowry.addEventListener("click", ()=> {
       clickLink.click();
   });

   
     linkCowry2.addEventListener("click", ()=> {
       clickLink2.click();
   });

   tapLinks.addEventListener("click",()=> {
      showLinks.style.display = "block";
   });

   closeLinks.addEventListener("click", ()=> {
     showLinks.style.display = "none";
   });

   follow.addEventListener("click",(evt)=>{
     follow.style.backgroundColor = "lightgray";
     follow.style.color = "black";
     follow.textContent = "Following";

    if(follow.textContent = "Following") {
      follow.addEventListener("click", ()=> {
         unfollow.style.display = "block";
      });

      closeUnf.addEventListener("click", ()=> {
         unfollow.style.display = "none";
      });

      actualUnf.addEventListener("click",(evt)=> {
      unfollow.style.display = "none";
      follow.style.backgroundColor = "rgb(83, 83, 247)"; 
      follow.textContent = "Follow";
      follow.style.color = "white";
        location.reload();
      });
   }

   });

   

 
 }

 showStory();

 
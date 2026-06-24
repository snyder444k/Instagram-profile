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
const chStar = document.getElementById("ch-star");
const casp = document.getElementById("casp");
const favourite = document.getElementById("r-star");
const showFavourite = document.getElementById("re-star");
const mute = document.getElementById("mute");
const callMute = document.getElementById("callMute");
const escapeMute = document.getElementById("escMute");
const closeMute = document.getElementById("closeMute");
const saveIt = document.getElementById("saveIt");
const saffed = document.getElementById("saved");
const forcePick = document.getElementById("force-pick");
const pick = document.getElementById("pick");
const tunePick = document.getElementById("tune-pick");
const picker = document.getElementById("picker");
const restrict = document.getElementById("de-restrict");
const restricted = document.getElementById("restricted"); 
const refactor = document.getElementById("re-factor");
const srestricted = document.getElementById("srestricted"); 


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

 chStar.addEventListener("click", ()=> {
          if(casp.classList.contains("fa-solid")) {
            casp.classList.remove("fa-solid");
            casp.classList.add("fa-regular");
          
          } else if(casp.classList.contains("fa-regular")) {
            casp.classList.remove("fa-regular");
            casp.classList.add("fa-solid");
          }
      }); 

      favourite.addEventListener("click",()=>{
        if(showFavourite.classList.contains("fa-regular")){
          showFavourite.classList.remove("fa-regular");
          showFavourite.classList.add("fa-solid");
        } else if(showFavourite.classList.contains("fa-solid")){
          showFavourite.classList.remove("fa-solid");
          showFavourite.classList.add("fa-regular");
        }
      });
   
  callMute.addEventListener("click",()=>{
        unfollow.style.display = "none";
        mute.style.display = "block";
  });

  escapeMute.addEventListener("click",()=> {
      mute.style.display = "none";
      unfollow.style.display = "block";
  });

  closeMute.addEventListener("click",()=>{
     mute.style.display = "none";
  });

  
   saveIt.addEventListener("click",()=>{
        mute.style.display = "none";
        saffed.style.display = "block";
        saffed.style.bottom = "0";

       setTimeout(()=>{
          saffed.style.display = "none";   
       },2000);
     
       
    });

    forcePick.addEventListener("click",()=>{
       pick.click();
    });

     tunePick.addEventListener("click",()=>{
       picker.click();
    });

restrict.addEventListener("click", () => {
    const isRestricted = refactor.classList.contains("restrict");

    if (isRestricted) {
     restricted.classList.add("act");

        setTimeout(()=> {
   restricted.classList.remove("act");
        },3000);
        
        refactor.textContent = "Unrestrict";
        refactor.classList.remove("restrict");
        refactor.classList.add("unrestricted");
        
    } else  {
        srestricted.classList.add("act");
        
         setTimeout(()=> {
   srestricted.classList.remove("act");
        },3000);

        refactor.textContent = "Restrict";
        refactor.classList.remove("unrestricted");
        refactor.classList.add("restrict");
    }
     unfollow.style.display = "none";
});
 
} 

 showStory();

 
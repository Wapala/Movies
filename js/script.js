const rightarrows = document.querySelectorAll(".right");
const leftarrows = document.querySelectorAll(".left");
const imagesliders = document.querySelectorAll(".slider");
const wrappermovies = document.querySelectorAll(".wrappermovie");


rightarrows.forEach((rightarrow,i)=>
{
    const  items = imagesliders[i].querySelectorAll("img").length;
    let clickcounts = 0;
    rightarrow.onclick = function()
    {
        const ratio = Math.floor(window.innerWidth / 200);
        clickcounts++;
        if(items - (6 + clickcounts) + (6 - ratio)> 0)
            {
                leftarrows[i].style.display = "block";
                imagesliders[i].style.transform = `translateX(${imagesliders[i].computedStyleMap().get("transform")[0].x.value - 275}px)`;
                // console.log(imagesliders[i].computedStyleMap().get("transform")[0].x.value)               
            }
            else
            {
                imagesliders[i].style.transform = "translateX(0)";
                clickcounts = 0;
            }
    }

    leftarrows[i].onclick = function()
    {
        if(clickcounts <= 0)
            {
                imagesliders[i].style.transform = "translateX(0)";
                clickcounts = 0;
                leftarrows[i].style.display = "none";
            }
            else
            {
                imagesliders[i].style.transform = `translateX(${imagesliders[i].computedStyleMap().get("transform")[0].x.value + 270}px)`;
                clickcounts--;
            }
    }
})

const watchtrailers = document.querySelectorAll(".trailerbtn");
const moviename = document.querySelector(".desch");
const trailer = document.querySelector(".trailers");
const currentvid = document.querySelector(".currentvid");
const trailervideo = document.querySelectorAll(".trailervideo");


watchtrailers.forEach((watchtrailer,i)=>
    {
    watchtrailer.onclick = function()
    {
        currentvid.style.display = "none";


        trailer.innerHTML = "";
        trailervideo[i].style.display ="block";
        trailer.appendChild(trailervideo[i]);
    }
})
currentvid.addEventListener("mouseover", ()=>{
    currentvid.controls=true;
})
trailervideo.addEventListener("mouseover", ()=>{
    trailervideo.controls=true;
})
trailervideo.controlsi;
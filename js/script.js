
const posters = [
    { title: "Poster 1", image: "/Assets/Images/dune_part_two_ver14_xlg.jpg", trailer: "/Assets/Videos/Dune  Official Main Trailer_1080p.mp4" },
    { title: "Poster 2", image: "/Assets/Images/jYDDo5As4GHy8rzQvPHytUtgJoD.webp", trailer: "/Assets/Videos/Citadel Official Trailer  Prime Video_1080p.mp4" },
    { title: "Poster 3", image: "/Assets/Images/onesheet.jpg", trailer: "/Assets/Videos/Invasion — Official Trailer _ Apple TV+.mp4" },
    { title: "Poster 4", image: "/Assets/Images/onesheet.jpg", trailer: "/Assets/Videos/KUNG FU PANDA 4  Official Trailer_1080p.mp4" },
    { title: "Poster 5", image: "/Assets/Images/onesheet.jpg", trailer: "/Assets/Videos/Migration  Official Trailer_1080p.mp4" },
    { title: "Poster 6", image: "/Assets/Images/946dd3ef-8e71-48a7-aff4-9782803f6dbb.jpeg", trailer: "/Assets/Videos/THE ROOKIE Official Trailer HD Nathan Fillion ABC Series_1080p.mp4" },
    // Add more poster objects as needed
];

// Function to display posters on the webpage
function displayPosters() {
    const posterContainer = document.querySelector(".wrappermovie");
    posters.forEach(poster => {
        const posterElement = document.createElement("img");
        posterElement.src = poster.image;
        document.querySelector(".descriptionh").textContent = poster.title;
        // Add an event listener to each poster image
        posterElement.addEventListener("click", () => {
            displayTrailer(poster.trailer);
        });
        posterContainer.appendChild(posterElement);
    });
}

// Function to display the trailer when a poster is clicked
function displayTrailer(trailerURL) {
    const trailerContainer = document.getElementById("trailer");
    // Clear previous trailer if any
    trailerContainer.innerHTML = "";
    const videoElement = document.createElement("video");
    videoElement.src = trailerURL;
    videoElement.controls = false;
    videoElement.autoplay = true;
    videoElement.muted =true;
    videoElement.loop = true;
    trailerContainer.appendChild(videoElement);
    videoElement.onclick=function () 
    {
        videoElement.controls = true;

        
    }
}

// Call the displayPosters function when the page loads
window.onload = displayPosters;





// const rightarrows = document.querySelectorAll(".right");
// const leftarrows = document.querySelectorAll(".left");
// const imagesliders = document.querySelectorAll(".slider");
// const wrappermovies = document.querySelectorAll(".wrappermovie");


// rightarrows.forEach((rightarrow,i)=>
// {
//     const  items = imagesliders[i].querySelectorAll("img").length;
//     let clickcounts = 0;
//     rightarrow.onclick = function()
//     {
//         const ratio = Math.floor(window.innerWidth / 200);
//         clickcounts++;
//         if(items - (6 + clickcounts) + (6 - ratio)> 0)
//             {
//                 leftarrows[i].style.display = "block";
//                 imagesliders[i].style.transform = `translateX(${imagesliders[i].computedStyleMap().get("transform")[0].x.value - 275}px)`;
//                 // console.log(imagesliders[i].computedStyleMap().get("transform")[0].x.value)               
//             }
//             else
//             {
//                 imagesliders[i].style.transform = "translateX(0)";
//                 clickcounts = 0;
//             }
//     }

//     leftarrows[i].onclick = function()
//     {
//         if(clickcounts <= 0)
//             {
//                 imagesliders[i].style.transform = "translateX(0)";
//                 clickcounts = 0;
//                 leftarrows[i].style.display = "none";
//             }
//             else
//             {
//                 imagesliders[i].style.transform = `translateX(${imagesliders[i].computedStyleMap().get("transform")[0].x.value + 270}px)`;
//                 clickcounts--;
//             }
//     }
// })


// const watchtrailers = document.querySelectorAll(".trailerbtn");
// const moviename = document.querySelector(".desch");
// const trailer = document.querySelector(".trailers");
// const currentvid = document.querySelector(".currentvid");

// watchtrailers.forEach((watchtrailer,i)=>
//     {
//     watchtrailer.onclick = function()
//     {
//         const getvideo = document.querySelectorAll(".trailervideo");

//         currentvid.style.display = "none";
//         getvideo[i].style.display ="block";
        
//         trailer.appendChild(getvideo[i]);
//     }
// })
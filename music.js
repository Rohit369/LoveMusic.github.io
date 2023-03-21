console.log("hello");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let audioGif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songItems"));
let songItemPaly =Array.from(document.getElementsByClassName("songItemPlay"));
let previousButton = document.getElementById("previousButton")
let forwordButton= document.getElementById("forwordButton")


let songs = [
    {songName :"chikani chameli", filePath:"songs/1.mp3",coverPath:"covers/1.jpg",},
    {songName  :"2", filePath:"songs/2.mp3",coverPath:"covers/2.jpg",},
    {songName  :"3", filePath:"songs/3.mp3",coverPath:"covers/3.jpg",},
    {songName  :"4", filePath:"songs/4.mp3",coverPath:"covers/4.jpg",},
    {songName  :"5", filePath:"songs/5.mp3",coverPath:"covers/5.jpg",},
    {songName  :"6", filePath:"songs/6.mp3",coverPath:"covers/6.jpg",},
]

//play or pause audio 
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioGif.style.opacity = 1;
    }
    else if(audioElement.currentTime==audioElement.duration){
        console.log("song is completed")
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        audioGif.style.opacity = 0;
    }
})
console.log(audioElement.duration)
// update time 
audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
    
})
// add respose for progressbar 
progressBar.addEventListener("change",()=>{
    audioElement.currentTime = (progressBar.value*audioElement.duration)/100
})

// change the image of song
songitems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverPath
   element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName
});

//makeallPlay function
const makeallPlay=()=>{
 songItemPaly.forEach((element)=>{
    element.classList.remove("fa-pause-circle")
    element.classList.add("fa-play-circle")
    
 })
}


songItemPaly.forEach((element,i)=>{
    element.addEventListener("click",(e)=>{
        //console.log(e.target,i) //e will select perticular element from array
        songIndex  = parseInt(e.target.id);
        makeallPlay();
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.play();
        audioElement.currentTime=0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioGif.style.opacity = 1;
    }) 
})

// previous button function 
previousButton.addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex =1
    }else{
        songIndex=songIndex-1
    }
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    audioGif.style.opacity = 1;
})

// forword button function 
forwordButton.addEventListener("click",()=>{
    if(songIndex>6){
        songIndex =1
    }else{
        songIndex=songIndex+1
    }
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    audioGif.style.opacity = 1;
})
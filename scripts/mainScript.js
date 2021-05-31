function animLoad(){
    document.getElementById("logo").classList.add("animX");
    setTimeout(function(){ document.getElementById("heroTitle").classList.add("animX"); }, 300);
    setTimeout(function(){ document.getElementById("heroSubTitle").classList.add("animX"); }, 300);
    setTimeout(function(){ document.getElementById("SVG").classList.add("animX"); }, 600);
    document.getElementById("maxSite").innerText = "0" + websites.length;
}

// Slider

const websites = ['Everyweb', 'SFDA love', 'Ekip', 'Help me', 'Workout']
const Languages = ['HTML/CSS/JS', 'HTML/CSS/JS/PHP', 'HTML/CSS/JS', 'HTML/CSS/JS', 'HTML/CSS/JS']
const projectDuration = ['100h', '60h', '20h', '10h', '4-5h']
const backgrounds = ['#ffc15e', '#36D9DE', '#DE36A1', '#9936DE', '#3694DE']
const colors = ['#222', '#fff', '#222', '#fff', '#222']
const images = ['res/backgroundEveryweb.png', 'res/backgroundSFDALove.png', 'res/backgroundEkip.png', 'res/backgroundHelpME.png', 'res/backgroundWorkout.png']

function verifCurrent() {
    current = document.getElementById('siteName').innerText
    i=0;
    while (current != websites[i]) {
        i++;
    }
    return nextSite = i+1;
}

function nextWebsite() {

    currentIndexWebsite = verifCurrent()
    
    if (currentIndexWebsite === 5 ) {
        currentIndexWebsite = 0;
    }
    document.getElementById("languagesRequire").innerText = Languages[currentIndexWebsite];
    document.getElementById("siteName").innerText = websites[currentIndexWebsite];
    document.getElementById("timeToDo").innerText = projectDuration[currentIndexWebsite];
    document.getElementById("currentSite").innerText = "0" + (currentIndexWebsite+1);

    animationNext()
}
function animationNext() {
    document.getElementById("languagesRequire").classList.add("animNext");
    document.getElementById("siteName").classList.add("animNext");
    document.getElementById("timeToDo").classList.add("animNext");
    document.getElementById("imgSite").classList.add("animNext");
    document.getElementById('slider').style.backgroundColor = backgrounds[currentIndexWebsite];
    document.getElementById('slider').style.color = colors[currentIndexWebsite];
    setTimeout(function(){ document.getElementById("imgSite").setAttribute('src', images[currentIndexWebsite]) }, 500);
    setTimeout(function(){ document.getElementById("languagesRequire").classList.remove("animNext"); }, 1000);
    setTimeout(function(){ document.getElementById("siteName").classList.remove("animNext"); }, 1000);
    setTimeout(function(){ document.getElementById("timeToDo").classList.remove("animNext"); }, 1000);
    setTimeout(function(){ document.getElementById("imgSite").classList.remove("animNext"); }, 1000);
}
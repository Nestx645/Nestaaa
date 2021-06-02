function loader() {
    document.getElementById("body").style.backgroundColor = "rgb(152, 127, 173)";
    document.getElementById("heroTitleTypewrite").style.transform = "scale(4)";
    document.getElementById("heroTitleTypewrite").style.textAlign = "center";
    document.getElementById("heroTitleTypewrite").style.marginTop = "-20%";
    document.getElementById("heroTitleTypewrite").style.marginLeft = "85%";
    document.getElementById("heroTitleTypewrite").style.width = "100%";
    
    setTimeout(function(){ 
        document.getElementById("body").style.backgroundColor = "rgb(152, 127, 173)";
        document.getElementById("body").style.display = "none";
        document.getElementById("heroTitleTypewrite").style.transform = "scale(1)";
        document.getElementById("heroTitleTypewrite").style.textAlign = "left";
        document.getElementById("heroTitleTypewrite").style.marginTop = "25%";
        document.getElementById("heroTitleTypewrite").style.marginLeft = "15%";
        document.getElementById("heroTitleTypewrite").style.width = "100%";
    }, 5300);
    setTimeout(function(){ 
        document.getElementById("body").style.display = "block";
        animLoad()
    }, 5305);
    
    
}

function animLoad(){
    document.getElementById("logo").classList.add("animX");
    setTimeout(function(){ document.getElementById("heroTitleTypewrite").classList.add("animX"); }, 300);
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
const links = ['https://xtsen.github.io/Everyweb/', 'https://xtsen.github.io/SFDA-love/', 'http://so667.epizy.com/', 'http://helpme.byethost8.com/index.html', 'https://xtsen.github.io/Workout/']

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

function previousWebsite() {

    currentIndexWebsite = verifCurrent()-2
    
    if (currentIndexWebsite === -1 ) {
        currentIndexWebsite = 4;
    }
    document.getElementById("languagesRequire").innerText = Languages[currentIndexWebsite];
    document.getElementById("siteName").innerText = websites[currentIndexWebsite];
    document.getElementById("timeToDo").innerText = projectDuration[currentIndexWebsite];
    document.getElementById("currentSite").innerText = "0" + (currentIndexWebsite + 1);

    animationPrevious()
}
function animationPrevious() {
    currentIndexWebsite;
    document.getElementById("languagesRequire").classList.add("animPrevious");
    document.getElementById("siteName").classList.add("animPrevious");
    document.getElementById("timeToDo").classList.add("animPrevious");
    document.getElementById("imgSite").classList.add("animPrevious");
    document.getElementById('slider').style.backgroundColor = backgrounds[currentIndexWebsite];
    document.getElementById('slider').style.color = colors[currentIndexWebsite];
    
    setTimeout(function(){ document.getElementById("imgSite").setAttribute('src', images[currentIndexWebsite]) }, 500);
    
    setTimeout(function(){ document.getElementById("languagesRequire").classList.remove("animPrevious"); }, 1000);
    setTimeout(function(){ document.getElementById("siteName").classList.remove("animPrevious"); }, 1000);
    setTimeout(function(){ document.getElementById("timeToDo").classList.remove("animPrevious"); }, 1000);
    setTimeout(function(){ document.getElementById("imgSite").classList.remove("animPrevious"); }, 1000);
}


function linkwebsite() {
    linkSite = verifCurrent()-1;

    document.location.href = links[linkSite];
}

function showSlider() {
    document.getElementById("slider").style.opacity =  "1";

}

function choiceLanguage(language) {
    // Animation body
    document.getElementById("body").style.opacity = "0";
    document.getElementById("body").style.backgroundColor = "rgb(152, 127, 173)";

    bigTitle = document.getElementById("heroTitle")
    subTitle = document.getElementById("heroSubTitle")
    buttonWebsite = document.getElementById("buttonSeeWebsite")

    titleAbout = document.getElementById("titleAboutMe")
    subTitleAbout = document.getElementById("subTitleAboutMe")
    contactTitle = document.getElementById("linkToMail")

    if (language === 'en') {
        bigTitle.innerText = "Hey ! I'm Xtsen";
        subTitle.innerText = "Now you know me so you can discover my projects";
        buttonWebsite.innerText = "Watch this";
        setTimeout(function(){ document.getElementById("body").style.opacity = "1" }, 1000);
    }
    else if (language === 'fr'){
        bigTitle.innerText = "Je suis Xtsen";
        subTitle.innerText = "Maintenant que les présentations sont faites, je vous invite à découvrir mes projets";
        buttonWebsite.innerText = "Voir le site";

        titleAbout.innerText = "A propos de moi";
        subTitleAbout.innerText = "J'ai 16 et je suis en premièreau lycée St Francois d'Assise. Je prefère le frontend mais j'ai aussi fait un peu de python et de C++. Je voudrais devenir freelancer dans le frontend mais c'est assez compliqué.";
        contactTitle.innerText = "Contactez moi !";
        setTimeout(function(){ document.getElementById("body").style.opacity = "1" }, 1000);
    }
}

function sendEmail() {
    mailContent = document.getElementById("bodyMail").value;
    window.open("mailto:?to=xts.enn@gmail.com &subject=Mail%20de%20contact%20de%20Xts.en &body=" + mailContent);
}

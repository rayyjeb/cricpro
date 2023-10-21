// Players
sehwag= document.getElementById('sehwag');
sachin = document.getElementById('sachin');
gautam = document.getElementById('gautam');
virat = document.getElementById('virat');
dhoni = document.getElementById('ms');
yuvraj = document.getElementById('yuvraj');
raina = document.getElementById('raina');
singh = document.getElementById('singh');
munaf = document.getElementById('munaf');
sreesanth = document.getElementById('sreesanth');
zaheer = document.getElementById('zaheer')
raina = document.getElementById('raina')
// image selecting
virenderimage = document.getElementById('virenderimage');
sachinimage = document.getElementById('sachinimage');
gautamimage = document.getElementById('gambhirimage');
viratimage = document.getElementById('viratimage');
dhoniimage = document.getElementById('dhoniimage');
yuvrajimage = document.getElementById('yuvrajimage');
sureshimage = document.getElementById('sureshimage');
harbhajanimage = document.getElementById('harbhajanimage');
zaheerimage = document.getElementById('zaheerimage');
munafimage = document.getElementById('munafimage');
sreesanthimage = document.getElementById('sreesanthimage');
// Adding Onclick Function

function displayraina(){
    sureshimage.style.display="block";
}
function hideraina(){
    sureshimage.style.display="none";
}
raina.addEventListener('click',displayraina)
document.body.addEventListener("mousedown",hideraina)




//  Virender
 function displayimage(){
    virenderimage.style.display="block";
 }
 function hideimage(){
    virenderimage.style.display="none";
 }
sehwag.addEventListener('click',displayimage)
document.body.addEventListener("mousedown",hideimage)

// Sachin
function displaysachin() {
    sachinimage.style.display="block";
    }
function hidesachin() {
    sachinimage.style.display="none";
    }
    sachin.addEventListener('click',displaysachin)
    document.body.addEventListener("mousedown",hidesachin);
        
// Gautam
function displaygautam() {
    gautamimage.style.display="block";
    }
    function hidetext() {
        gautamimage.style.display="none";
    }
    gautam.addEventListener('click',displaygautam)
    document.body.addEventListener("mousedown",hidetext);
// Virat
    function displayvirat() {
        viratimage.style.display="block";
    }
    function hidevirat() {
        viratimage.style.display="none";
    }
    virat.addEventListener('click',displayvirat)
    document.body.addEventListener("mousedown",hidevirat);

// Dhoni
function displaydhoni(){
     dhoniimage.style.display="block";
    
}
function hidedhoni(){
    dhoniimage.style.display="none";
    }
dhoni.addEventListener('click',displaydhoni)
document.body.addEventListener("mousedown",hidedhoni);
    // Harbhajan
    function displayharbhajan(){
    harbhajanimg.style.display="block";
    }
function hideharbhajan(){
    harbhajanimg.style.display="none";
    }
    singh.addEventListener('click',displayharbhajan)
    document.body.addEventListener("mousedown",hideharbhajan);

// Yuvraj
function displayyuvraj(){
    yuvrajimage.style.display="block";
        }
    
function hideyuvraj(){
    yuvrajimage.style.display="none";
    }
    
    yuvraj.addEventListener('click',displayyuvraj)
    document.body.addEventListener("mousedown",hideyuvraj);
    console.log(yuvraj);
// ZAHEER
function displayzaheer() {
    zaheerimage.style.display = "block";
}   
function hidezaheer() {
    zaheerimage.style.display = "none";
}
    zaheer.addEventListener('click',displayzaheer)
    document.body.addEventListener("mousedown",hidezaheer);
// MUNAF
function displaymunaf(){
    munafimage.style.display="block";
    }   
function hidemunaf(){
    munafimage.style.display="none";
    }
    munaf.addEventListener('click',displaymunaf)
    document.body.addEventListener("mousedown",hidemunaf);
                    
function displaysreesanth(){
    sreesanthimg.style.display="block"
}
function hidesreesanth(){
    sreesanthimg.style.display="none"
}
sreesanth.addEventListener('click', displaysreesanth)
document.body.addEventListener("mousedown",hidesreesanth )
console.log(sreesanth);
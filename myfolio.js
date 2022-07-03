var v=window.innerWidth
function showmore() {
    showbtn = document.querySelector('.show')
    if(v<=338){
        if (showbtn.innerText == "SHOW MORE") {
            document.querySelector('.more').style.display = "block"
            showbtn.innerText = "SHOW LESS"
            document.querySelector('.s3').style.height="195rem"
        }
        else {
            document.querySelector('.s3').style.height="110rem"
            document.querySelector('.more').style.display = "none"
            showbtn.innerText = "SHOW MORE"
        }
    }
    else if(v>338){
    if (showbtn.innerText == "SHOW MORE") {
        document.querySelector('.more').style.display = "block"
        showbtn.innerText = "SHOW LESS"
        document.querySelector('.s3').style.height="230rem"
    }
    else {
        document.querySelector('.s3').style.height="135rem"
        document.querySelector('.more').style.display = "none"
        showbtn.innerText = "SHOW MORE"
    }
    }
}
window.onscroll = function () { scroll() };
function scrltop() {
    window.scrollTo(0, 0)
}
function scroll(){
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector('.taptotop').style.display = "block"
}
else {
    document.querySelector('.taptotop').style.display = "none"
}}

mybtn = document.querySelector('.mybtn')
var disp = document.querySelector('.nav').children[2]

function navbardisp() {
    if (disp.classList.contains("nav-items")) {
        disp.classList.add("list3")
        disp.classList.remove("nav-items")
        mybtn.innerText = "X"
    }
    else {
        mybtn.innerText = "+"
        disp.classList.add("nav-items")
        disp.classList.remove("list3")
    }
}

if (v < 481) {
    function scrlabt() {
        window.scrollTo(0, 650)
    }
    function scrlpdt() {
        window.scrollTo(0, 1750)
    }
    function scrlcnt() {
        window.scrollTo(0, 5100)
    }
}
else if (v > 480 && v < 1023) {
    function scrlabt() {
        window.scrollTo(0, 1050)
    }
    function scrlpdt() {
        window.scrollTo(0, 1590)
    }
    function scrlcnt() {
        window.scrollTo(0, 5000)
    }

}
else {
    function scrlabt() {
        window.scrollTo(0, 610)
    }
    function scrlpdt() {
        window.scrollTo(0, 1150)
    }
    function scrlcnt() {
        window.scrollTo(0, 6700)
    }
}
function scrlhome() {
    window.scrollTo(0,0)
}
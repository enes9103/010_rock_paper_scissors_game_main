
//Selectors
let close1 = document.querySelector(".close1");
let close2 = document.querySelector(".close2");
let close3 = document.querySelector(".close3");
let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let h3 = document.querySelector(".h3");
let gamer1score = document.querySelector(".gamer1score");
let gamer2score = document.querySelector(".gamer2score");
let gamer1choice = document.querySelector(".gamer1choice");
let gamer2choice = document.querySelector(".gamer2choice");
let againbutton = document.querySelector(".againbutton");
let win = document.querySelector(".win")
let array1 = ["Rock", "Scissors", "Paper"];
let array2 = ["Paper", "Scissors"];
let array3 = ["Rock", "Paper"];
let array4 = ["Rock", "Scissors"];
let array5 = ["Rock"];
let array6 = ["Paper"];
let array7 = ["Scissors"];

//Event Listener
    //Functions

window.addEventListener("load", access1);

function access1() {
    h1.innerHTML = array1[Math.floor(Math.random() * 3)];
    if (h1.innerHTML == "Rock") {
        h2.innerHTML = array2[Math.floor(Math.random() * 2)]
        if (h2.innerHTML == "Paper") {
            h3.innerHTML = array7[0]
        } else if (h2.innerHTML == "Scissors") {
            h3.innerHTML = array6[0]
        }
    } else if (h1.innerHTML == "Paper") {
        h2.innerHTML = array4[Math.floor(Math.random() * 2)]
        if (h2.innerHTML == "Rock") {
            h3.innerHTML == array7[0]
        } else if (h2.innerHTML == "Scissors") {
            h3.innerHTML = array5[0]
        }
    } else if (h1.innerHTML == "Scissors") {
        h2.innerHTML = array3[Math.floor(Math.random() * 2)]
        if (h2.innerHTML == "Rock") {
            h3.innerHTML = array6[0]
        } else if (h2.innerHTML == "Paper") {
            h3.innerHTML = array5[0]
        }
    }

}

close1.addEventListener("click", open1);

function open1() {
    if (close2.style.visibility == "hidden" && close3.style.visibility == "hidden") {
        close1.style.visibility = "visible"
    } else {
        close1.style.visibility = "hidden"
    }

    if (close1.style.visibility == "hidden") {

        if (close2.style.visibility == "hidden" || close3.style.visibility == "hidden") {
            gamer2choice.innerHTML = h1.innerHTML
        } else {
            gamer1choice.innerHTML = h1.innerHTML
        }

        if (gamer1choice.innerHTML == "Rock" && gamer2choice.innerHTML == "Paper") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        } else if (gamer1choice.innerHTML == "Rock" && gamer2choice.innerHTML == "Scissors") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Paper" && gamer2choice.innerHTML == "Scissors") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        } else if (gamer1choice.innerHTML == "Paper" && gamer2choice.innerHTML == "Rock") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Scissors" && gamer2choice.innerHTML == "Paper") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Scissors" && gamer2choice.innerHTML == "Rock") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        }
    }
}

close2.addEventListener("click", open2);

function open2() {
    if (close1.style.visibility == "hidden" && close3.style.visibility == "hidden") {
        close2.style.visibility = "visible"
    } else {
        close2.style.visibility = "hidden"
    }

    if (close2.style.visibility == "hidden") {

        if (close1.style.visibility == "hidden" || close3.style.visibility == "hidden") {
            gamer2choice.innerHTML = h2.innerHTML
        } else {
            gamer1choice.innerHTML = h2.innerHTML
        }

        if (gamer1choice.innerHTML == "Rock" && gamer2choice.innerHTML == "Paper") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        } else if (gamer1choice.innerHTML == "Rock" && gamer2choice.innerHTML == "Scissors") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Paper" && gamer2choice.innerHTML == "Scissors") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        } else if (gamer1choice.innerHTML == "Paper" && gamer2choice.innerHTML == "Rock") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Scissors" && gamer2choice.innerHTML == "Paper") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Scissors" && gamer2choice.innerHTML == "Rock") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        }

    }
}

close3.addEventListener("click", open3)

function open3() {
    if (close1.style.visibility == "hidden" && close2.style.visibility == "hidden") {
        close3.style.visibility = "visible"
    } else {
        close3.style.visibility = "hidden"
    }

    if (close3.style.visibility == "hidden") {

        if (close1.style.visibility == "hidden" || close2.style.visibility == "hidden") {
            gamer2choice.innerHTML = h3.innerHTML
        } else {
            gamer1choice.innerHTML = h3.innerHTML
        }

        if (gamer1choice.innerHTML == "Rock" && gamer2choice.innerHTML == "Paper") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        } else if (gamer1choice.innerHTML == "Rock" && gamer2choice.innerHTML == "Scissors") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Paper" && gamer2choice.innerHTML == "Scissors") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        } else if (gamer1choice.innerHTML == "Paper" && gamer2choice.innerHTML == "Rock") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Scissors" && gamer2choice.innerHTML == "Paper") {
            win.innerHTML = "Gamer 1 WİNS!"
            gamer1score.innerHTML++
        } else if (gamer1choice.innerHTML == "Scissors" && gamer2choice.innerHTML == "Rock") {
            win.innerHTML = "Gamer 2 WİNS!"
            gamer2score.innerHTML++
        }

    }
}

againbutton.addEventListener("click", again1)

function again1() {
    h1.innerHTML = array1[Math.floor(Math.random() * 3)];
    if (h1.innerHTML == "Rock") {
        h2.innerHTML = array2[Math.floor(Math.random() * 2)]
        if (h2.innerHTML == "Paper") {
            h3.innerHTML = array7[0]
        } else if (h2.innerHTML == "Scissors") {
            h3.innerHTML = array6[0]
        }
    } else if (h1.innerHTML == "Paper") {
        h2.innerHTML = array4[Math.floor(Math.random() * 2)]
        if (h2.innerHTML == "Rock") {
            h3.innerHTML == "Scissors"
        } else if (h2.innerHTML == "Scissors") {
            h3.innerHTML = array5[0]
        }
    } else if (h1.innerHTML == "Scissors") {
        h2.innerHTML = array3[Math.floor(Math.random() * 2)]
        if (h2.innerHTML == "Rock") {
            h3.innerHTML = array6[0]
        } else if (h2.innerHTML == "Paper") {
            h3.innerHTML = array5[0]
        }
    }

    close1.style.visibility = "visible";
    close2.style.visibility = "visible";
    close3.style.visibility = "visible";

    gamer1choice.innerHTML = "";
    gamer2choice.innerHTML = "";
    win.innerHTML = "";
}

// window.addEventListener("load", gameCover){
    
// }
//Global Code
var allow = false;
var did_u_score = true;
//Arrow key space Code

let target = document.querySelector(".droptarget");
let moveby = 10;

window.addEventListener("load", () => {
    console.log("ami"); //This is also print 2 times
    target.style.position = "absolute";
    target.style.left = "35px";
    target.style.top = "523px";
});

window.addEventListener("keyup", () => {
    console.log("key_up");
    switch (event.key) {
        case "ArrowLeft":
            target.style.left = parseInt(target.style.left) - moveby + "px";
            break;
        case "ArrowRight":
            target.style.left = parseInt(target.style.left) + moveby + "px";
            break;
        case "ArrowUp":
            target.style.top = parseInt(target.style.top) - moveby + "px";
            break;
        case "ArrowDown":
            target.style.top = parseInt(target.style.top) + moveby + "px";
            break;
    }
});

//Timer Related Code
var timeLeft = 2;
var elem = document.getElementById("demo");
var head1 = document.getElementById("header1");
var head2 = document.getElementById("play");
console.log("Printiing head2", head2);
var timerId;
head2.addEventListener("click", function () {
    console.log("Btton Clck");
    timeLeft = 31;
    timerId = setInterval(timer1, 1000);
});

function timer1() {
    if (timeLeft == -1) {
        clearInterval(timerId);
        allow = false;
        head1.innerHTML = "Time Over";
        console.log("calling check pass");
        checkPass();
    } else {
        allow = true;
        elem.innerHTML = timeLeft + "Seconds Left";
        timeLeft--;
    }
}
//Drag and Drop Related Code
function dragging(event) {
    //   console.log("Hellop");
    document.getElementById("foottag").innerHTML = "People are being Dragged";
}

function dragstart1(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragover(event) {
    //   console.log("Jai Mata Di");
    event.preventDefault();
}

function drop(event) {
    //   console.log("Jai Bhole Naath");
    event.preventDefault();
    if (allow == true) {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("foottag").innerHTML = "People Safe Now";
        scoreEvent();
    }
}

//river obstruction code

function dragoverriver(event) {
    console.log("River Drop innitiated");
    event.preventDefault();
}

function dropriver(event) {
    console.log("River dropped");
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("foottag").innerHTML = "People have Drowned";
    fail();
}



//Scoring Code
var score = 0;

function scoreEvent() {
    score += 50;
    document.getElementById("main").innerHTML = "Score" + " : " + score;
}

//checkPass code
function checkPass() {
    console.log(typeof score + "  " + score);
    if (score >= 150) {
        console.log("if scoe : ", score);
        pass();
    } else {
        console.log("else scoe : ", score);
        fail();
    }
}
//pass Code
function pass() {
    let a = new Audio("./audio/Special Forces URI.mp3");
    a.play();
    console.log("1st");
    document.getElementById("boss").style.visibility = "hidden";
    document.getElementById("restart").innerHTML = "Level 1";
    var level2 = document.createElement("button");
    var level3 = document.createElement("button");
    level2.style.padding = "15px";
    level2.style.color = "red";
    level2.style.backgroundColor = "yellow";
    level2.style.fontSize = "xx-large";
    level2.style.fontWeight = "900";
    level2.id = "level2";
    level3.style.padding = "15px";
    level3.style.color = "red";
    level3.style.backgroundColor = "yellow";
    level3.style.fontSize = "xx-large";
    level3.style.fontWeight = "900";
    level3.id = "level3";
    level2.innerHTML = "Level 2";
    level3.innerHTML = "Level 3";
    document.getElementById("lowerButtons").appendChild(level2);
    document.getElementById("lowerButtons").appendChild(level3);
    document.getElementById("lowerButtons").style.visibility = "visible";
    document.body.style.backgroundImage = "url(./images/pass.jpg)";
    // document.body.style.backgroundSize = "%";
    document.getElementById("restart").addEventListener("click", () => {
        window.location.replace("Level1.html");
    });
    document.getElementById("level2").addEventListener("click", () => {
        window.location.replace("Level2.html");
    });
    document.getElementById("level3").addEventListener("click", () => {
        window.location.replace("Level3.html");
    });
    console.log("pass" + score);
}

//fail code
function fail() {
    console.log("2nd");
    document.getElementById("boss").style.visibility = "hidden";
    document.getElementById("lowerButtons").style.visibility = "visible";
    document.body.style.backgroundImage = "url(./images/miss.png)";
    document.body.style.backgroundSize = "80% 55%";
    document.body.style.backgroundPosition = "center top";
    document.getElementById("restart").addEventListener("click", () => {
        window.location.reload();
    });
    console.log("Fail" + score);
}
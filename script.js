const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const message = document.getElementById("message");
const celebration = document.getElementById("celebration");
const mainImage = document.getElementById("mainImage");
const container = document.querySelector(".container");


// ==========================
// BACKGROUND MUSIC
// ==========================

const bgMusic = new Audio(
"music/bgmusic.mp3"
);

bgMusic.loop = true;

bgMusic.volume = 0.4;


// ==========================
// HAPPY MUSIC
// ==========================

const happyMusic = new Audio(
"music/happy.mp3"
);

happyMusic.volume = 1;


// START MUSIC AFTER FIRST CLICK
document.addEventListener(
"click",
()=>{

    bgMusic.play();

},
{ once:true }
);


// ==========================
// ALL EMOTIONAL STAGES
// ==========================

const situations = [

{
    text: "Will You Be My Valentine? 💖",
    msg: "This heart is for you ❤️",
    image: "images/1_giving_heart.png",
    noText: "NO 😭"
},

{
    text: "Please Will You Be My Valentine? 🥺",
    msg: "Please say YES... 💕",
    image: "images/2_requesting.png",
    noText: "Really NO?"
},

{
    text: "Think Again 😭",
    msg: "My little heart is getting sad 💔",
    image: "images/6_please_yes.png",
    noText: "Not Interested 🙄"
},

{
    text: "Are You Sure? 😢",
    msg: "You said NO... 💔",
    image: "images/oh_my_god.png",
    noText: "Still NO?"
},

{
    text: "Please Don't Leave Me 😭",
    msg: "I already imagined our future 💀",
    image: "images/sad_cat.png",
    noText:"Think Again"
},

{
    text: "My Heart Is Breaking 💔",
    msg: "Please say YES 🥺",
    image: "images/8_heart_broken.png",
    noText: "Last Chance"
},

{
    text: "You Can't Escape Destiny 😈",
    msg: "Love always wins 💘",
    image: "images/7_you_said_no.png",
    noText:  "Impossible NO"
},

{
    text: "FINAL WARNING 😭",
    msg: "I'm crying now 😭",
    image: "images/cry_cat.jpeg",
    noText: "No Chance 💀"
}

];


// ==========================
// STARTING INDEX
// ==========================

let count = 0;


// ==========================
// SHOW STAGE FUNCTION
// ==========================

function showStage(index){

    container.style.opacity = "0";

    container.style.transform =
    "scale(0.7) translateY(100px)";



    setTimeout(()=>{

        question.innerHTML =
        situations[index].text;

        message.innerHTML =
        situations[index].msg;

        noBtn.innerHTML =
        situations[index].noText;

        mainImage.src =
        situations[index].image;



        // IMAGE EFFECT
        mainImage.classList.add(
        "imageAnimate"
        );



        setTimeout(()=>{

            mainImage.classList.remove(
            "imageAnimate"
            );

        },700);



        // TYPING EFFECT
        message.style.animation =
        "none";

        void message.offsetWidth;

        message.style.animation =
        `
        typing 2s steps(40,end) forwards,
        blink 0.8s infinite
        `;



        // SHOW AGAIN
        container.style.opacity = "1";

        container.style.transform =
        "scale(1) translateY(0px)";



        // SHAKE
        container.classList.add(
        "shake"
        );



        setTimeout(()=>{

            container.classList.remove(
            "shake"
            );

        },500);

    },400);

}


// ==========================
// NO BUTTON CLICK
// ==========================

noBtn.addEventListener("click",()=>{

    // NORMAL STAGES
    if(count < situations.length - 1){

        count++;

        showStage(count);



        // YES BUTTON BIGGER
        let yesSize =
        1 + (count * 0.25);

        yesBtn.style.transform =
        `scale(${yesSize})`;



        // MOVE BUTTON
        if(count >= 4){

            moveButton();

        }

    }

    // FINAL STAGE
    else{

        // HUGE YES BUTTON
        yesBtn.style.width = "100%";

        yesBtn.style.height = "90px";

        yesBtn.style.fontSize = "30px";

        yesBtn.style.marginTop = "30px";



        yesBtn.innerHTML =
        "OKAYYY YES 💖";



        message.innerHTML =
        "You Can Never Say NO 😈❤️";



        // KEEP NO BUTTON
        noBtn.style.display =
        "block";



        noBtn.innerHTML =
        "100% NOOOO😭";



        // ESCAPE BUTTON
        noBtn.addEventListener(
        "mouseover",
        escapeButton
        );

    }

});


// ==========================
// ESCAPE BUTTON
// ==========================

function escapeButton(){

    const btnWidth =
    noBtn.offsetWidth;

    const btnHeight =
    noBtn.offsetHeight;



    const padding = 20;



    const maxX =
    window.innerWidth -
    btnWidth -
    padding;



    const maxY =
    window.innerHeight -
    btnHeight -
    padding;



    const randomX =
    Math.random() * maxX;



    const randomY =
    Math.random() * maxY;



    noBtn.style.position =
    "fixed";



    noBtn.style.left =
    `${randomX}px`;



    noBtn.style.top =
    `${randomY}px`;



    noBtn.style.transition =
    "0.12s linear";



    noBtn.style.transform =
    `
    rotate(
    ${Math.random()*30-15}deg
    )
    `;



    // BUTTON POP EFFECT
    noBtn.animate([

        {
            transform:"scale(1)"
        },

        {
            transform:"scale(1.15)"
        },

        {
            transform:"scale(1)"
        }

    ],{

        duration:120

    });

}


// ==========================
// MOVING NO BUTTON
// ==========================

function moveButton(){

    const containerRect =
    container.getBoundingClientRect();



    // WITHIN 300PX OF CONTAINER
    const range = 300;



    let x =
    containerRect.left +
    (Math.random() * range * 2 - range);



    let y =
    containerRect.top +
    (Math.random() * range * 2 - range);



    // KEEP INSIDE SCREEN
    x = Math.max(
    20,
    Math.min(
    window.innerWidth - 150,
    x
    )
    );



    y = Math.max(
    20,
    Math.min(
    window.innerHeight - 80,
    y
    )
    );



    noBtn.style.position =
    "fixed";



    noBtn.style.left =
    `${x}px`;



    noBtn.style.top =
    `${y}px`;



    noBtn.style.transition =
    "0.15s linear";



    noBtn.animate([

        {
            transform:"translateX(-5px)"
        },

        {
            transform:"translateX(5px)"
        },

        {
            transform:"translateX(-5px)"
        },

        {
            transform:"translateX(0px)"
        }

    ],{

        duration:180

    });

}


// ==========================
// YES BUTTON CLICK
// ==========================

yesBtn.addEventListener("click",()=>{

    // STOP BACKGROUND MUSIC
    bgMusic.pause();

    bgMusic.currentTime = 0;



    // PLAY HAPPY MUSIC
    happyMusic.play();



    // SHOW CELEBRATION
    celebration.style.display =
    "flex";



    // CLEAR OLD CONTENT
    celebration.innerHTML = "";



    // FINAL CARD
    let finalCard =
    document.createElement("div");



    finalCard.classList.add(
    "finalCard"
    );



    finalCard.innerHTML = `

        <img
        src="images/5_for_you.png"
        class="finalImage">

        <h1 class="finalTitle">
        I LOVE YOU 💖
        </h1>

        <p class="finalText">
        You are officially my Valentine 😭❤️
        <br>
        Best day ever 💘
        </p>

        <div class="loveMessage">
        Forever Starts Today ✨
        </div>

    `;



    celebration.appendChild(
    finalCard
    );



    // ==========================
    // CONFETTI
    // ==========================

    let confettiInterval =
    setInterval(()=>{

        for(let i=0;i<18;i++){

            let confetti =
            document.createElement(
            "div"
            );



            confetti.classList.add(
            "confetti"
            );



            confetti.style.left =
            Math.random()*100 + "vw";



            confetti.style.top =
            "-20px";



            confetti.style.background =
            `hsl(
            ${Math.random()*360},
            100%,
            50%
            )`;



            confetti.style.width =
            Math.random()*12 + 8 + "px";



            confetti.style.height =
            Math.random()*25 + 10 + "px";



            confetti.style.borderRadius =
            Math.random() > 0.5
            ? "50%"
            : "0px";



            confetti.style.animationDuration =
            (Math.random()*3 + 3) + "s";



            celebration.appendChild(
            confetti
            );



            setTimeout(()=>{

                confetti.remove();

            },7000);

        }

    },250);




    setTimeout(()=>{

        clearInterval(
        confettiInterval
        );

    },60000);




    // ==========================
    // HEARTS
    // ==========================

    let heartInterval =
    setInterval(()=>{

        for(let i=0;i<12;i++){

            let heart =
            document.createElement(
            "div"
            );



            heart.innerHTML =
            "💖";



            heart.style.position =
            "absolute";



            heart.style.left =
            Math.random()*100 + "vw";



            heart.style.top =
            "-20px";



            heart.style.fontSize =
            Math.random()*15 + 10 + "px";



            heart.style.pointerEvents =
            "none";



            heart.style.animation =
            `
            confettiFall
            ${Math.random()*4+3}s
            linear forwards
            `;



            celebration.appendChild(
            heart
            );



            setTimeout(()=>{

                heart.remove();

            },7000);

        }

    },300);




    setTimeout(()=>{

        clearInterval(
        heartInterval
        );

    },60000);

});


// ==========================
// INITIAL LOAD ANIMATION
// ==========================

window.addEventListener("load",()=>{

    container.style.opacity =
    "0";



    container.style.transform =
    "scale(0.5) translateY(120px)";



    setTimeout(()=>{

        container.style.transition =
        "1s ease";



        container.style.opacity =
        "1";



        container.style.transform =
        "scale(1) translateY(0px)";

    },300);

});
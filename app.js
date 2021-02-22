let gamePlaying;
const player1 = document.querySelector('#player1Card');
const player2 = document.querySelector('#player2Card');
let player1Score = 0;
let player2Score = 0;
let scores = [player1Score, player2Score];
let activePlayer = document.querySelector('.active');
let previousCard;

const play = document.querySelector('.play');
play.addEventListener('click', init);

const images = [{
        name: "gruffalo",
        img: 'images/card-1.png',
        id: 1
    },
    {
        name: "owl",
        img: 'images/card-2.png',
        id: 2
    },
    {
        name: "rat",
        img: 'images/card-3.png',
        id: 3
    },
    {
        name: "stickman",
        img: 'images/card-4.png',
        id: 4
    },
    {
        name: "witch",
        img: 'images/card-5.png',
        id: 5
    },
    {
        name: "worm",
        img: 'images/card-6.png',
        id: 6
    },
    {
        name: "zog",
        img: 'images/card-7.png',
        id: 7
    }

];


function init() {
    scores = [0, 0];
    activePlayer = player1;
    gamePlaying = true;
    document.querySelectorAll('[class*=card]')
        .forEach(x => x.setAttribute("style", "opacity: 1.0"));
    document.querySelectorAll('[class*=win]')
        .forEach(x => x.setAttribute("style", "opacity: 1.0"));
    player1.classList.remove('winner');
    player2.classList.remove('winner');
    player1.classList.remove('active');
    player2.classList.remove('active');
    player1.classList.add('active');
    document.querySelector('.play1').style.display = 'none';
    document.querySelector('.play2').style.display = 'none';
    document.querySelector('.win').classList.remove;
    play.removeEventListener('click', init);
    play.textContent = "SELECT CARD";
    play.addEventListener('click', changeCard);

}



function changeCard() {
    let card = Math.floor(Math.random() * images.length);
    activePlayer.src = images[card].img;
    if (card === previousCard) {
        return card;
    }
    match();
    setTimeout(() => {
        nextPlayer()
    }, 500);
}



function nextPlayer() {
    activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;
    player1.classList.toggle('active');
    player2.classList.toggle('active');

}


function match() {
    let imageActive = document.querySelector('.active').src;
    let imageInactive = document.querySelector('img:not(.active)').src

    if (imageActive === imageInactive) {
        console.log(`You win!`);
        gamePlaying = false;
        document.querySelector('.active').classList.add('winner');
        document.querySelector('.active').classList.remove;
        let winner = document.querySelector('.winner');
        play.style.cssText = 'opacity:0%; disabled:true';

        if (player1 === winner) {
            player1Score++;
            document.querySelector('.player1Score').textContent = player1Score;
            document.querySelector('.win').classList.add;
            setTimeout(() => {
                document.querySelector('.play1').style.display = "block";
            }, 1000);

        } else {
            player2Score++;
            document.querySelector('.player2Score').textContent = player2Score;
            document.querySelector('.win').classList.add;
            setTimeout(() => {
                document.querySelector('.play2').style.display = "block";
            }, 1000);
        }
        gameOver();

    } else {
        console.log("no match");

    }
    return false;
}

function gameOver() {
    play.removeEventListener('click', changeCard);
    play.removeEventListener('click', init);

    setTimeout(() => {

        document.querySelectorAll('[class*=card]')
            .forEach(x => x.setAttribute("style", "opacity: 0.5"));
        document.querySelectorAll('[class*=win]')
            .forEach(x => x.setAttribute("style", "opacity: 0.5"));

        play.style.cssText = 'opacity:100%; disabled:false';
        play.textContent = "PLAY AGAIN";
        play.addEventListener('click', init);

    }, 6000);

}
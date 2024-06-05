function playNow() {
    const homeSection = document.getElementById('homeSection');
    homeSection.classList.add('hidden')

    const playSection = document.getElementById('playSection');
    playSection.classList.remove('hidden');

    // get random alphabet function
    const getAlphabet = getRandomAlphabet();
    
    // show alphabet in screen
    const playScreen = document.getElementById('playScreen');
    playScreen.innerText = getAlphabet.toUpperCase();

    // set key board press back ground color
    setKbdBgColor(getAlphabet)
};

// get random alphabet function
function getRandomAlphabet() {

    //making the alphabet
    const alphabet = 'abcdefghijklmonpqrstuvwxyz';
    const arrayOfAlphabet = alphabet.split('');
    
    //getting it randomly
    const index = Math.round(Math.random() * 25);
    const randomAlphabet = arrayOfAlphabet[index];
    
    return randomAlphabet

};

//set key background color

function setKbdBgColor(alphabetId) {
    const keyWord = document.getElementById(alphabetId);
    keyWord.classList.add('bg-orange-400');
}

// kbd pressing function
document.addEventListener('keyup', function kbdBtnPress(event) {
    const playerPressed = event.key;
    const getGameWord = document.getElementById('playScreen').innerText.toLowerCase();

    if (playerPressed === getGameWord) {
        //game score set
        const getCurrentScoreTag = document.getElementById('scorePoint');
        const getCurrentScore = getCurrentScoreTag.innerText;
        const currentScore = parseInt(getCurrentScore);

        const newScore = currentScore + 1;

        getCurrentScoreTag.innerText = newScore;

        //change the keyword bg color
        const rightWord = document.getElementById(playerPressed);
        rightWord.classList.remove('bg-orange-400');

        // reload the page to continue the game
        playNow();
    }
    else { 
        //get current life span
        const getLifeSpanTag = document.getElementById('lifePoint');
        const currentLifeSpan = getLifeSpanTag.innerText;
        const currentLife = parseInt(currentLifeSpan);

        const newLife = currentLife - 1;

        getLifeSpanTag.innerText = newLife;

    }

})
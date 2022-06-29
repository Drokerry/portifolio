"use strict";
const opcao = document.getElementsByClassName("opcao");
const buttonRestart = document.getElementById("btnRestart");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const opcaoO = `<svg xmlns="http://www.w3.org/2000/svg" class="h-18 w-18 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;
const opcaoX = `<svg xmlns="http://www.w3.org/2000/svg" class="h-18 w-18 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="m21.18588,12a9,9 0 1 1 -18,0a9,9 0 0 1 18,0z" />
</svg>`;
const bCheckbox = document.getElementById("bCheckbox");
const buttonResetPontuacao = document.getElementById("btnResetPontuacao");
const elModo = document.getElementById("modo");
let nPlayer = 0; //0 = opcao-O || 1 = opcao-X
let aBox = [];
let cPlayerA = "Player 1"; // prompt('Qual nome do jogador A?');
let cPlayerB = "Player 2"; //prompt('Qual nome do jogador B?');
let elScoreP1 = document.getElementById("nScoreP1");
let elScoreP2 = document.getElementById("nScoreP2");
let elScoreP3 = document.getElementById("nScoreP3");
let cScoreP1 = document.getElementById("cScoreP1");
let cScoreP2 = document.getElementById("cScoreP2");
let nScoreP1 = 0;
let nScoreP2 = 0;
let nScoreP3 = 0;
let lBot = false;
let nModo = 1;
function onClick() {
    let el = this;
    let lWin = false;
    let index = el.dataset.id;
    console.log(el);
    if (bCheckbox.checked === true && nPlayer === 1 && lBot === false) {
        return alert("É a vez do bot!");
    }
    if (el.classList.contains("opcao-o") || el.classList.contains("opcao-x")) {
        alert("Campo já preenchido! Escolha outro.");
    }
    else {
        aBox[index] = nPlayer;
        if (nPlayer === 0) {
            el.classList.add("opcao-o");
            el.innerHTML = opcaoO;
            lWin = verificaGanhador();
            nPlayer = 1;
            if (lWin === false) {
                if (bCheckbox.checked === true) {
                    setTimeout(() => {
                        runBot();
                    }, 500);
                }
            }
        }
        else {
            el.classList.add("opcao-x");
            el.innerHTML = opcaoX;
            verificaGanhador();
            nPlayer = 0;
        }
        lBot = false;
    }
}
function runBot() {
    let aLivre = [];
    for (let i = 0; i < aBox.length; i++) {
        if (aBox[i] === -1) {
            aLivre.push(i);
        }
    }
    if (aLivre.length > 0) {
        if (nModo === 1) {
            const rndInt = randomIntFromInterval(1, aLivre.length) - 1;
            lBot = true;
            opcao[aLivre[rndInt]].click();
        }
        else {
            modoDificil(aLivre);
        }
        beep();
    }
}
function box2(aData, nP) {
    let nCode = -1;
    if (aData[0] === -1 && aData[1] === nP && aData[2] === nP) {
        nCode = 0;
    }
    else if (aData[0] === nP && aData[1] === -1 && aData[2] === nP) {
        nCode = 1;
    }
    else if (aData[0] === nP && aData[1] === nP && aData[2] === -1) {
        nCode = 2;
    }
    else if (aData[3] === -1 && aData[4] === nP && aData[5] === nP) {
        nCode = 3;
    }
    else if (aData[3] === nP && aData[4] === -1 && aData[5] === nP) {
        nCode = 4;
    }
    else if (aData[3] === nP && aData[4] === nP && aData[5] === -1) {
        nCode = 5;
    }
    else if (aData[6] === -1 && aData[7] === nP && aData[8] === nP) {
        nCode = 6;
    }
    else if (aData[6] === nP && aData[7] === -1 && aData[8] === nP) {
        nCode = 7;
    }
    else if (aData[6] === nP && aData[7] === nP && aData[8] === -1) {
        nCode = 8;
    }
    /*COLUNA VERTICAL 1*/
    else if (aData[0] === nP && aData[3] === nP && aData[6] === -1) {
        nCode = 6;
    }
    else if (aData[0] === nP && aData[3] === -1 && aData[6] === nP) {
        nCode = 3;
    }
    else if (aData[0] === -1 && aData[3] === nP && aData[6] === nP) {
        nCode = 0;
    }
    /*COLUNA VERTICAL 2*/
    else if (aData[1] === nP && aData[4] === nP && aData[7] === -1) {
        nCode = 7;
    }
    else if (aData[1] === nP && aData[4] === -1 && aData[7] === nP) {
        nCode = 4;
    }
    else if (aData[1] === -1 && aData[4] === nP && aData[7] === nP) {
        nCode = 1;
    }
    /*COLUNA VERTICAL 3*/
    else if (aData[2] === nP && aData[5] === nP && aData[8] === -1) {
        nCode = 8;
    }
    else if (aData[2] === nP && aData[5] === -1 && aData[8] === nP) {
        nCode = 5;
    }
    else if (aData[2] === -1 && aData[5] === nP && aData[8] === nP) {
        nCode = 2;
    }
    /*COLUNA DEITADA 1 >>>>>> \ <<<<<< */
    else if (aData[0] === nP && aData[4] === nP && aData[8] === -1) {
        nCode = 8;
    }
    else if (aData[0] === nP && aData[4] === -1 && aData[8] === nP) {
        nCode = 4;
    }
    else if (aData[0] === -1 && aData[4] === nP && aData[8] === nP) {
        nCode = 0;
    }
    /*COLUNA DEITADA 2 >>>>> / <<<<< */
    else if (aData[2] === nP && aData[4] === nP && aData[6] === -1) {
        nCode = 6;
    }
    else if (aData[2] === nP && aData[4] === -1 && aData[6] === nP) {
        nCode = 4;
    }
    else if (aData[2] === -1 && aData[4] === nP && aData[6] === nP) {
        nCode = 2;
    }
    return nCode;
}
function box3(aData, nP, nPadrao) {
    let nCode = nPadrao;
    if (aData[0] === -1 && aData[1] === nP && aData[2] === nP) {
        nCode = 0;
    }
    else if (aData[0] === nP && aData[1] === -1 && aData[2] === nP) {
        nCode = 1;
    }
    else if (aData[0] === nP && aData[1] === nP && aData[2] === -1) {
        nCode = 2;
    }
    else if (aData[3] === -1 && aData[4] === nP && aData[5] === nP) {
        nCode = 3;
    }
    else if (aData[3] === nP && aData[4] === -1 && aData[5] === nP) {
        nCode = 4;
    }
    else if (aData[3] === nP && aData[4] === nP && aData[5] === -1) {
        nCode = 5;
    }
    else if (aData[6] === -1 && aData[7] === nP && aData[8] === nP) {
        nCode = 6;
    }
    else if (aData[6] === nP && aData[7] === -1 && aData[8] === nP) {
        nCode = 7;
    }
    else if (aData[6] === nP && aData[7] === nP && aData[8] === -1) {
        nCode = 8;
    }
    /*COLUNA VERTICAL 1*/
    else if (aData[0] === nP && aData[3] === nP && aData[6] === -1) {
        nCode = 6;
    }
    else if (aData[0] === nP && aData[3] === -1 && aData[6] === nP) {
        nCode = 3;
    }
    else if (aData[0] === -1 && aData[3] === nP && aData[6] === nP) {
        nCode = 0;
    }
    /*COLUNA VERTICAL 2*/
    else if (aData[1] === nP && aData[4] === nP && aData[7] === -1) {
        nCode = 7;
    }
    else if (aData[1] === nP && aData[4] === -1 && aData[7] === nP) {
        nCode = 4;
    }
    else if (aData[1] === -1 && aData[4] === nP && aData[7] === nP) {
        nCode = 1;
    }
    /*COLUNA VERTICAL 3*/
    else if (aData[2] === nP && aData[5] === nP && aData[8] === -1) {
        nCode = 8;
    }
    else if (aData[2] === nP && aData[5] === -1 && aData[8] === nP) {
        nCode = 5;
    }
    else if (aData[2] === -1 && aData[5] === nP && aData[8] === nP) {
        nCode = 2;
    }
    /*COLUNA DEITADA 1 >>>>>> \ <<<<<< */
    else if (aData[0] === nP && aData[4] === nP && aData[8] === -1) {
        nCode = 8;
    }
    else if (aData[0] === nP && aData[4] === -1 && aData[8] === nP) {
        nCode = 4;
    }
    else if (aData[0] === -1 && aData[4] === nP && aData[8] === nP) {
        nCode = 0;
    }
    /*COLUNA DEITADA 2 >>>>> / <<<<< */
    else if (aData[2] === nP && aData[4] === nP && aData[6] === -1) {
        nCode = 6;
    }
    else if (aData[2] === nP && aData[4] === -1 && aData[6] === nP) {
        nCode = 4;
    }
    else if (aData[2] === -1 && aData[4] === nP && aData[6] === nP) {
        nCode = 2;
    }
    return nCode;
}
function modoDificil(aLivre) {
    let nCode = -1;
    console.log('modoDificil');
    //const rndInt = randomIntFromInterval(1, aLivre.length) - 1;
    //lBot = true;
    //opcao[aLivre[rndInt]].click();
    /*
    if(aBox[0] === 1 &&  aBox[1] === -1 && aBox[3] === -1){
        
       const aRnd:number[] = [1, 3];
        nCode = randomIntFromInterval(1, aRnd.length)-1;
        nCode = aRnd[nCode]
    }
    */
    /*
    else if(aBox[4] === 0 && aBox[5] === 0 && aBox[3] === -1){
        nCode = 3;
    }
    */
    // LAILTON
    nCode = box2(aBox, 1);
    // LAILTON
    //if (nCode === -1){
    //BOX 2
    nCode = box2(aBox, 0);
    if (nCode === -1) {
        //LUCAS
        if (aBox[0] === 0 && aBox[4] === -1) {
            nCode = 4;
        }
        else if (aBox[1] === 0 && aBox[0] === -1) {
            nCode = 0;
        }
        else if (aBox[2] === 0 && aBox[4] === -1) {
            nCode = 4;
        }
        else if (aBox[3] === 0 && aBox[0] === -1) {
            nCode = 0;
        }
        else if (aBox[4] === 0 && aBox[6] === -1) {
            nCode = 6;
        }
        else if (aBox[5] === 0 && aBox[2] === -1) {
            nCode = 2;
        }
        else if (aBox[6] === 0 && aBox[4] === -1) {
            nCode = 4;
        }
        else if (aBox[7] === 0 && aBox[6] === -1) {
            nCode = 6;
        }
        else if (aBox[8] === 0 && aBox[4] === -1) {
            nCode = 4;
        }
        if (aBox[3] === 0 && aBox[4] === -1) {
            nCode = 4;
        }
        else if (aBox[4] === -1 && aBox[5] === 0) {
            nCode = 4;
        }
    }
    //}
    //JOGADA BOT
    //LAILTON
    nCode = box3(aBox, 1, nCode);
    if (nCode === -1) {
        nCode = randomIntFromInterval(1, aLivre.length) - 1;
        nCode = aLivre[nCode];
    }
    lBot = true;
    opcao[nCode].click();
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function gameRestart() {
    for (let i = 0; i < opcao.length; i++) {
        aBox[i] = -1;
        opcao[i].classList.remove("opcao-o", "opcao-x");
        opcao[i].innerHTML = "";
    }
    nPlayer = 0;
}
function resetarPontuacao() {
    nScoreP1 = 0;
    nScoreP2 = 0;
    nScoreP3 = 0;
    atualizaScore();
}
function mudouModo() {
    nModo = parseInt(this.value);
    gameRestart();
    resetarPontuacao();
}
elModo.addEventListener("change", mudouModo);
nModo = parseInt(elModo.value);
buttonResetPontuacao.addEventListener("click", resetarPontuacao);
buttonRestart.addEventListener("click", gameRestart);
player1.value = cPlayerA;
player2.value = cPlayerB;
player1.addEventListener("blur", function () {
    cPlayerA = this.value;
    atualizaScore();
});
player2.addEventListener("blur", function () {
    cPlayerB = this.value;
    atualizaScore();
});
function atualizaScore() {
    elScoreP1.innerHTML = nScoreP1.toString();
    elScoreP2.innerHTML = nScoreP2.toString();
    elScoreP3.innerHTML = nScoreP3.toString();
    cScoreP1.innerHTML = cPlayerA.toString();
    cScoreP2.innerHTML = cPlayerB.toString();
}
function playerWin() {
    if (nPlayer === 0) {
        nScoreP1++;
    }
    else if (nPlayer === 1) {
        nScoreP2++;
    }
    atualizaScore();
    setTimeout(function () {
        alert(`${nPlayer ? cPlayerA : cPlayerB} venceu a rodada!`);
        gameRestart();
    }, 50);
}
function empate() {
    nScoreP3++;
    atualizaScore();
    setTimeout(function () {
        alert(`Houve um empate dos jogadores ${cPlayerA} e ${cPlayerB}`);
        gameRestart();
    }, 50);
}
function verificaGanhador() {
    let lWin = false;
    if (aBox[0] === nPlayer && aBox[1] === nPlayer && aBox[2] === nPlayer) {
        lWin = true;
        playerWin();
    }
    else if (aBox[3] === nPlayer &&
        aBox[4] === nPlayer &&
        aBox[5] === nPlayer) {
        lWin = true;
        playerWin();
    }
    else if (aBox[6] === nPlayer &&
        aBox[7] === nPlayer &&
        aBox[8] === nPlayer) {
        lWin = true;
        playerWin();
    }
    else if (aBox[0] === nPlayer &&
        aBox[3] === nPlayer &&
        aBox[6] === nPlayer) {
        lWin = true;
        playerWin();
    }
    else if (aBox[1] === nPlayer &&
        aBox[4] === nPlayer &&
        aBox[7] === nPlayer) {
        lWin = true;
        playerWin();
    }
    else if (aBox[2] === nPlayer &&
        aBox[5] === nPlayer &&
        aBox[8] === nPlayer) {
        lWin = true;
        playerWin();
    }
    else if (aBox[0] === nPlayer &&
        aBox[4] === nPlayer &&
        aBox[8] === nPlayer) {
        lWin = true;
        playerWin();
    }
    else if (aBox[2] === nPlayer &&
        aBox[4] === nPlayer &&
        aBox[6] === nPlayer) {
        lWin = true;
        playerWin();
    }
    else if (aBox[0] !== -1 &&
        aBox[1] !== -1 &&
        aBox[2] !== -1 &&
        aBox[3] !== -1 &&
        aBox[4] !== -1 &&
        aBox[5] !== -1 &&
        aBox[6] !== -1 &&
        aBox[7] !== -1 &&
        aBox[8] !== -1) {
        empate();
        lWin = true;
    }
    return lWin;
}
for (let i = 0; i < opcao.length; i++) {
    opcao[i].addEventListener("click", onClick);
    aBox.push(-1);
}
atualizaScore();
setInterval(function () {
    if (nPlayer === 0) {
        if (player1.classList.contains('ativo') === false) {
            player1.classList.add('ativo');
            player2.classList.remove('ativo');
        }
    }
    else {
        if (player2.classList.contains('ativo') === false) {
            player2.classList.add('ativo');
            player1.classList.remove('ativo');
        }
    }
}, 500);
function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}

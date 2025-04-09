const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const reset = document.getElementById('reset');

let player1Score = 0;
let player2Score = 0;

add1.addEventListener('click', () => {
    if (player1Score < 20) { // Verifica se a pontuação é menor que 20
        player1Score++;
        score1.textContent = player1Score;
    } else {
        alert("O jogador 1 PERDEU a partida! Clique em 'NOVO JOGO' para reiniciar o jogo!")
    }
});

add2.addEventListener('click', () => {
    if (player2Score < 20) { // Verifica se a pontuação é menor que 20
        player2Score++;
        score2.textContent = player2Score;
    } else {
        alert("O jogador 2 PERDEU a partida! Clique em 'NOVO JOGO' para reiniciar o jogo!")
    }
}
);

reset.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
});
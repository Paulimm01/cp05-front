const musicas = [
    {
        nome: "3 am West End",
        src: "src/assets/audio/3 am West End.mp3",
    },
    {
        nome: "Arpent",
        src: "src/assets/audio/Arpent.mp3",
    },
    {
        nome: "Bit Bit loop",
        src: "src/assets/audio/Bit Bit loop.mp3",
    },
    {
        nome: "Goodnightmare",
        src: "src/assets/audio/Goodnightmare.mp3",
    },
    {
        nome: "Meditating Beat",
        src: "src/assets/audio/Meditating Beat.mp3",
    }
]
const titulo = document.getElementById("texto");
const player = document.getElementById("player");
const antes = document.getElementById("antes");
const depois = document.getElementById("depois");
let musicaAtual = 0;

document.addEventListener("DOMContentLoaded", () => {
    antes.addEventListener("click", () => {
        musicaAtual--;
        if (musicaAtual < 0) {
            musicaAtual = musicas.length - 1;
        }
        player.src = musicas[musicaAtual].src;
        titulo.innerText = musicas[musicaAtual].nome;
        player.play();
    });
    depois.addEventListener("click", () => {
        musicaAtual++;
        if (musicaAtual > musicas.length - 1) {
            musicaAtual = 0;
        }
        player.src = musicas[musicaAtual].src;
        titulo.innerText = musicas[musicaAtual].nome;
        player.play();
    });
    player.addEventListener("ended", () => {
        musicaAtual++;
        if (musicaAtual > musicas.length - 1) {
            musicaAtual = 0;
        }
        player.src = musicas[musicaAtual].src;
        titulo.innerText = musicas[musicaAtual].nome;
        player.play();
    })
})
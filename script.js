let musicas = [
    {titulo: 'Cello suit' , artista: 'Ophélie Gaillard', src: 'musicas/Cello_suite.mp3', img: 'imagens/perfect.jpg'},
    {titulo: 'Peferct Time' , artista: 'Nanatsu no taizai', src: 'musicas/Perfect time.54', img: 'imagens/hawk.jpg'},
    {titulo: 'Test Drive' , artista: 'How to train', src: 'musicas/Banguela.54', img: 'imagens/furia.jpg'},
    {titulo: 'Fairy Tail' , artista: 'OST', src: 'musicas/Fairy tail.54', img: 'imagens/fadas.jpg'},   
]

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

//duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
renderizarMusica(indexMusica);

//Eventos
document.querySelector('.play').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;    
    if(indexMusica < 0) {
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
    musica.play();
    document.querySelector('.pause').style.display = 'block'; 
    document.querySelector('.play').style.display = 'none'; 
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 3) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    musica.play();
    document.querySelector('.pause').style.display = 'block'; 
    document.querySelector('.play').style.display = 'none'; 
});

/* Avançar e voltar musica */
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
} 

//deixar pause visivel e play invisivel
function tocarMusica() {
    musica.play();
    document.querySelector('.pause').style.display = 'block'; 
    document.querySelector('.play').style.display = 'none';  
}

//pausar musica
function pausarMusica() {
    musica.pause();
    document.querySelector('.pause').style.display = 'none'; 
    document.querySelector('.play').style.display = 'block'; 
}

//atualizar barra
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}


const lista = document.querySelectorAll('.tecla');

function play(valorSom) {

    const elemento = document.querySelector(valorSom);

    if (elemento === null) {
        alert('ELemento nao encontrado');
    } else{
        document.querySelector(valorSom).play();
    }
    
}


for (let index = 0; index < lista.length; index++) {

    const tecla = lista[index];
    const instrumento = tecla.classList[1];

    const idAudio = "#som_" + instrumento;

    tecla.onclick = function () {
        play(idAudio);
    };

    tecla.onkeydown = function (evento) {

        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove('ativa');
        }
    }
}
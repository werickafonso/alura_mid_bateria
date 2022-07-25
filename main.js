// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === "Enter") {
            tecla.classList.add('ativa');   
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

//Com laço de repetição While__________________________________________________________________________________________________________
// let contador = 0;

// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`;

//     tecla.onclick = function() {
//         tocaSom(idAudio);
//     }
//     contador = contador + 1;
// }

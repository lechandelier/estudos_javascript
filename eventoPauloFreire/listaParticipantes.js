var botaoAdicionar = document.querySelector("#adicionar-participante");

botaoAdicionar.addEventListener ("click", function(evento){
    evento.preventDefault();

    var formParticipante = document.querySelector("#form-adiciona");

    //const numCap = [1, 2, 3 , 4];

    var cap = "Sim";
    //var sala = [];

    //for (i = 0; i < numCap.length; i++){
    //    cap = numCap[i];
    //}

    
    var capTd = document.createElement("td");
    //var salaTd = document.createElement("td");

    capTd.textContent = cap;
    //salaTd.textContent = sala;

    participanteTr.appendChild(capTd);

    var tabela = document.querySelector("#tabelaParticipantes");

    tabela.appendChild(participanteTr);
})
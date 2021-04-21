var botaoAdicionar = document.querySelector("#adicionar-participante");

botaoAdicionar.addEventListener ("click", function(evento){
    evento.preventDefault();

    var formParticipante = document.querySelector("#form-adiciona");

    var nome = formParticipante.nome.value;
    var categoria = formParticipante.categoria.value;
    var curso = formParticipante.curso.value;
    var cap = 0;

    var capitulos = ["1", "2" , "3", "4"];

    function atribuiCap(cap, capitulos){
        for (i = 0; cap != capitulos.lenght; i++){
            cap = capitulos[i];
    }
    }

    var participanteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var categoriaTd = document.createElement("td");
    var cursoTd = document.createElement("td");
    var capTd = document.createElement("td");

    nomeTd.textContent = nome;
    categoriaTd.textContent = categoria;
    cursoTd.textContent = curso;
    capTd.textContent = cap;


    participanteTr.appendChild(nomeTd);
    participanteTr.appendChild(categoriaTd);
    participanteTr.appendChild(cursoTd);
    participanteTr.appendChild(capTd);


    var tabela = document.querySelector("#tabelaParticipantes");

    tabela.appendChild(participanteTr);
});

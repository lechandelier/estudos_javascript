var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(Event){
    Event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoForm(form);

    // Cria a tr e a td do paciente

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);


    if(erros.length > 0){
        exibeMensagensDeErro(erros)
        var mensagemErro = document.querySelector("#mensagem-erro");

    }

    // Adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr); 

    form.reset();

})

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoForm(form){

    var objetoPaciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return objetoPaciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr. classList.add("paciente");

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = []

    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido!");

    if(!validaAltura(paciente.altura)) erros.push("A altura inserida é inválida!");

    return erros
}

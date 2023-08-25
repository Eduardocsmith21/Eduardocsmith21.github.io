function pegar () {
    const campo = document.querySelector('#usuario');
    const usuario = campo.value;
    window.alert(`Seja bem vindo(a) ${usuario}`);
};

function pegar_info_cadastro () {
    let campo_nome = document.querySelector('#nome');
    let nome = campo_nome.value;

    let campo_sobrenome = document.querySelector('#sobrenome');
    let sobrenome = campo_sobrenome.value;

    window.alert(`Seja bem vindo(a) ${nome}`);
    console.log('teste');
};

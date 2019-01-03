
document.querySelector('.btn-abrir-menu').onclick = function() {
    document.documentElement.classList.add('menu-ativo');/// adiciona a classe
};

document.querySelector('.btn-menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo'); // remove a classe
};

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};

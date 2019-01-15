//identifica quando o usuario utiliza o scroll
// calcular a distancia entre o topo da pagina e o scrooll
//calcular a distancia entre o top da pagina e o elemento que deseja animar
//comparar as duas distancias anteriores
// adicionar uma classe com css animation ou transition ao elemento animado
//Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
            
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

(function(){
	var $target = $('.anime-2'),
			animationClass = 'anime-start',
            
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();
//identificar o clique no menu
//verificar o item que foi clicado a fazer referencia com o alvo
//verificar a distancia entre o alvo e o topo
//Animar o scrooll até o alvo
$('nav a').click(function(event){
    event.preventDefault();
    var id = $(this).attr('href')/// pega o valor
        targetOffset = $(id).offset().top; /// essa funcao retorna o top e o left do elemento
        $('html,body').animate({
            scrollTop:targetOffset
        },1000)
    console.log(targetOffset);
})








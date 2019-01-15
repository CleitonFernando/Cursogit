$('#btn-servicos').click(function(event){
        event.preventDefault();
    
    var posicaosservicos = $("#servicos").offset().top;
         $('body,html').animate({ 
        scrollTop: posicaosservicos
    },1000);
});

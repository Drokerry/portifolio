
$().ready(function(){
   $('.item-titulo').on('click', function(event){
    
        const elParent = $(event.target).closest('.flex-col');   
        const elMensagem = $('.item-mensagem', elParent);   
        const elImg = $('img', elParent);

        if(elMensagem.hasClass('hidden')=== true){
            elImg.addClass('rotate-90');
            elMensagem.removeClass('hidden');
            elMensagem.addClass('text-gray-600');
            $(event.target).addClass('text-fuchsia-500')
            
        }else{
            elMensagem.addClass('hidden');
            elImg.removeClass('rotate-90');
            $(event.target).removeClass('text-fuchsia-500')
        }

      

   });
   $('.btn-anual').on('click', function(){

    $('.div-mensal').hide();
    $('.div-anual').show();
    
   
});

$('.btn-mensal').on('click', function(){

    $('.div-mensal').show();
    $('.div-anual').hide();
    
   
});
$('#btn-1').on('click', function(){
    $('#agenda').show();
    $('#gerenciador').hide();
    $('#chatbot').hide();
    $('#personalizar').hide();
   
})


$('#btn-2').on('click', function(){
    $('#agenda').hide();
    $('#gerenciador').hide();
    $('#chatbot').hide();
    $('#personalizar').show();
    $('#btn-1').removeClass('bg-orange-600')
    $('#btn-2').addClass('bg-orange-600')
    $('#btn-2').removeClass('text-black');
    $('#btn-2').addClass('text-white');
    $('#btn-1').addClass('text-black')
})

$('#btn-3').on('click', function(){
    $('#agenda').hide();
    $('#chatbot').hide();
    $('#personalizar').hide();
    $('#gerenciador').show();
})
$('#btn-4').on('click', function(){
    $('#agenda').hide();
    $('#personalizar').hide();
    $('#gerenciador').hide();
    $('#chatbot').show();
})

})


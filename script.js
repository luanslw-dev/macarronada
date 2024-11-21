//alert('Ao prencher as informaçoes confira todos os dados')

function carregar(){
    
}

function enviar(){
  // Capturando todos os checkboxes com a classe 'termos'
  var checkboxes = document.querySelectorAll('.refogar');
  var refogar = [];

  // Verificando quais checkboxes estão marcados
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      refogar.push(checkbox.value);
    }
  });


    // Capturando todos os checkboxes com a classe 'termos'
    var checkboxes = document.querySelectorAll('.termos');
    var selecionados = [];

    // Verificando quais checkboxes estão marcados
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        selecionados.push(checkbox.value);
      }
    });
   
  

    var data = new Date()
    var hora =data.getHours()
    var horam =data.getUTCMinutes()
    //var fomar = window.document.getElementById('fomar')
    var nome = window.document.getElementById('nome').value;
    var endereco = window.document.getElementById('endereco').value;
    var telefone = window.document.getElementById('telefone').value;
    var recheio = window.document.querySelector('input[name="recheio"]:checked').value;
    var molho = window.document.querySelector('input[name="molho"]:checked').value;
    var massa = window.document.querySelector('input[name="massa"]:checked').value;
   // var refogar = window.document.querySelector('input[name="refogar1"]:checked').value;
    
    //let num =[nome,endereco,telefone,recheio,molho,massa,refogar,finalizar]
    
    if(nome != '' && endereco!='' && telefone!='' && recheio!='' && molho!='' && massa!=''){
     fomar.innerHTML = `<a href="index.html">voltar</a>  
     <h3>GOLDERE</h3>  
     <h5>MACARRODAS DELIVERY</h5>
     <h6>Segue a baixao os dados do pedido</h6>
     <p>Ola<strong>${nome},Tudo bem</strong></p>
     <p>Seu pedido esta sendo preparado</p>
    <p> Sabor de <strong>${recheio}</strong> Ao  Molho <strong>${molho}</strong></p>
       <p> No Macarão <strong>${massa}</strong></p>
         <p>Endendeço <strong>${endereco}</strong></p>
         <p> Seu contato e <strong>(${telefone})</strong></p>
       <p>Ingredientes para finalizar</p>
       <strong>"${refogar}"</strong>
          <p>temperos para refogar</p>
<strong>"${ selecionados }"</strong>
         
          <p> Hora do pedido <strong>${hora}:${horam}</strong></p>
          <p>Tempo de espera de 35-min a 40-min</p>  ` 



    }else{
        alert('error')
    }}
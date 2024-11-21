//alert('Ao prencher as informaçoes confira todos os dados')

function carregar(){
    
}

function enviar(){
   

    var data = new Date()
    var hora =data.getHours()
    var horam =data.getMinutes()
    //var fomar = window.document.getElementById('fomar')
    var nome = window.document.getElementById('nome').value;
    var endereco = window.document.getElementById('endereco').value;
    var telefone = window.document.getElementById('telefone').value;
    var recheio = window.document.querySelector('input[name="recheio"]:checked').value;
    var molho = window.document.querySelector('input[name="molho"]:checked').value;
    var massa = window.document.querySelector('input[name="massa"]:checked').value;
   // var refogar = window.document.querySelector('input[name="refogar1"]:checked').value;
    var finalizar = window.document.getElementById('finalizar').value;
    //let num =[nome,endereco,telefone,recheio,molho,massa,refogar,finalizar]
    
    if(nome != '' && endereco!='' && telefone!='' && recheio!='' && molho!='' && massa!=''){
     fomar.innerHTML = `<a href="index.html">voltar</a> <h3>GOLDERE</h3>   
     <h5>MACARRODAS DELIVERY</h5>
     <h6>Segue a baixao os dados do pedido</h6>
     <p>Ola <strong>${nome}</strong></p>
    <p> Sabor de <strong>${recheio}</strong> Ao  Molho <strong>${molho}</strong></p>
       <p> No Macarão <strong>${massa}</strong></p>
          <p>Endendeço <strong>${endereco}</strong></p>
          <h6>temperos para refogar</h6>
    
         <p> Seu contato e <strong>${telefone}</strong></p>
          <p> Hora do pedido <strong>${hora}:${horam}</strong> Seu pedido pode demorar de 35-min a 40-min</p>  
          
        ` 



    }else{
        alert('error')
    }}
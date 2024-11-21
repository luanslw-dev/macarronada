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
     fomar.innerHTML = `<h3>GOLDERE</h3> <h5>MACARRODAS DELIVERY</h5><br>
     <h6>Segue a baixao os dados do pediso</h6><br>
     Ola <strong>${nome}</strong><br>
     Sabor de <strong>${recheio}</strong> Ao  Molho <strong>${molho}</strong><br>
        No Macarão <strong>${massa}</strong><br>
          Endendeço <strong>${endereco}</strong><br>
          temporos para refogar<br>
       <br>
       
          Seu contato e <strong>${telefone}</strong><br> Hora do pedido <strong>${hora}:${horam}</strong>
          ` 

    }else{
        alert('error')
    }}
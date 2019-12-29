var xhr=new XMLHttpRequest();

function sendRequest(){
  var ceprecebido=document.getElementById('textocep').value;
  xhr.open('GET', 'https://viacep.com.br/ws/'+ceprecebido+'/json/');
  xhr.send(null);
}

function renderData(){
  if(xhr.readyState===4){
    var dados=JSON.parse(xhr.responseText);
    document.getElementById('cep').textContent=dados.cep;
    document.getElementById('logr').textContent=dados.logradouro;
    document.getElementById('bairro').textContent=dados.bairro;
    document.getElementById('local').textContent=dados.localidade;
    document.getElementById('uf').textContent=dados.uf;
  }
}

xhr.onreadystatechange=renderData;

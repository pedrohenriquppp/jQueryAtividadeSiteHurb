    var json = [];
    function adicionarObjeto(nomePacote, valorPacote, porcentagemDesconto){
        json.push({
            nomePacote: nomePacote,
            valorPacote: valorPacote,
            porcentagemDesconto: porcentagemDesconto,
        })
    }
$(document).ready(function(){
	function nomePacote(index){	
    		return $('.product-card__title')[index].innerText;
	}
	function valorPacote(index){	
            return $('.product-card__link')[index].children[2].children[2].children[2].innerText;
	}
	function porcentagemDesconto(index){
    		return $('.promotion__tag-discount')[index].innerText;
	}

	for (var x=0; x<16; x++){
    		var vnomePacote = nomePacote(x);
    		var vvalorPacote = valorPacote(x);
            var vporcentagemDesconto = porcentagemDesconto(x);
            
            adicionarObjeto(vnomePacote, vvalorPacote, vporcentagemDesconto);

    		console.log(" ");
    		console.log("Nome do Pacote: " + vnomePacote);
    		console.log("Porcentagem de Desconto: " + vporcentagemDesconto);
    		console.log("Valor do Pacote: " + vvalorPacote);
            
	}
            console.log(json);
            document.write(JSON.stringify(json));
}); 

let httpRequest;
function fazerRequisicao(url, destino){
	if(window.XMLHttpRequest){
		httpRequest = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		try{
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				alert("Impossível instanciar o Objeto XMLHttpRequest para este navegador!");
			}
		}
	}
	if(!httpRequest){
		alert("Impossível instanciar o Objeto XMLHttpRequest para este navegador/versão atualize-se!");
		return false;
	}
	httpRequest.onreadystatechange = respostaRequisicao;
	httpRequest.open("GET", url);
	httpRequest.send();
}
function respostaRequisicao(){
	if(httpRequest.readyState == 4){
		if(httpRequest.status == 200){
			document.getElementById("div_conteudo").innerHTML = httpRequest.responseText;
		}
	}
}
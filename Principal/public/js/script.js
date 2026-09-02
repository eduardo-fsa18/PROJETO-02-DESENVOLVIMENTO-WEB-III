// Testar JavaScript:
function testarJS(){
    document.getElementById('mensagemJS').innerHTML =
        ' JavaScript executado!';
}
 
// Carregar JSON:
fetch('/dados/dados.json')
    .then(function(response){
        return response.json();
    })
    .then(function(dados){
        document.getElementById('dadosJson').innerHTML =
            '<b>Materias relacionadas ao 3 semestre:</b> ' + dados["Materias relacionadas ao 3 semestre:"].join('<br> ');
    });
 
// Trocar Video:
function trocarVideo(video){
    var player = document.getElementById('playerVideo');
 
    player.src = '/video/' + video;
    document.getElementById('nomeVideo').innerHTML = video;
 
    player.play();
}
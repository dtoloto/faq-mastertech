<h1>Exemplo Google Maps</h1>
<a href=" https://vagnerasilva.github.io/mapahtml/">  Ver demo </a>

Para colocar um mapa no seu site segue este tutuorial do proprio Google: 

https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple 

Nele vai ter um um body html

Mas para funcionar realmente precisa da KEy nas ultimas linhas da tag html: 
src="https://maps.googleapis.com/maps/api/js?key=SuaAPIKEYVAIAQUINESSELUGAR&callback=initMap">

Para oter a Key entre nesse site:
https://developers.google.com/maps/documentation/javascript/get-api-key?hl=pt-br

Para alterar as coordenadas do lugar onde vc quer no mapa vc precisa obter ele neste formato: 
var mastertech = {lat: -23.5625769, lng: -46.6565047};

Faça uma busca no google maps e copie esses numeros do browser. https://www.google.com.br/maps/place/Mastertech+Paulista/@-23.5625769,-46.6565047,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce59c8e4bfffff:0x352a399a9872a3b0!8m2!3d-23.5625769!4d-46.654316

//Define uma função chamada addUser(). Esta função será chamada quando o botão "Entrar" for clicado.

function addUser() {

  //Obtém os valores dos campos de entrada com os IDs "player1_name_input" e "player2_name_input" e armazena esses 
  //valores nas variáveis player1_name e player2_name, respectivamente.

    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    //Armazena os nomes dos jogadores no armazenamento local do navegador usando o método setItem() do objeto localStorage. 
    //Os nomes dos jogadores são armazenados com as chaves "player1_name" e "player2_name".
  
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);

      //Redireciona o navegador para a página "game_page.html" após o armazenamento dos nomes dos jogadores. Isso provavelmente levará os 
      //jogadores para a próxima página do jogo.
  
      window.location = "game_page.html";

      //Obtém os nomes dos jogadores armazenados anteriormente no armazenamento local do navegador e os atribui novamente às variáveis 
      //player1_name e player2_name. Parece que esta parte do código é desnecessária, pois os nomes já foram obtidos e atribuídos anteriormente.

      player1_name = localStorage.getItem(" player1_name");
      player2_name = localStorage.getItem(" player2_name");

      //Inicializa as pontuações dos jogadores, atribuindo 0 a player1_score e player2_score.

      player1_score = 0;
      player2_score = 0;

      //Define o conteúdo dos elementos HTML com os IDs "player1_name" e "player2_name" para exibir os nomes dos jogadores, 
      //seguidos de ":", indicando que é a seção dos nomes dos jogadores.

      document.getElementById("player1_name").innerHTML = player1_name + " : ";
      document.getElementById("player2_name").innerHTML = player2_name + " : ";

      //Define o conteúdo dos elementos HTML com os IDs "player1_score" e "player2_score" para exibir as pontuações dos jogadores. 
      //Inicialmente, ambas as pontuações são definidas como 0.

      document.getElementById("player1_score").innerHTML = player1_score;
      document.getElementById("player2_score").innerHTML = player2_score;

  }
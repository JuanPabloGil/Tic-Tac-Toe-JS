
function validatePlayers(player1, player2) {
  if (player1.length > 3 && player2.length > 3) {
    return true
  }
}

const button = document.getElementById('button');
button.addEventListener('click', () => {
      gameController.players = [];
      gameBoard.clean_board();
      gameController.render(gameBoard.arr);
      gameController.current_player = 0 ;

  if (gameController.against_computer){
    gameController.players = gameController.get_players("Human", "AI");
    gameController.display_on_title_message(`Turn's of:  ${gameController.players[gameController.current_player].name}`);
  }else{
    const form = document.getElementById('form');
    const p1 = form.playerOne;
    const p2 = form.playerTwo;

    if (validatePlayers(p1.value, p2.value)) {
      gameController.players = gameController.get_players(p1.value, p2.value);
      gameController.display_on_title_message(`Turn's of:  ${gameController.players[gameController.current_player].name}`);
      document.getElementById('error_message').textContent = "";
    }else{
      document.getElementById('error_message').textContent = "The playe's name must have more than 3 chars ";
    }

  }
});


const toggle_button = document.querySelector('.against_computer input');
toggle_button.addEventListener('click', (event) => {
  gameController.against_computer = event.target.checked;
  gameController.players = [];
  gameBoard.clean_board();
  gameController.render(gameBoard.arr)

  const form = document.getElementById('form');
  if (gameController.against_computer) {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
});

function check_current_player(place, cPlayer){

  if (gameController.players.length > 0 &&
    gameBoard.add_move(place, gameController.players[cPlayer].symbol)
  ) {
    gameController.current_player =  cPlayer == 0 ? 1 : 0;
    gameController.display_on_title_message(`Turn's of:  ${gameController.players[gameController.current_player].name}`);
    gameController.render(gameBoard.arr);

    if(gameBoard.there_is_winner()) {
      gameController.display_on_title_message(`Congratulations ${gameController.players[cPlayer].name} you win `);
    } else if(!gameBoard.there_is_place()) {
      gameController.display_on_title_message("Its a tie");
    }
  } else {
    if(gameController.players.length == 0){
      gameController.display_on_title_message("Please press start game");
    }
  }
}

const squares = [...document.querySelectorAll('.square')];
squares.forEach((square) => {
  square.addEventListener('click',(event) => {
    if (!gameBoard.there_is_winner()){
      let cPlayer = gameController.current_player;
      let place = event.target.value;
      check_current_player(place, cPlayer);

      if (gameController.players.length > 0 &&
        gameController.against_computer &&
        gameBoard.there_is_place()
      ) {
        cPlayer = gameController.current_player;
        place = (aiEntity.bestMove() + 1).toString();
        check_current_player(place, cPlayer);
      }
    }

  });
});

gameController.render(gameBoard.arr);

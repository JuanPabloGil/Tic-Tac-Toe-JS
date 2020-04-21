const gameBoard = (function () {
  const LINES_TO_WIN = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

  const linesToWin = () => LINES_TO_WIN;

  const arr = ['', '', '', '', '', '', '', '', ''];

  const there_is_place = function () {
    let response = false;
    this.arr.forEach((item) => {
      if (item !== '✘' && item !== '●') {
        response = true;
      }
    });
    return response;
  };

  const add_move = function (place, symbol) {
    if (!/^[1-9]$/.test(place)
      || this.arr[parseInt(place) - 1] === '●'
      || this.arr[parseInt(place) - 1] === '✘') {
      return false;
    }

    this.arr[parseInt(place) - 1] = symbol;
    return true;
  };

  const there_is_winner = function () {
    let response = false;
    linesToWin().forEach((line) => {
      if (this.arr[line[0]] === this.arr[line[1]]
          && this.arr[line[1]] === this.arr[line[2]]
          && this.arr[line[0]] !== ''
      ) response = true;
    }, this);
    return response;
  };

  const give_me_winner = function () {
    let response = '';
    linesToWin().forEach((line) => {
      if (this.arr[line[0]] === this.arr[line[1]]
        && this.arr[line[1]] === this.arr[line[2]]
        && this.arr[line[0]] !== ''
      ) response = this.arr[line[0]];
    }, this);
    return response;
  };

  const clean_board = function () {
    this.arr = ['', '', '', '', '', '', '', '', ''];
  };


  return {
    arr,
    there_is_place,
    there_is_winner,
    add_move,
    give_me_winner,
    clean_board,
  };
}());

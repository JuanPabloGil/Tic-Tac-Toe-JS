import gameBoard from '../scripts/game_board';


beforeEach(() => {
  gameBoard.arr = ['', '', '', '', '', '', '', '', ''];
});

describe('#addMove', () => {
  test('chose a place that is availabe', () => {
    expect(gameBoard.addMove('1', '✘')).toBe(true);
  });

  test('modify a place that is availabe', () => {
    gameBoard.addMove('1', '✘');
    expect(gameBoard.arr[0]).toBe('✘');
  });

  test('choose a place that is occupied', () => {
    gameBoard.arr = ['✘', '', '', '', '', '', '', '', ''];
    expect(gameBoard.addMove('1', '●')).toBe(false);
  });

  test('didn\'t modify a place that is occupied', () => {
    gameBoard.arr = ['✘', '', '', '', '', '', '', '', ''];
    gameBoard.addMove('1', '●');
    expect(gameBoard.arr[0]).toBe('✘');
  });

  test('choose a place with an integer', () => {
    expect(gameBoard.addMove(5, '✘')).toBe(false);
  });

  test('didn\'t modify a place that has been chosen with an integer', () => {
    gameBoard.addMove(5, '✘');
    expect(gameBoard.arr[0]).toBe('');
  });

  test('choose a place out of the range (1-9)', () => {
    expect(gameBoard.addMove('12', '✘')).toBe(false);
  });

  test('didn\'t modify a place out of the range (1-9)', () => {
    gameBoard.addMove('12', '✘');
    expect(gameBoard.arr.every((place) => place === '')).toBe(true);
  });

  test('choose a place with characters', () => {
    expect(gameBoard.addMove('one', '✘')).toBe(false);
  });

  test('doesn\'t modify a place that has been chosen with characters', () => {
    gameBoard.addMove('one', '✘');
    expect(gameBoard.arr.every((place) => place === '')).toBe(true);
  });
});


describe('#thereIsPlace', () => {
  test('Returns true because all the places are available in the dashboard', () => {
    expect(gameBoard.thereIsPlace()).toBe(true);
  });

  test('Returns true because there are places available in the dashboard', () => {
    gameBoard.arr = ['●', '✘', '', '●', '', '', '', '', '✘'];
    expect(gameBoard.thereIsPlace()).toBe(true);
  });

  test('Returns false because there are not places in the dashboard', () => {
    gameBoard.arr = ['●', '✘', '●', '●', '✘', '✘', '✘', '●', '●'];
    expect(gameBoard.thereIsPlace()).toBe(false);
  });
});


describe('#thereIsWinner', () => {
  test('wins becouse of line 1 2 3', () => {
    gameBoard.arr = ['✘', '✘', '✘', '', '', '', '', '', ''];
    expect(gameBoard.thereIsWinner()).toBe(true);
  });

  test('wins becouse of line 4 5 6', () => {
    gameBoard.arr = ['', '', '', '✘', '✘', '✘', '', '', ''];
    expect(gameBoard.thereIsWinner()).toBe(true);
  });

  test('wins becouse of line 7 8 9', () => {
    gameBoard.arr = ['', '', '', '', '', '', '✘', '✘', '✘'];
    expect(gameBoard.thereIsWinner()).toBe(true);
  });

  test('wins becouse of line 1 4 7', () => {
    gameBoard.arr = ['✘', '', '', '✘', '', '', '✘', '', ''];
    expect(gameBoard.thereIsWinner()).toBe(true);
  });

  test('wins becouse of line 2 5 8', () => {
    gameBoard.arr = ['', '✘', '', '', '✘', '', '', '✘', ''];
    expect(gameBoard.thereIsWinner()).toBe(true);
  });

  test('wins becouse of line 3 6 9', () => {
    gameBoard.arr = ['', '', '✘', '', '', '✘', '', '', '✘'];
    expect(gameBoard.thereIsWinner()).toBe(true);
  });

  test('wins becouse of line  1 5 9', () => {
    gameBoard.arr = ['✘', '', '', '', '✘', '', '', '', '✘'];
    expect(gameBoard.thereIsWinner()).toBe(true);
  });

  test('wins becouse of line  3 5 7', () => {
    gameBoard.arr = ['', '', '✘', '', '✘', '', '✘', '', ''];
    expect(gameBoard.thereIsWinner()).toBe(true);
  });

  test('anyone has done a move', () => {
    expect(gameBoard.thereIsWinner()).toBe(false);
  });

  test('there is no winner', () => {
    gameBoard.arr = ['●', '✘', '', '●', '', '', '', '', '✘'];
    expect(gameBoard.thereIsWinner()).toBe(false);
  });
});


describe('#giveMeWinner', () => {
  test('Resturn ✘ symbol on a winning case', () => {
    gameBoard.arr = ['', '', '✘', '', '✘', '', '✘', '', ''];
    expect(gameBoard.giveMeWinner()).toBe('✘');
  });

  test('Resturn ● symbol on a winning case', () => {
    gameBoard.arr = ['', '', '●', '', '●', '', '●', '', ''];
    expect(gameBoard.giveMeWinner()).toBe('●');
  });

  test('Resturn an empty string if there is no winner case', () => {
    gameBoard.arr = ['', '✘', '', '', '●', '', '●', '', ''];
    expect(gameBoard.giveMeWinner()).toBe('');
  });
});

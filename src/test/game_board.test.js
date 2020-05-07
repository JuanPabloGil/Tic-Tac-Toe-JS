import gameBoard from '../scripts/game_board';

test('Cheking if there is a place on the board case false ', () => {
  expect(gameBoard.thereIsPlace()).toBe(true);
});


beforeEach(() => {
    gameBoard.arr  = ['', '', '', '', '', '', '', '', ''];
});

describe('#add_move', () => {
  test('chose a place that is availabe', () => {
    expect(gameBoard.addMove('1', '✘')).toBe(true);
  });

  test('modify a place that is availabe', () => {
    gameBoard.addMove('1', '✘');
    expect(gameBoard.arr[0]).toBe('✘');
  });

  test('choose a place that is occupied', () => {
    gameBoard.arr  = ['✘', '', '', '', '', '', '', '', ''];
    expect(gameBoard.addMove('1', '●')).toBe(false);
  });

  test('didn\'t modify a place that is occupied', () => {
    gameBoard.arr  = ['✘', '', '', '', '', '', '', '', ''];
    gameBoard.addMove('1', '●');
    expect(gameBoard.arr[0]).toBe('✘');
  });

  test('Check if the place hhas been chosen as string ', () => {
    expect(gameBoard.addMove(1, '✘')).toBe(false);
  });

  test('choose a place out of the range', () => {
    expect(gameBoard.addMove('12', '✘')).toBe(false);
  });

});

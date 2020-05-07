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

  test('choose a place with an integer', () => {
    expect(gameBoard.addMove(5, '✘')).toBe(false);
  });

  test('didn\'t modify a place that has been chosen with an integer', () => {
    gameBoard.addMove(5, '✘')
    expect(gameBoard.arr[0]).toBe('');
  });

  test('choose a place out of the range (1-9)', () => {
    expect(gameBoard.addMove('12', '✘')).toBe(false);
  });

  test('didn\'t modify a place out of the range (1-9)', () => {
    gameBoard.addMove('12', '✘')
    expect(gameBoard.arr.every((place) => place === '')).toBe(true);
  });

  test('choose a place with characters', () => {
    expect(gameBoard.addMove('one', '✘')).toBe(false);
  });

  test('doesn\'t modify a place that has been chosen with characters', () => {
    gameBoard.addMove('one', '✘')
    expect(gameBoard.arr.every((place) => place === '')).toBe(true);
  });
});

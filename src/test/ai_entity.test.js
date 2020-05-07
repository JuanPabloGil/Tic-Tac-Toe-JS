import gameBoard from '../scripts/game_board';
import aiEntity from '../scripts/ai_entity';


describe('#bestMove', () => {
  const human = '●';
  const ai = '✘';
  beforeEach(() => {
    gameBoard.arr = ['', '', '', '', '', '', '', '', ''];
  });

  test('meedle place as best move', () => {
    gameBoard.arr = [human, '', '', '', '', '', '', '', ''];
    expect(aiEntity.bestMove(gameBoard)).toBe(4);
  });

  test('place to win as best move', () => {
    gameBoard.arr = ['', '', human, '', ai, '', '', human, ai];
    expect(aiEntity.bestMove(gameBoard)).toBe(0);
  });

  test('place to win as best move', () => {
    gameBoard.arr = [ai, ai, human, human, human, ai, ai, human, human];
    expect(aiEntity.bestMove(gameBoard)).toBeUndefined();
  });
});
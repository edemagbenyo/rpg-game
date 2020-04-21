import ScoreBoard from '../Objects/ScoreBoard';

describe('ScoreBoard', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = localStorageMock;

  const Board = new ScoreBoard(0, 10, 1);

  it('has a score of 0', () => {
    expect(Board.score).toBe(0);
  });

  it('set score to 90', () => {
    Board.score = 90;
    expect(Board.score).toBe(90);
  });
});
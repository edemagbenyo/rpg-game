export default class {
  constructor() {
    this._gameId = 'Bkzv4v95qmpFJOVsmS1p';
  }

  async getLeaderBoard() {
    return fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this._gameId}/scores`,

    );
  }

  async nameExistLeaderBoard(playerName) {
    const playersNames = await (await this.getLeaderBoard()).json();
    const found = playersNames.result.find(i => i.user === playerName);
    return found;
  }

  async setScoreLeaderBoard(user, score) {
    return fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this._gameId}/scores`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ user, score }),
      },
    );
  }
}

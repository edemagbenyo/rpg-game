export default class {
  constructor() {
    this._gameId = "pk5YSrq2RrbFJYHrVRwB";
  }
  async getLeaderBoard() {
    return await (
      await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this._gameId}/scores`
      )
    ).json();
  }
  async nameExistLeaderBoard(playerName) {
    const playersNames = await this.getLeaderBoard();
    const found = playersNames.result.find(i=>i.user == playerName)
    return found;
  }
  async setScoreLeaderBoard(user, score) {
    return await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this._gameId}/scores`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ user, score }),
      }
    );
  }
}

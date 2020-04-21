import LeaderBoard from "../Helpers/LeaderBoard";

export default class {
  constructor(score, stars, level = 1) {
    this._score = score;
    this._stars = stars;
    this._level = level;
    this._name = "";

    this.LeaderBoard = new LeaderBoard();

    this.loading = document.createElement('span')
    this.loading.textContent="Loading leaderboard...";

    this.div = document.createElement("div");
    this.playerName = localStorage.getItem("playerName");

    this.labelScore = document.createElement("span");
    this.labelPlayerName = document.createElement("p");
    this.levelText = document.createElement("p");
  }
  set score(score) {
    this._score = score;
    this.labelScore.textContent = `${this._score} / ${this._stars}`;
    this.LeaderBoard.setScoreLeaderBoard(this.playerName, score);
  }
  get score() {
    return Number(this._score);
  }
  set level(level) {
    this._level = level;
    this.levelText.textContent = `Level ${this._level} `;
  }
  get level() {
    return this._level;
  }
  async displayLeaderBoard() {
    const leaderBoardDiv = document.createElement("div");
    const ul = document.createElement("ul");
    ul.style = `
    list-style: none;
    padding: 5px;
    background-color: #FFFFFF;
    color: #000000;
    `;
    const h3 = document.createElement("h3");
    h3.textContent = "Leaderboard";
    try {
      const players = await this.LeaderBoard.getLeaderBoard();
  
      const list = players.result
        .sort((a, b) => b.score - a.score)
        .map((player) => {
          return `<li style=" border: 1px solid #FFFFFF; padding: 2px; ${
            localStorage.getItem("playerName") == player.user
              ? "background:#5999BB; color:white"
              : "-"
          }" >${player.user} - ${player.score}`;
        });

      ul.innerHTML = list;
    } catch (error) {
      h3.style="color:red;"
      h3.textContent = "Error loading leader board"
    }
    this.loading.textContent=''
    leaderBoardDiv.append(h3);
    leaderBoardDiv.append(ul);
    this.div.append(leaderBoardDiv);
  }
  displayBoard() {
    const body = document.getElementsByTagName("body");
    const divName = document.createElement("div");
    const divScore = document.createElement("div");
    const divInputName = document.createElement("form");

    const setNameBtn = document.createElement("button");

    const nameInput = document.createElement("input");
    const labelPlayerNameInput = document.createElement("label");
    const errorPlayerNameInput = document.createElement("label");

    setNameBtn.addEventListener("click", () => {
      divInputName.style = "display:inline";
      errorPlayerNameInput.textContent = "";
    });
    divInputName.addEventListener("submit", async (e) => {
      e.preventDefault();
      errorPlayerNameInput.textContent = "";
      if (await this.LeaderBoard.nameExistLeaderBoard(nameInput.value)) {
        errorPlayerNameInput.style = "color:red";
        errorPlayerNameInput.textContent = "Name already exists";
      } else {
        this.labelPlayerName.textContent = nameInput.value;
        localStorage.setItem("playerName", nameInput.value);
        divInputName.style = `display:none`;
      }
    });

    divInputName.style = "display:none";

    nameInput.style = `display:block; padding:5px; border:2px solid #CCCCCC`;

    divScore.style = `display:block; background-color:#5999BB; color:#FFFFFF; padding:5px;`;
    divName.style = `display:block; background-color:#FFD851; color:#933cea; padding:5px;`;
    setNameBtn.style = `display:block`;
    this.div.style = `
    display: inline;
    width: 250px;
    position: absolute;
    border: 5px solid #10222B;
    color: #10222B;
    padding:5px;
`;
    setNameBtn.style = `    display: block;
background-color: #21572F;
width: 100px;
border: 1px solid #FFFFFF;
font-size: 1em;
color: white;
padding: 3px;`;

    this.labelPlayerName.style = `font-size:1.2em`;

    this.levelText.style = `padding:5px; color:#933cea; font-size:30px; margin:5px; text-align:center`;
    this.levelText.textContent = `Level ${this._level} `;
    const labelScoreText = document.createElement("span");
    labelScoreText.textContent = "Score : ";
    this.labelScore.textContent = `${this._score} / ${this._stars}`;

    setNameBtn.textContent = "Set Name";
    this.labelPlayerName.textContent = this.playerName || "-";

    labelPlayerNameInput.textContent = "Enter your name";

    divName.append(setNameBtn);
    divName.append(this.labelPlayerName);

    divScore.append(labelScoreText);
    divScore.append(this.labelScore);

    divInputName.append(labelPlayerNameInput);
    divInputName.append(nameInput);
    divInputName.append(errorPlayerNameInput);

    this.div.append(this.levelText);
    this.div.append(divScore);
    this.div.append(divName);
    this.div.append(divInputName);
    this.div.append(this.loading)
    body[0].append(this.div);

    this.displayLeaderBoard();
  }
}

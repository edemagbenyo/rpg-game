export default class {
  constructor(score, stars, level = 1) {
    this._score = score;
    this._stars = stars;
    this._level = level;
    this._name = "";

    this.labelScore = document.createElement("span");
    this.labelName = document.createElement("p");
  }
  set score(score) {
    this._score = score;
    console.log("score", this._score);
    this.labelScore.textContent = `${this._score}/${this._stars}`;
  }
  get score() {
    return Number(this._score);
  }
  set level(level) {
    this._level = level;
  }
  get level() {
    return this._level;
  }
  displayBoard() {
    const div = document.createElement("div");
    const body = document.getElementsByTagName("body");

    const divName = document.createElement("div");
    const divScore = document.createElement("div");
    const divInputName = document.createElement("form");

    const setNameBtn = document.createElement("button");

    const nameInput = document.createElement("input");
    const labelNameInput = document.createElement("label");

    setNameBtn.addEventListener("click", () => {
      divInputName.style = "display:inline";
    });
    divInputName.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("name", nameInput.value);
      this.labelName.textContent = nameInput.value;
      divInputName.style = `display:none`;
    });

    divInputName.style = "display:none";

    nameInput.style = `display:block; padding:5px; border:2px solid #CCCCCC`;

    divScore.style = `display:block; background-color:#5999BB; color:#FFFFFF; padding:5px;`;
    divName.style = `display:block; background-color:#FFD851; color:#933cea; padding:5px;`;
    setNameBtn.style = `display:block`;
    div.style = `
    display: inline;

    height: 250px;
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

    this.labelName.style = `font-size:1.2em`;
    const levelText = document.createElement("p");
    levelText.style = `padding:5px; color:#933cea; font-size:30px; margin:5px; text-align:center`;
    levelText.textContent = `Level ${this._level} `;
    const labelScoreText = document.createElement("span");
    labelScoreText.textContent = "Score : ";
    this.labelScore.textContent = `${this._score}/${this._stars}`;

    setNameBtn.textContent = "Set Name";
    this.labelName.textContent = "-";

    labelNameInput.textContent = "Enter your name";

    divName.append(setNameBtn);
    divName.append(this.labelName);

    divScore.append(labelScoreText);
    divScore.append(this.labelScore);

    divInputName.append(labelNameInput);
    divInputName.append(nameInput);

    div.append(levelText);
    div.append(divScore);
    div.append(divName);
    div.append(divInputName);
    body[0].append(div);
  }
}

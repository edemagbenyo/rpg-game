# rpg-game
Sedemania
<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
![GitHub repo size](https://img.shields.io/github/repo-size/edemagbenyo/rpg-game)
![GitHub contributors](https://img.shields.io/github/contributors/edemagbenyo/rpg-game)
![GitHub stars](https://img.shields.io/github/stars/edemagbenyo/rpg-game?style=social)
![GitHub forks](https://img.shields.io/github/forks/edemagbenyo/rpg-game?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/edemagbenyo?style=social)

## Overview
Sedemamia is single player turn based game. The game is intended to test how fast the player can think and swerve obstacles.
The game is made up of 5 level and final level where you have to defeat the grand trotro.
In the first five level, the user must collect as much as starts possible. The collected stars will be used in the fight with the grand trotro at the end of the 3 lives. 
Regardless of number of stars collected, any player who exhaust all the 3 lives will be sent to face the grand trotro.
The user has a total of 3 lives in any set of game session. 

## Level Design
The game is made up of 5 different preliminary levels where the player collects as much as stars.
At each diffents level, the player will be a set of moving obstacles(flying birds) thrown at the player. Any contact with a flying bird will cause the player to lose one life.

## Themes

## Story and Gameplay

### Story
A player(Sedem) is on the quest to save the world from the tyrant grand trotro(GT) who has brought darkness to the people of Seduland. In order to get to GT and restore brightness, Sedem needs to collect as much as possible amunition for the fight. He must also die 3 times before he can get to the GT. Collecting the stars is not as easy as it sounds as there are flying birds that are constantly blocking the way and trying to eat Sedem so he can get to GT and get finish. Once the 

### Gameplay
Player uses the direction keys( up: to jump and move to upper blocks, down: to move down in a faster way, left: to move left, right: to move right).
The player can use the additional keys for extra(f: to throw fire at the enemy, d: to throw blocks at enemy )
Fire: is equivalent to 2 stars and cause more damage than a block. A player can start having a fire after he has collected 20 stars or more.
Block: is equivalent to 1 star and cause less damage.

Enemy: We have two types of enemy, the flying birds and grand trotro(GT). Flying birds are the small enemy that prevent Sedem to collect enough stars to kill GT. Flying birds can fly in any direction and kill the player on a contact. Flying birds can be kill with fire(2 stars) or 3 blocks.

GT can be killed if it has been hit by in the middle by 5 fires in 10 blocks or by 40 blocks.

## Technical

### Mechanics
Mobility system: Player gets to move in all directions using the arrow keys. The UP and DOWN keys are expectional, in the sense, the UP key makes the player jump, however the down key helps the player to fall fast.
Shooting system: Player and shoot a block or fire as long as they have the equivalent amount of stars.
Scoring system: Player gets a point for collecting a start and for killing a bird you get 5 points.



## Assets

### Graphics 
### Audio
#### Sounds, voiceover, music
sound1.mp3
it will be playing repeatdly throughout the first 5 levels

block.wav
will be player when the user shoots a block

fire.wav
will be played when the user fires a fire

gt.wav
will be played when the player moves to gt level

## Prerequisites

Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* You have installed the latest version of `nodejs`
* You have a `<Windows/Linux/Mac>` machine.

## Installing weather app

To install weather app, follow these steps:

1. Clone the project
```
git clone git@github.com:edemagbenyo/rpg-game.git
```

## Using Sedemania Game

To use Sedemania Game, follow these steps:

1. Enter a city name
2. Hit the search button

## Contributing to Sedemania Game
<!--- If your README is long or you have some specific process or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->
To contribute to the Sedemania Game, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b feature/awesome_branch`.
3. Make your changes and commit them: `git commit -m 'awesome message'`
4. Push to the original branch: `git push origin feature/awesome_branch`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@edemagbenyo](https://github.com/edemagbenyo) 📖


## Contact

If you want to contact me you can reach me at <edem.agbenyo@gmail.com>.

## Credits

Graphics
Full moon image: Alekei
Main Character: bevouliin.com

Sounds
Heroic Demise : Matthew Pablo

## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [MIT](<link>).

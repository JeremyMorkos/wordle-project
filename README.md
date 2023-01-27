

# wordle-project 
[Wordle 2.0](https://jeremymorkos.github.io/wordle-project/)

## Technologies used

+ Javascript 
+ HTML 
+ CSS
+ Audio(.wav) 

## Approach 
The plan was to create a html div grid for the gameboard and the keyboard on screen. In javascript, I used DOM to access the variables and the grid, which I used within the game. I also attached appropriate event listeners for each key click, with a separate handler for enter and delete. My intention behind doing this was to update the DOM and the variables dynamically in the game. 

Due to my inexperience, I realised that I did not do enough pre-planning from the outset of the project, and couldn't anticipate future problems that may occur. Unfortunately, this created road blocks at certain project points that required me to refactor and change course. An example of this was when I was  inputting the players 'letter guess' into a variable array; additional counters were necessary, along with a Boolean array, to jump to the next row of the grid. As I did not want to completely start over again, I had to do this to match the original layout. 

## Installation instructions
The installation requirements for playing this game is to have;
+ Stable internet 
+ Internet browser
+ Mouse or touchpad  
+ Sound is optional

## Unsolved problems 
+ could not delete all the letters in the array "text". 
+ can't stop the count from increasing in "letterIndex”, counter" and "index" variables although it doesn't seem to affect the game. 
+ enter button sound works even if letters are not filled in the entire row.

## Notes
I believe that in doing this project I have realised the importance of **planning thoroughly before putting any syntax on the screen**. I believe a better approach is to spend more time in the initial stages of development and execute an effective plan to help create an organised and readable code. I found that I had put logic in scope that did not work correctly which then created bugs. It was then difficult to structure the logic when refactoring halfway through the project. However, in doing this, I have researched and read extensively about functions and logical operators(w3 schools).Overall, this project has  helped me learn and develop more as a student. 

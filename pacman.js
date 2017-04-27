// Setup initial game stats
var score = 0;
var lives = 2;
var powerPellets = 4;
var smallDots = 240;
var remainingSmallDots = 240;
var ghostEaten = 0;
var level = 0;
var fruitDisplay = false;


// Define your ghosts here
var inky = {
  menu_option: '1',
  name: 'Inky',
  colour: 'Red',
  character: 'Shadow',
  edible: false
};

var blinky = {
  menu_option: '2',
  name: 'Blinky',
  colour: 'Cyan',
  character: 'Speedy',
  edible: false
};

var pinky = {
  menu_option: '3',
  name: 'Pinky',
  colour: 'Pink',
  character: 'Bashful',
  edible: false
};

var clyde = {
  menu_option: '4',
  name: 'Clyde',
  colour: 'Orange',
  character: 'Pokey',
  edible: false
};

var ghost = [inky, blinky, pinky, clyde];


// replace this comment with your four ghosts setup as objects


// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(function() {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log('Score: ' + score + '     Lives: ' + lives + '      Power Pellets: ' +powerPellets);
  console.log('Remaining Dots left: ' +remainingSmallDots);
  console.log('Level: ' + level);
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  if (level===1 && remainingSmallDots<=getRandomInt(50,220))
  {
      console.log('(s) Eat cherry / 100 points');
      fruitDisplay = true;
  }

  else if (level===2 && remainingSmallDots<=getRandomInt(50,220))
  {
    console.log('(s) Eat Strawberry / 300 points');
    fruitDisplay = true;
  }

  else if ((level===3 || level===4) && remainingSmallDots<=getRandomInt(50,220))
  {
    console.log('(s) Eat Orange / 500 points');
    fruitDisplay = true;
  }

  else if ((level===5 || level===6) && remainingSmallDots<=getRandomInt(50,220))
  {
    console.log('(s) Eat Apple /700 points');
    fruitDisplay = true;
  }

  else if ((level===7 || level===8) && remainingSmallDots<=getRandomInt(50,220))
  {
    console.log('(s) Eat Pineapple / 1,000 points');
    fruitDisplay = true;
  }

  else if ((level===9 || level===10) && remainingSmallDots<=getRandomInt(50,220))
  {
    console.log('(s) Eat Galaxian Spaceship / 2,000 points');
    fruitDisplay = true;
  }

  else if ((level===11 || level===12) && remainingSmallDots<=getRandomInt(50,220))
  {
    console.log('(s) Eat Bell / 3,000 points');
    fruitDisplay = true;
  }

  else if (level >= 13 && remainingSmallDots<=getRandomInt(50,220))
  {
    console.log('(s) Eat Key / 5,000 points');
    fruitDisplay = true;
  }

  console.log('(d) Eat Dot');
  if (remainingSmallDots >= 10)
  {
    console.log('(t) Eat 10 Dots');
  }
  if (remainingSmallDots >=100)
  {
    console.log('(h) Eat 100 Dots');
  }
  console.log('(w) Eat all remaining Dots');
  if (powerPellets>0)
  {
    console.log('(p) Eat Power-Pellet');
  }
  if (ghost[0].edible === true)
  {
      console.log('(1) Eat Inky (edible) ');
  }
  else
  {
      console.log('(1) Eat Inky (inedible) ');
  }

  if (ghost[1].edible === true)
  {
      console.log('(2) Eat Blinky (edible) ');
  }
  else
  {
      console.log('(2) Eat Blinky (inedible) ');
  }

  if (ghost[2].edible === true)
  {
      console.log('(3) Eat Pinky (edible) ');
  }
  else
  {
      console.log('(3) Eat Pinky (inedible) ');
  }

  if (ghost[3].edible === true)
  {
      console.log('(4) Eat Clyde (edible) ');
  }
  else
  {
      console.log('(4) Eat Clyde (inedible) ');
  }

  console.log('(q) Quit');
}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nWaka Waka :v '); // :v is the Pac-Man emoji.
}


// Menu Options
function eatDot() {

  if (remainingSmallDots>0)
  {
    console.log('\nChomp!');
    score += 10;
    remainingSmallDots --;
  }
  else   //level up
  {
    level++;
    console.log('Level Up! You are on Level: ' +level);
    remainingSmallDots=240;
    powerPellets = 4;
    ghost[0].edible= false;
    ghost[1].edible = false;
    ghost[2].edible = false;
    ghost[3].edible = false;

    //console.log('Not a pragmatic scenario, you have eaten all dots');
  }

}

//Eat 10 dots at a time
function eatTenDots()
{
  if (remainingSmallDots > 10)
  {
    score +=100;
    remainingSmallDots -=10;
  }

  else if (remainingSmallDots<10 && remainingSmallDots >0)
  {
    console.log('Not a pragmatic scenario, 10 dots are not left in the board. Please try eating less dots at a time');
  }
  else
  {
    level++;
    console.log('Level Up! You are on Level: ' +level);
    remainingSmallDots=240;
    powerPellets = 4;
    ghost[0].edible= false;
    ghost[1].edible = false;
    ghost[2].edible = false;
    ghost[3].edible = false;
  }

}

function eatHundredDots()
{
  if (remainingSmallDots > 100)
  {
    score +=1000;
    remainingSmallDots -=100;
  }

  else if (remainingSmallDots<100 && remainingSmallDots >0)
  {
    console.log('Not a pragmatic scenario, 100 dots are not left in the board. Please try eating less dots at a time');
  }
  else
  {
    level++;
    console.log('Level Up! You are on Level: ' +level);
    remainingSmallDots=240;
    powerPellets = 4;
    ghost[0].edible= false;
    ghost[1].edible = false;
    ghost[2].edible = false;
    ghost[3].edible = false;
  }

}

function eatRemainingDots()
{
  score += (remainingSmallDots*10);
  remainingSmallDots = 0;
  console.log('No more dots to eat!');

}


// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'd':
      eatDot();
      break;
    case 'p':
      eatPowerPellet();
      break;
    case 't':
      eatTenDots();
      break;
      case 'h':
        eatHundredDots();
        break
        case 'w':
          eatRemainingDots();
          break
        case '1':
          eatGhost(ghost[0]);
          break
        case '2':
            eatGhost(ghost[1]);
            break
        case '3':
            eatGhost(ghost[2]);
            break
        case '4':
            eatGhost(ghost[3]);
            break
        case 's':

                if (level===0)
                {
                  console.log('N/A');
                }

                if (level===1 && fruitDisplay===true)
                {
                  eatCherry();
                  fruitDisplay=false;
                }

                else if (level===2 && fruitDisplay===true)
                {
                    eatStrawberry();
                    fruitDisplay=false;
                }

                else if ((level===3 || level===4) && fruitDisplay===true)
                {
                    eatOrange();
                    fruitDisplay=false;
                }

                else if ((level===5 || level===6) && fruitDisplay===true)
                {
                    eatApple();
                    fruitDisplay=false;
                }

                else if ((level===7 || level===8) && fruitDisplay===true)
                {
                    eatPineapple();
                    fruitDisplay=false;
                }

                else if ((level===9 || level===10) && fruitDisplay===true)
                {
                    eatGalaxianSpaceship();
                    fruitDisplay=false;
                }

                else if ((level===11 || level===12) && fruitDisplay===true)
                {
                    eatBell();
                    fruitDisplay=false;
                }

                else if (level>=13 && fruitDisplay===true)
                {
                    eatKey();
                    fruitDisplay=false;
                }
                break;


    default:
      console.log('\nInvalid Command!');
  }
}

function eatCherry()
{
  if (remainingSmallDots>0)
  {
    score +=100;
  }
  else
  {
      console.log('Not possible');
  }

}

function eatStrawberry()
{
  if (remainingSmallDots>0)
  {
    score +=300;
  }
  else
  {
      console.log('Not possible');
  }
}

function eatOrange()
{
  if (remainingSmallDots>0)
  {
    score +=500;
  }
  else
  {
      console.log('Not possible');
  }
}

function eatApple()
{
  if (remainingSmallDots>0)
  {
    score +=700;
  }
  else
  {
      console.log('Not possible');
  }
}

function eatPineapple()
{
  if (remainingSmallDots>0)
  {
    score +=1000;
  }
  else
  {
      console.log('Not possible');
  }
}

function eatGalaxianSpaceship()
{
  if (remainingSmallDots>0)
  {
    score +=2000;
  }
  else
  {
      console.log('Not possible');
  }
}

function eatBell()
{
  if (remainingSmallDots>0)
  {
    score +=3000;
  }
  else
  {
      console.log('Not possible');
  }
}

function eatKey()
{
  if (remainingSmallDots>0)
  {
    score +=5000;
  }
  else
  {
      console.log('Not possible');
  }
}
//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', function(key) {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', function() {
  console.log('\n\nGame Over!\n');
});

//eating an inedible ghost

function eatGhost(ghost)
{
    if (ghost.edible === false)
    {
      lives--;
      console.log('\nPacman has been hurt by ' + ghost.name);
      ghostEaten=0; //resetting the counter once it gets hurt
      ghost.edible = true;

      if ( lives === 0)
      {
      console.log('\nPacman has been eaten by ' + ghost.name + '. Its color is ' + ghost.color);
      process.exit();
      }
    }

    else
    {

    ghostEaten++;
    if (ghostEaten===1)
    {
      score +=200;
      console.log ('You have eaten' + ghost.name + ' and its personality is ' +ghost.personality + ' and you have earned 200 points');
      ghost.edible = false;
    }
    else if (ghostEaten===2)
    {
      score +=400;
      console.log ('You have eaten' + ghost.name + ' and its personality is ' +ghost.personality + ' and you have earned 400 points');
      ghost.edible = false;
    }
    else if (ghostEaten===3)
    {
      score +=800;
      console.log ('You have eaten' + ghost.name + ' and its personality is ' +ghost.personality + ' and you have earned 800 points');
      ghost.edible = false;
    }
    else if (ghostEaten===4)
    {
      score +=1600;
      console.log ('You have eaten' + ghost.name + ' and its personality is ' +ghost.personality + ' and you have earned 1600 points');
      ghost.edible = false;
      ghostEaten = 0; //resetting the counter
    }


  }

}

function gameOver()
{
  if (lives<0)
  {
    console.log('Game Over!');
    process.exit();
  }

}

function eatPowerPellet()
{
    if(powerPellets>0)
    {
    score +=50;

    for(var index=0; index< ghost.length; index++)
    {
      ghost[index].edible = false;
    }

    powerPellets --;
  }

  else
  {
    console.log('   No more Power Pellets left!');
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

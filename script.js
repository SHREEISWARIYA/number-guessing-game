'use strict';
let score=20;
let highscore=0;

//to generate a random number
let secretNumber=Math.trunc(Math.random()*20)+1;

//to read the input element after clicking the check button
document.querySelector('.check').addEventListener
('click',function()
{
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    //when click event occurs with no input
    if(!guess)
    {
        document.querySelector('.message').textContent='Enter the input value';
    } 
    //when player wins
    else if(guess===secretNumber)
    {
        document.querySelector('.message').textContent='you won!!!!';
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent=secretNumber;
        //css styles
        document.querySelector('body').style.backgroundColor='#60b347';
        //document.querySelector('body').style.width='30rem';
        //setting highscore
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
    //guess is wrong
    else if(guess!=secretNumber)
    {
        if(score>0)
        {
            document.querySelector('.message').textContent=guess>secretNumber?'Too high!!':'Too low!!!';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0;
            
        }
    }
    
})
//again button..to reset
document.querySelector('.again').addEventListener
('click',function()
{
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
})
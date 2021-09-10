let spaceship = document.getElementsByClassName('spaceship')[0];  
let app = document.getElementsByClassName('app')[0];
let explode = document.getElementsByClassName('explosion')[0];
let enemyArea = document.getElementsByClassName('enemyArea')[0];
let playAgainbutton = document.querySelector('button');
let villianHealth = 500;
class Bullet {
    constructor() {

    }
    fireBullet() {
        let bullet = document.createElement('div');
        bullet.classList.add('bullet');
        spaceship.appendChild(bullet);
    }
    destroyBullet() {
        let bullet = document.getElementsByClassName('bullet')[0];
        bullet.remove();
    }
    leaveSpaceShip() {
    
    }
   
}

class Spaceship {
    constructor() {
        this.currentPosX = spaceship.getBoundingClientRect().left;
    }
    move(event) {
       // console.log(event.x+" R "+app.getBoundingClientRect().right+" L "+app.getBoundingClientRect().left +" " + window.innerWidth);        
        if(event.x - app.getBoundingClientRect().left > 25 && app.getBoundingClientRect().right - event.x > 25 ) { //range of space invaders
            spaceship.style.left = `${event.x}px`;

        }      
    }

}

class Enemy{
    constructor() {

    }
    enemyGotDamage() {
        let spaceX = spaceship.getBoundingClientRect().left;
        let enemy = document.getElementsByClassName('enemy')[0];
        let enemyLeft = enemy.getBoundingClientRect().left;
        let enemyRight = enemy.getBoundingClientRect().right;
 
        if(spaceX - enemyLeft > 0 && enemyRight - spaceX > 25 ) { //range of space invaders
            villianHealth-=20
            if(villianHealth <=0 ) {

                alert('You Defeated the Monster!!');

                spaceship.style.display = 'none';
                enemy.style.display = 'none';

                playAgainbutton.style.display = 'inline';
            }
            let score = document.querySelector('h1');
            score.innerHTML = `Enemy Health: ${villianHealth}`;
            explode.style.position = 'absolute';
            explode.style.left = spaceX+"px";
            explode.style.top = '100px'
            explode.style.display = 'block';
           enemyArea.appendChild(explode);

           setTimeout(function() {
            explode.remove();
           }, 700);
            
        }    

        console.log(spaceX+" L: "+enemyLeft+"R: "+ enemyRight);
    }
}

//making spaceShip
let s = new Spaceship();
let e = new Enemy();
document.addEventListener('mousemove', function(event) {
    s.move(event);
}, false)
document.addEventListener('click', function() {
    let bullet = new Bullet();
    bullet.fireBullet();

    setTimeout(function() {
        e.enemyGotDamage();
        bullet.destroyBullet();
    }, 700)
    
})

function resetGame() {
    window.location.reload();
}
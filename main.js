const string=`
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
.skin *::before,
.skin *::after {
    box-sizing: border-box;
  }
  
  .skin {
    background-color: rgb(255, 230, 0);
    min-height: 50vh;
    position: relative;
  }
  .nose {
    position: absolute;
    border: 10px solid red;
    border-color: black transparent transparent;
    width: 10px;
    height: 10px;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(15deg);
    }
    66% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: 50% 100%;
    /*transform-origin: 50% 100%; */
    animation: wave 300ms infinite linear;
  }
  .circle {
    position: absolute;
    width: 20px;
    border-radius: 50% 50% 0 0;
    height: 6px;
    top: -16px;
    left: -10px;
    background-color: black;
  }
  .eye {
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: rgb(46, 46, 46);
  }
  .eye::before {
    content: "";
    display: block;
    border: 1px solid black;
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 10px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 5;
  }
  .mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background-color: rgb(255, 230, 0);
  }
  .mouth .up .left.lip {
    border-radius: 0 0 0 50px;
    transform: rotate(-20deg) translateX(-53px);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 4px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: rgb(255, 230, 0);
  }
  .mouth .up .left.lip::before {
    right: -3px;
  }
  .mouth .up .right.lip {
    border-radius: 0 0 50px 0;
  
    transform: rotate(20deg) translateX(53px);
  }
  .mouth .up .right.lip::before {
    left: -3px;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .circle1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: rgb(155, 0, 10);
    overflow: hidden;
  }
  .mouth .down .circle1 .circle2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background-color: rgb(255, 72, 95);
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 7;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left > img {
    transform-origin: 0 0;
    transform: rotateY(180deg);
  }
  .face.left {
    transform: translateX(-180px);
    background-color: #ff0000;
    border-radius: 50%;
  }
  
  .face.right {
    transform: translateX(180px);
    background-color: #ff0000;
    border-radius: 50%;
  }
  

`


const player={
    id:undefined,
    time:100,
    n:1,
    ui:{
      demo:document.querySelector('#demo'),
      demo2:document.querySelector('#demo2')
    },
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    init:()=>{
        player.ui.demo.innerText=string.substr(0,player.n)
        player.ui.demo2.innerHTML=string.substr(0,player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value=player.events[key]
                document.querySelector(key).onclick=player[value]
            }
        }
    },
    run:()=>{
        player.n += 1
        if(player.n>string.length){
            window.clearInterval(id)
            return
        }
        demo.innerText=string.substr(0,player.n)
    player.ui.demo2.innerHTML=string.substr(0,player.n)
    player.ui.demo.scrollTop=demo.scrollHeight
    },
    play:()=>{player.id=setInterval(player.run,player.time)},
    pause:()=>{window.clearInterval(player.id) },
    slow:()=>{ 
    player.pause()
    player.time=300
    player.play()
},
normal:()=>{
    player.pause()
    player.time=100
    player.play()
},
fast:()=>{
    player.pause()
    player.time=0
    player.play()
}
}


player.init()
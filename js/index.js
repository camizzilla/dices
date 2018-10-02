/*jshint esversion: 6 */

window.onload = () => {
  'use strict';
  
  class dice {
    constructor(id) {
      this.html   = document.getElementById(id);
      this.createDice();
      this.timer  = 0;
      this.timeDeceleration = 1;
      this.diceValue = 6;
      this.diceFaces  = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
      this.result = 1;
      
      this.html.addEventListener("click", this.throw);
      this.init();
    }
    
    init(){
      this.print(this.result);
    }

    createDice = () => {
      let div = document.createElement("div");
      div.setAttribute('class', 'dice');                  
      div.setAttribute('id', 'dice');  
    }
    
    stop = () => {
     clearTimeout(this.timer);
      this.console(this.result)
    }  

    random() {
      return Math.floor(Math.random() * this.diceValue);
    }
    
    print(res) {
      this.html.innerHTML = this.diceFaces[res];
    }
  
    processing = () => {
      let rand = this.random();
      this.print(rand);
      this.result = rand + 1;
    }
    
    cycle = () =>{
      this.timeDeceleration += 20;
      this.processing();
      this.timer = setTimeout(this.cycle, this.timeDeceleration);
    }
    
    throw = () => {
      setTimeout(this.stop, 3000);
      this.cycle();
    }
    
    console(res){
      return console.log(`Il risultato è ${res} 🎲`);
    }
  }
  
let dices = [];
let diceee = new dice("dice");
}
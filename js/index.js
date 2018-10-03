/*jshint esversion: 6 */

window.onload = () => {
  'use strict';
  let container = document.getElementById("container");
  
  class dice {
    constructor() {
      this.el = this.createDice();
      this.timer  = 0;
      this.timeDeceleration = 1;
      this.diceValue = 6;
      this.diceFaces  = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
      
      this.el.addEventListener("click", this.throw.bind(this), false);
      
      this.init();
    }
    
    init(){
      this.print(this.random());
    }

    createDice(){
      let div = document.createElement('div');
      div.setAttribute('class', 'dice');                  
      return div;
    }
    
    stop(){
     clearTimeout(this.timer);
      this.console(this.result)
    };

    random() {
      return Math.floor(Math.random() * this.diceValue);
    }
    
    print(res) {
      this.el.innerHTML = this.diceFaces[res];
    }
  
     processing(){
      let rand = this.random();
      this.print(rand);
      return rand + 1;
    }
    
    cycle(){
      this.timeDeceleration += 20;
      this.result = this.processing();
      this.timer = setTimeout(this.cycle.bind(this), this.timeDeceleration);
    }
    
    throw(){
      setTimeout(this.stop.bind(this), 3000);
      this.cycle();
    }
    
    console(res){
      return console.log(`Il risultato è ${res} 🎲`);
    }
  }
  
  let dice1 = new dice();
  let dice2 = new dice();
  let dices = [dice1,dice2];

container.appendChild(...dices);
}